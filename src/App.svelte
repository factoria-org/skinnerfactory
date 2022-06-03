<script>
let contract;
let network;
let loaded;
let display = "hidden";
let generatorDisplay = "";
let zipfile;
let repository;
let infura;
const files = {
  "https://factoria-org.github.io/skinnerbox/": [
    ".nojekyll",
    "README.md",
    "box.png",
    "index.html",
    "mint.html",
    "opensea.png",
    "rarible.png",
    "skinnerbox.gif",
    "style.css",
  ],
  "https://factoria-org.github.io/skinnerbox2/": [
    ".nojekyll",
    "README.md",
    "box.png",
    "connect.js",
    "index.html",
    "mint.html",
    "opensea.png",
    "rarible.png",
    "skinnerbox.gif",
    "skinnerbox2.gif",
    "style.css",
  ],
}
const web3 = new Web3(window.ethereum)
const f0 = new F0();
const clone = (baseURI, urls) => {
  return Promise.all(urls.map((url) => {
    return fetch(baseURI + url).then(resp => resp.blob());
  }))
}
const box = (zip) => {
  let json = {
    contract,
    network
  }
  if (infura) {
    json.infura = infura
  }
  const bytes = new TextEncoder().encode(JSON.stringify(json))
  zip.file("box.json", new Blob([bytes], { type: "application/json;charset=utf-8" }));
}
const cache = async (zip) => {
  await f0.init({
    web3: web3,
    contract,
    cache: true
  })
  await f0.config()
  await f0.invites()

  // download placeholder image
  let p = await f0.placeholder()
  let image = p.converted.image
  let blob = await fetch(image).then((res) => {
    return res.blob()
  })
  let cid = p.raw.image.replace("ipfs://" , "")
  zip.file(cid, blob)

  f0.cached[image] = cid

  console.log("f0.cached", f0.cached)
  let cacheJSON = JSON.stringify(f0.cached, null, 2)
  const bytes = new TextEncoder().encode(cacheJSON)
  zip.file("cached.json", new Blob([bytes], { type: "application/json;charset=utf-8" }));
}
const sync = async () => {
  // Fetch Invites
  display = ""
  generatorDisplay = "hidden"
  // Download files from skinnerbox
  let f = files[repository]
  let blobs = await clone(repository, f)
  // write files to the folder
  const zip = JSZip();
  for(let i=0; i<f.length; i++) {
    let file = f[i]
    zip.file(file, blobs[i])
  }
  let boxjson = await box(zip)
  let cached = await cache(zip)

  // zip
  zipfile = await zip.generateAsync({type: 'blob'})
  loaded = true;
  display = "hidden"
  await saveAs(zipfile, "skinnerbox.zip");
}
const generate = async () => {
  if (contract && network && !loaded) {
    if (network === "rinkeby" || network === "main") {
      await sync()
      console.log("synchronized")
    } else {
      alert("must be either 'rinkeby' or 'main'")
    }
  }
}
web3.eth.getChainId().then((chainId) => {
  if (chainId.toString() === "4") {
    network = "rinkeby"
  } else if (chainId.toString() === "1") {
    network = "main"
  }
})
</script>
<main>
  <nav>
    <h1>skinnerbox</h1>
    <div class='description'>factoria minting site generator</div>
    <div class='connection'>connected to {network}</div>
  </nav>
  <section>
    <h2>Step 1. Deploy collection</h2>
    <div class='description'>First deploy your contract on <a href="https://factoria.app">Factoria</a>.</div>
  </section>
  <section>
    <h2>Step 2. Download website</h2>
    <div class='description'>Enter your collection address, and select either "Skinnerbox 1" or "Skinnerbox 2" (Mobile support).</div>
    <form method='post' on:submit|preventDefault|stopPropagation={generate}>
      <select bind:value={repository}>
        <option value="https://factoria-org.github.io/skinnerbox/">Skinnerbox 1</option>
        <option value="https://factoria-org.github.io/skinnerbox2/">Skinnerbox 2</option>
      </select>
      <input type='text' bind:value={contract} placeholder="enter your {network} factoria contract address">
      {#if repository == "https://factoria-org.github.io/skinnerbox2/"}
        <input type='text' bind:value={infura} placeholder="enter your infura ID (required for walletconnect)">
      {/if}
      <input type='submit' class='btn {generatorDisplay}' value='download'>
    </form>
    <div class='loading {display}'>
      <i class="fa-solid fa-circle-notch fa-spin"></i> Generating...
    </div>
  </section>
  <section>
    <h2>Step 2. Publish website</h2>
    <div class='description'>Once you download your website, you can publish it anywhere. GitHub pages, Vercel, Netlify, or whichever web hosting provider you use.</div>
    <blockquote>
      <div class='description'><b>TIP:</b> Want to try publishing instantly without hassle?<br>Go to Netlify drop and just drag & drop the downloaded zip file.</div>
      <div>
        <a target="_blank" class='btn' href="https://app.netlify.com/drop">Publish on Netlify</a>
      </div>
      <br>
      <img src="skinnerboxgen.gif">
    </blockquote>
  </section>
</main>
<style>
nav {
  text-align: center;
  margin-bottom: 40px;
}
h1 {
  font-size: 40px;
  letter-spacing: -2px;
  margin: 0px;
}
a {
  color: yellowgreen;
}
h2 {
  color: white;
  margin: 0 0 10px;
  font-size: 30px;
  letter-spacing: -1px;
}
.loading {
  padding: 10px;
  text-align: center;
}
blockquote {
  padding: 20px;
  margin: 10px 0 0;
  background: rgba(0,0,0,0.1);
}
section img {
  width: 100%;
}
main {
  font-size: 14px;
  max-width: 800px;
  width: 100%;
  margin: 100px auto;
}
section {
  margin: 20px 0;
  /*
  border-top: 1px solid rgba(255,255,255,0.1);
  */
  border-left: 3px solid rgba(255,255,255,0.5);
  padding: 20px 30px;
  box-sizing: border-box;
}
hr {
  border: none;
  background: rgba(255,255,255,0.1);
  height: 1px;
  margin: 20px 0;
}
.hidden {
  display: none !important;
}
.description {
  margin-bottom: 10px;
}
select {
  width: 100%;
  padding: 10px;
  font-weight: bold;
  color: royalblue;
}
input[type=submit], button, .btn {
  display: inline-block;
  background: none;
  color: white;
  padding: 5px 20px;
  border-radius: 2px;
  text-decoration: none;
  border: 1px solid rgba(255,255,255,0.8);
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
}
input[type=text] {
  border: none;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  display: block;
  margin: 10px 0;
}
.connection {
  color: yellowgreen;
  font-weight: bold;
  margin: 20px 0;
}
</style>
