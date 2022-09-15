<script>
import Preview from "./lib/Preview.svelte";
let contract = (location.hash.length > 0 ? location.hash.slice(1) : "");
let network;
let loaded;
let display = "hidden";
let generatorDisplay = "";
let zipfile;
let repository;
let infura;
let step = 1;
let customstyle;
const files = {
  "https://factoria-org.github.io/skinnerbox/": [
    ".nojekyll",
    "README.md",
    "box.png",
    "index.html",
    "mint.html",
    "opensea.png",
    "looksrare.png",
    "rarible.png",
    "skinnerbox.gif",
    "style.css",
    "custom.css",
    "etherscan.png",
    "handleerror.js",
  ],
  "https://factoria-org.github.io/skinnerbox2/": [
    ".nojekyll",
    "README.md",
    "box.png",
    "connect.js",
    "index.html",
    "mint.html",
    "opensea.png",
    "looksrare.png",
    "rarible.png",
    "skinnerbox.gif",
    "skinnerbox2.gif",
    "style.css",
    "custom.css",
    "etherscan.png",
    "handleerror.js",
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
  // Start caching
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
  let cacheJSON = JSON.stringify(f0.cached, null, 2)
  const bytes = new TextEncoder().encode(cacheJSON)
  zip.file("cached.json", new Blob([bytes], { type: "application/json;charset=utf-8" }));

}
const custom = async (zip) => {
  if (customstyle) {
    const cssbytes = new TextEncoder().encode(customstyle)
    zip.file("custom.css", new Blob([cssbytes], { type: "text/css" }))
  }
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
  await box(zip)
  await cache(zip)
  await custom(zip)
  // zip
  zipfile = await zip.generateAsync({type: 'blob'})
  loaded = true;
  display = "hidden"
  await saveAs(zipfile, "skinnerbox.zip");
}
const generate = async () => {
  if (contract && network && !loaded) {
    if (network === "rinkeby" || network === "main" || network === "goerli") {
      await sync()
    } else {
      alert("must be either 'rinkeby' or 'main' or 'goerli'")
    }
  }
}
const init = async () => {
  let chainId = await web3.eth.getChainId()
  if (chainId.toString() === "5") {
    network = "goerli"
  } else if (chainId.toString() === "4") {
    network = "rinkeby"
  } else if (chainId.toString() === "1") {
    network = "main"
  }
}
const style = (e) => {
  console.log(e.detail.style)
  customstyle = e.detail.style
}
init()
</script>
<main>
  <nav>
    <h1>skinnerbox</h1>
    <div class='description'>NFT vending machine vending machine</div>
    <div class='buttons'>
      <a href="https://factoria.app/docs"><i class="fa-solid fa-circle-question"></i></a>
      <a href="https://github.com/factoria-org/openfactoria"><i class="fa-brands fa-github"></i>    </a>
      <a href="https://twitter.com/skogard"><i class="fa-brands fa-twitter"></i></a>
      <a href="https://discord.gg/BZtp5F6QQM"><i class="fa-brands fa-discord"></i></a>
    </div>
  </nav>
  <section>
    <h2>Step 1. Customize collection</h2>
    <div class='description'>Deploy your contract on <a href="https://open.factoria.app">Factoria</a> and enter the contract address below:</div>
    <input type='text' bind:value={contract} placeholder="enter your {network} factoria contract address">
    {#if network && contract && web3}
    <Preview network={network} contract={contract} web3={web3} on:style={style}/>
    {/if}
  </section>
  <section>
    <h2>Step 2. Download website</h2>
    <div class='description'>Enter your collection address, and select either "Skinnerbox 1" or "Skinnerbox 2" (Mobile support).</div>
    <form method='post' on:submit|preventDefault|stopPropagation={generate}>
      <select bind:value={repository}>
        <option value="https://factoria-org.github.io/skinnerbox/">Skinnerbox 1</option>
        <option value="https://factoria-org.github.io/skinnerbox2/">Skinnerbox 2</option>
      </select>
      <input type='hidden' bind:value={contract} placeholder="enter your {network} factoria contract address">
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
    <h2>Step 3. Publish website</h2>
    <div class='description'>Once you download your website, you can publish it anywhere. Just unzip it and upload to any web hosting provider, such as <a href="https://pages.github.com/">GitHub pages</a>, <a target="_blank" href="https://vercel.com">Vercel</a>, <a target="_blank" href="https://www.netlify.com/">Netlify</a>, or whichever web hosting provider you use.</div>
    <blockquote>
      <div class='description'><b>TIP:</b> Want to try publishing instantly without hassle?<br>Go to Netlify drop and just drag & drop the downloaded zip file.</div>
      <img src="skinnerboxgen.gif">
      <br>
      <div>
        <a target="_blank" class='btn' href="https://app.netlify.com/drop"><i class="fa-solid fa-upload"></i> Instant Publish with Netlify Drop</a>
      </div>
    </blockquote>
  </section>
</main>
<style>
nav {
  padding: 20px 0 10px;
  margin: 0;
}
h1 {
  font-size: 40px;
  letter-spacing: -2px;
  margin: 0px;
}
a {
  color: black;
}
h2 {
  color: black;
  margin: 0 0 10px;
  font-size: 30px;
  letter-spacing: -1px;
}
.loading {
  margin-top: 10px;
  padding: 10px;
  text-align: center;
}
blockquote {
  padding: 20px;
  margin: 20px 0 0;
}
section img {
  width: 100%;
}
main {
  font-size: 14px;
  width: 100%;
  margin: 0 auto;
  max-width: 700px;
  padding: 10px;
  box-sizing: border-box;
}
section {
  color: black;
  background: #fafafa;
  border: 2px solid #eaeaea;
  padding: 20px;
  box-sizing: border-box;
  margin: 20px 0;
}
section > *{
}
hr {
  border: none;
  height: 1px;
  margin: 20px 0;
}
.hidden {
  display: none !important;
}
.description {
  margin-bottom: 10px;
  color: black;
}
select {
  width: 100%;
  padding: 10px;
  font-weight: bold;
  color: black;
  border: 2px solid #eaeaea;
}
input[type=submit], button, .btn {
  background: black;
  color: white;
  cursor: pointer;
  display: inline-block;
  padding: 15px 20px;
  border-radius: 2px;
  text-decoration: none;
  margin-top: 5px;
  border: none;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  width: 100%;
  box-sizing: border-box;
  margin: 10px 0;
  text-align: center;
}
input[type=text] {
  border: 2px solid #eaeaea;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  display: block;
  margin: 10px 0;
}
.connection {
  font-weight: bold;
  border-left: 5px solid black;
  padding: 5px 10px;
  margin: 10px 0;
  font-size: 12px;
}
.buttons {
  padding: 10px 0;
}
.buttons a {
  padding: 5px;
  color: black;
}
</style>
