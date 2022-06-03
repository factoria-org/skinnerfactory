const pe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};pe();function K(){}function fe(e){return e()}function le(){return Object.create(null)}function q(e){e.forEach(fe)}function he(e){return typeof e=="function"}function ge(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function be(e){return Object.keys(e).length===0}function l(e,t){e.appendChild(t)}function ue(e,t,n){e.insertBefore(t,n||null)}function ee(e){e.parentNode.removeChild(e)}function u(e){return document.createElement(e)}function H(e){return document.createTextNode(e)}function S(){return H(" ")}function R(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function me(e){return function(t){return t.preventDefault(),e.call(this,t)}}function _e(e){return function(t){return t.stopPropagation(),e.call(this,t)}}function c(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ve(e){return Array.from(e.childNodes)}function ye(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function V(e,t){e.value=t==null?"":t}function se(e,t){for(let n=0;n<e.options.length;n+=1){const i=e.options[n];if(i.__value===t){i.selected=!0;return}}e.selectedIndex=-1}function we(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}let te;function T(e){te=e}const M=[],re=[],W=[],ce=[],ke=Promise.resolve();let Y=!1;function xe(){Y||(Y=!0,ke.then(de))}function Z(e){W.push(e)}const X=new Set;let G=0;function de(){const e=te;do{for(;G<M.length;){const t=M[G];G++,T(t),Se(t.$$)}for(T(null),M.length=0,G=0;re.length;)re.pop()();for(let t=0;t<W.length;t+=1){const n=W[t];X.has(n)||(X.add(n),n())}W.length=0}while(M.length);for(;ce.length;)ce.pop()();Y=!1,X.clear(),T(e)}function Se(e){if(e.fragment!==null){e.update(),q(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Z)}}const Ee=new Set;function $e(e,t){e&&e.i&&(Ee.delete(e),e.i(t))}function je(e,t,n,i){const{fragment:o,on_mount:s,on_destroy:d,after_update:y}=e.$$;o&&o.m(t,n),i||Z(()=>{const v=s.map(fe).filter(he);d?d.push(...v):q(v),e.$$.on_mount=[]}),y.forEach(Z)}function Ne(e,t){const n=e.$$;n.fragment!==null&&(q(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ae(e,t){e.$$.dirty[0]===-1&&(M.push(e),xe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Oe(e,t,n,i,o,s,d,y=[-1]){const v=te;T(e);const r=e.$$={fragment:null,ctx:null,props:s,update:K,not_equal:o,bound:le(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(v?v.$$.context:[])),callbacks:le(),dirty:y,skip_bound:!1,root:t.target||v.$$.root};d&&d(r.root);let w=!1;if(r.ctx=n?n(e,t.props||{},(g,j,...a)=>{const E=a.length?a[0]:j;return r.ctx&&o(r.ctx[g],r.ctx[g]=E)&&(!r.skip_bound&&r.bound[g]&&r.bound[g](E),w&&Ae(e,g)),j}):[],r.update(),w=!0,q(r.before_update),r.fragment=i?i(r.ctx):!1,t.target){if(t.hydrate){const g=ve(t.target);r.fragment&&r.fragment.l(g),g.forEach(ee)}else r.fragment&&r.fragment.c();t.intro&&$e(e.$$.fragment),je(e,t.target,t.anchor,t.customElement),de()}T(v)}class Ce{$destroy(){Ne(this,1),this.$destroy=K}$on(t,n){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(t){this.$$set&&!be(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ae(e){let t,n,i;return{c(){t=u("input"),c(t,"type","text"),c(t,"placeholder","enter your infura ID (required for walletconnect)"),c(t,"class","svelte-1fotc20")},m(o,s){ue(o,t,s),V(t,e[5]),n||(i=R(t,"input",e[9]),n=!0)},p(o,s){s&32&&t.value!==o[5]&&V(t,o[5])},d(o){o&&ee(t),n=!1,i()}}}function Le(e){let t,n,i,o,s,d,y,v,r,w,g,j,a,E,I,L,z,b,k,N,A,p,f,h,x,O,C,P,B,D,Q,ne,F,oe,J,U,ie,m=e[4]=="https://factoria-org.github.io/skinnerbox2/"&&ae(e);return{c(){t=u("main"),n=u("nav"),i=u("h1"),i.textContent="skinnerbox",o=S(),s=u("div"),s.textContent="factoria minting site generator",d=S(),y=u("div"),v=H("connected to "),r=H(e[1]),w=S(),g=u("section"),g.innerHTML=`<h2 class="svelte-1fotc20">Step 1. Deploy collection</h2> 
    <div class="description svelte-1fotc20">First deploy your contract on <a href="https://factoria.app" class="svelte-1fotc20">Factoria</a>.</div>`,j=S(),a=u("section"),E=u("h2"),E.textContent="Step 2. Download website",I=S(),L=u("div"),L.textContent='Enter your collection address, and select either "Skinnerbox 1" or "Skinnerbox 2" (Mobile support).',z=S(),b=u("form"),k=u("select"),N=u("option"),N.textContent="Skinnerbox 1",A=u("option"),A.textContent="Skinnerbox 2",p=S(),f=u("input"),x=S(),m&&m.c(),O=S(),C=u("input"),B=S(),D=u("div"),Q=u("i"),ne=H(" Generating..."),oe=S(),J=u("section"),J.innerHTML=`<h2 class="svelte-1fotc20">Step 2. Publish website</h2> 
    <div class="description svelte-1fotc20">Once you download your website, you can publish it anywhere. GitHub pages, Vercel, Netlify, or whichever web hosting provider you use.</div> 
    <blockquote class="svelte-1fotc20"><div class="description svelte-1fotc20"><b>TIP:</b> Want to try publishing instantly without hassle?<br/>Go to Netlify drop and just drag &amp; drop the downloaded zip file.</div> 
      <div><a target="_blank" class="btn svelte-1fotc20" href="https://app.netlify.com/drop">Publish on Netlify</a></div> 
      <br/> 
      <img src="skinnerboxgen.gif" class="svelte-1fotc20"/></blockquote>`,c(i,"class","svelte-1fotc20"),c(s,"class","description svelte-1fotc20"),c(y,"class","connection svelte-1fotc20"),c(n,"class","svelte-1fotc20"),c(g,"class","svelte-1fotc20"),c(E,"class","svelte-1fotc20"),c(L,"class","description svelte-1fotc20"),N.__value="https://factoria-org.github.io/skinnerbox/",N.value=N.__value,A.__value="https://factoria-org.github.io/skinnerbox2/",A.value=A.__value,c(k,"class","svelte-1fotc20"),e[4]===void 0&&Z(()=>e[7].call(k)),c(f,"type","text"),c(f,"placeholder",h="enter your "+e[1]+" factoria contract address"),c(f,"class","svelte-1fotc20"),c(C,"type","submit"),c(C,"class",P="btn "+e[3]+" svelte-1fotc20"),C.value="download",c(b,"method","post"),c(Q,"class","fa-solid fa-circle-notch fa-spin"),c(D,"class",F="loading "+e[2]+" svelte-1fotc20"),c(a,"class","svelte-1fotc20"),c(J,"class","svelte-1fotc20"),c(t,"class","svelte-1fotc20")},m(_,$){ue(_,t,$),l(t,n),l(n,i),l(n,o),l(n,s),l(n,d),l(n,y),l(y,v),l(y,r),l(t,w),l(t,g),l(t,j),l(t,a),l(a,E),l(a,I),l(a,L),l(a,z),l(a,b),l(b,k),l(k,N),l(k,A),se(k,e[4]),l(b,p),l(b,f),V(f,e[0]),l(b,x),m&&m.m(b,null),l(b,O),l(b,C),l(a,B),l(a,D),l(D,Q),l(D,ne),l(t,oe),l(t,J),U||(ie=[R(k,"change",e[7]),R(f,"input",e[8]),R(b,"submit",_e(me(e[6])))],U=!0)},p(_,[$]){$&2&&ye(r,_[1]),$&16&&se(k,_[4]),$&2&&h!==(h="enter your "+_[1]+" factoria contract address")&&c(f,"placeholder",h),$&1&&f.value!==_[0]&&V(f,_[0]),_[4]=="https://factoria-org.github.io/skinnerbox2/"?m?m.p(_,$):(m=ae(_),m.c(),m.m(b,O)):m&&(m.d(1),m=null),$&8&&P!==(P="btn "+_[3]+" svelte-1fotc20")&&c(C,"class",P),$&4&&F!==(F="loading "+_[2]+" svelte-1fotc20")&&c(D,"class",F)},i:K,o:K,d(_){_&&ee(t),m&&m.d(),U=!1,q(ie)}}}function Pe(e,t,n){let i=location.hash.length>0?location.hash.slice(1):"",o,s,d="hidden",y="",v,r,w;const g={"https://factoria-org.github.io/skinnerbox/":[".nojekyll","README.md","box.png","index.html","mint.html","opensea.png","rarible.png","skinnerbox.gif","style.css"],"https://factoria-org.github.io/skinnerbox2/":[".nojekyll","README.md","box.png","connect.js","index.html","mint.html","opensea.png","rarible.png","skinnerbox.gif","skinnerbox2.gif","style.css"]},j=new Web3(window.ethereum),a=new F0,E=(p,f)=>Promise.all(f.map(h=>fetch(p+h).then(x=>x.blob()))),I=p=>{let f={contract:i,network:o};w&&(f.infura=w);const h=new TextEncoder().encode(JSON.stringify(f));p.file("box.json",new Blob([h],{type:"application/json;charset=utf-8"}))},L=async p=>{await a.init({web3:j,contract:i,cache:!0}),await a.config(),await a.invites();let f=await a.placeholder(),h=f.converted.image,x=await fetch(h).then(B=>B.blob()),O=f.raw.image.replace("ipfs://","");p.file(O,x),a.cached[h]=O,console.log("f0.cached",a.cached);let C=JSON.stringify(a.cached,null,2);const P=new TextEncoder().encode(C);p.file("cached.json",new Blob([P],{type:"application/json;charset=utf-8"}))},z=async()=>{n(2,d=""),n(3,y="hidden");let p=g[r],f=await E(r,p);const h=JSZip();for(let x=0;x<p.length;x++){let O=p[x];h.file(O,f[x])}await I(h),await L(h),v=await h.generateAsync({type:"blob"}),s=!0,n(2,d="hidden"),await saveAs(v,"skinnerbox.zip")},b=async()=>{i&&o&&!s&&(o==="rinkeby"||o==="main"?(await z(),console.log("synchronized")):alert("must be either 'rinkeby' or 'main'"))};j.eth.getChainId().then(p=>{p.toString()==="4"?n(1,o="rinkeby"):p.toString()==="1"&&n(1,o="main")});function k(){r=we(this),n(4,r)}function N(){i=this.value,n(0,i)}function A(){w=this.value,n(5,w)}return[i,o,d,y,r,w,b,k,N,A]}class De extends Ce{constructor(t){super(),Oe(this,t,Pe,Le,ge,{})}}new De({target:document.getElementById("app")});