const He=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}};He();function ue(){}function Pe(e){return e()}function qe(){return Object.create(null)}function oe(e){e.forEach(Pe)}function Be(e){return typeof e=="function"}function Te(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let pe;function ze(e,t){return pe||(pe=document.createElement("a")),pe.href=t,e===pe.href}function Je(e){return Object.keys(e).length===0}function l(e,t){e.appendChild(t)}function ne(e,t,n){e.insertBefore(t,n||null)}function $(e){e.parentNode.removeChild(e)}function Ge(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function a(e){return document.createElement(e)}function W(e){return document.createTextNode(e)}function b(){return W(" ")}function Qe(){return W("")}function Q(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function Re(e){return function(t){return t.preventDefault(),e.call(this,t)}}function We(e){return function(t){return t.stopPropagation(),e.call(this,t)}}function i(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ze(e){return Array.from(e.childNodes)}function fe(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function B(e,t){e.value=t==null?"":t}function te(e,t,n,o){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,o?"important":"")}function Ee(e,t){for(let n=0;n<e.options.length;n+=1){const o=e.options[n];if(o.__value===t){o.selected=!0;return}}e.selectedIndex=-1}function Ke(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}function Ve(e,t,{bubbles:n=!1,cancelable:o=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(e,n,o,t),s}let de;function ae(e){de=e}function Me(){if(!de)throw new Error("Function called outside component initialization");return de}function Ue(e){Me().$$.on_mount.push(e)}function Xe(){const e=Me();return(t,n,{cancelable:o=!1}={})=>{const s=e.$$.callbacks[t];if(s){const r=Ve(t,n,{cancelable:o});return s.slice().forEach(p=>{p.call(e,r)}),!r.defaultPrevented}return!0}}const re=[],xe=[],me=[],Ce=[],Ye=Promise.resolve();let ye=!1;function $e(){ye||(ye=!0,Ye.then(Oe))}function ve(e){me.push(e)}const _e=new Set;let he=0;function Oe(){const e=de;do{for(;he<re.length;){const t=re[he];he++,ae(t),et(t.$$)}for(ae(null),re.length=0,he=0;xe.length;)xe.pop()();for(let t=0;t<me.length;t+=1){const n=me[t];_e.has(n)||(_e.add(n),n())}me.length=0}while(re.length);for(;Ce.length;)Ce.pop()();ye=!1,_e.clear(),ae(e)}function et(e){if(e.fragment!==null){e.update(),oe(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ve)}}const be=new Set;let se;function tt(){se={r:0,c:[],p:se}}function nt(){se.r||oe(se.c),se=se.p}function ce(e,t){e&&e.i&&(be.delete(e),e.i(t))}function we(e,t,n,o){if(e&&e.o){if(be.has(e))return;be.add(e),se.c.push(()=>{be.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}}function lt(e){e&&e.c()}function Ae(e,t,n,o){const{fragment:s,on_mount:r,on_destroy:p,after_update:g}=e.$$;s&&s.m(t,n),o||ve(()=>{const _=r.map(Pe).filter(Be);p?p.push(..._):oe(_),e.$$.on_mount=[]}),g.forEach(ve)}function Ie(e,t){const n=e.$$;n.fragment!==null&&(oe(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function st(e,t){e.$$.dirty[0]===-1&&(re.push(e),$e(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function De(e,t,n,o,s,r,p,g=[-1]){const _=de;ae(e);const c=e.$$={fragment:null,ctx:null,props:r,update:ue,not_equal:s,bound:qe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(_?_.$$.context:[])),callbacks:qe(),dirty:g,skip_bound:!1,root:t.target||_.$$.root};p&&p(c.root);let m=!1;if(c.ctx=n?n(e,t.props||{},(y,u,...w)=>{const k=w.length?w[0]:u;return c.ctx&&s(c.ctx[y],c.ctx[y]=k)&&(!c.skip_bound&&c.bound[y]&&c.bound[y](k),m&&st(e,y)),u}):[],c.update(),m=!0,oe(c.before_update),c.fragment=o?o(c.ctx):!1,t.target){if(t.hydrate){const y=Ze(t.target);c.fragment&&c.fragment.l(y),y.forEach($)}else c.fragment&&c.fragment.c();t.intro&&ce(e.$$.fragment),Ae(e,t.target,t.anchor,t.customElement),Oe()}ae(_)}class Fe{$destroy(){Ie(this,1),this.$destroy=ue}$on(t,n){const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const s=o.indexOf(n);s!==-1&&o.splice(s,1)}}$set(t){this.$$set&&!Je(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Se(e,t,n){const o=e.slice();return o[22]=t[n],o}function ot(e){let t,n,o,s,r,p,g,_,c,m,y,u,w,k,v,z,h,F,V,O,N,L,I,q,Z,P,f,x,C,D,A,U,R,K,X,ee,ie,J=e[3],T=[];for(let d=0;d<J.length;d+=1)T[d]=je(Se(e,J,d));return{c(){t=a("div"),n=a("div"),o=a("label"),o.textContent="background",s=b(),r=a("input"),p=b(),g=a("div"),_=a("label"),_.textContent="color",c=b(),m=a("input"),y=b(),u=a("div"),w=a("label"),w.textContent="button background",k=b(),v=a("input"),z=b(),h=a("div"),F=a("label"),F.textContent="button color",V=b(),O=a("input"),N=b(),L=a("div"),I=a("div"),q=a("img"),P=b(),f=a("h1"),x=W(e[0]),C=W(" ("),D=W(e[1]),A=W(" Invite List"),U=b(),R=a("table"),K=a("tr"),K.innerHTML=`<th class="svelte-1t1z5qr">mint price</th> 
    <th class="svelte-1t1z5qr">mint limit</th> 
    <th class="svelte-1t1z5qr">Invite</th>`,X=b();for(let d=0;d<T.length;d+=1)T[d].c();i(o,"class","svelte-1t1z5qr"),i(r,"type","text"),i(r,"class","svelte-1t1z5qr"),i(n,"class","editor-item svelte-1t1z5qr"),i(_,"class","svelte-1t1z5qr"),i(m,"type","text"),i(m,"class","svelte-1t1z5qr"),i(g,"class","editor-item svelte-1t1z5qr"),i(w,"class","svelte-1t1z5qr"),i(v,"type","text"),i(v,"class","svelte-1t1z5qr"),i(u,"class","editor-item svelte-1t1z5qr"),i(F,"class","svelte-1t1z5qr"),i(O,"type","text"),i(O,"class","svelte-1t1z5qr"),i(h,"class","editor-item svelte-1t1z5qr"),i(t,"class","form"),ze(q.src,Z=e[2])||i(q,"src",Z),i(q,"class","svelte-1t1z5qr"),i(f,"class","svelte-1t1z5qr"),i(K,"class","svelte-1t1z5qr"),i(R,"class","invites svelte-1t1z5qr"),i(I,"class","box svelte-1t1z5qr"),i(L,"class","body svelte-1t1z5qr"),te(L,"background",e[4]),te(L,"color",e[5])},m(d,S){ne(d,t,S),l(t,n),l(n,o),l(n,s),l(n,r),B(r,e[4]),l(t,p),l(t,g),l(g,_),l(g,c),l(g,m),B(m,e[5]),l(t,y),l(t,u),l(u,w),l(u,k),l(u,v),B(v,e[7]),l(t,z),l(t,h),l(h,F),l(h,V),l(h,O),B(O,e[6]),ne(d,N,S),ne(d,L,S),l(L,I),l(I,q),l(I,P),l(I,f),l(f,x),l(f,C),l(f,D),l(f,A),l(I,U),l(I,R),l(R,K),l(R,X);for(let j=0;j<T.length;j+=1)T[j].m(R,null);ee||(ie=[Q(r,"input",e[13]),Q(r,"change",e[9]),Q(m,"input",e[14]),Q(m,"change",e[9]),Q(v,"input",e[15]),Q(v,"change",e[9]),Q(O,"input",e[16]),Q(O,"change",e[9])],ee=!0)},p(d,S){if(S&16&&r.value!==d[4]&&B(r,d[4]),S&32&&m.value!==d[5]&&B(m,d[5]),S&128&&v.value!==d[7]&&B(v,d[7]),S&64&&O.value!==d[6]&&B(O,d[6]),S&4&&!ze(q.src,Z=d[2])&&i(q,"src",Z),S&1&&fe(x,d[0]),S&2&&fe(D,d[1]),S&200){J=d[3];let j;for(j=0;j<J.length;j+=1){const le=Se(d,J,j);T[j]?T[j].p(le,S):(T[j]=je(le),T[j].c(),T[j].m(R,null))}for(;j<T.length;j+=1)T[j].d(1);T.length=J.length}S&16&&te(L,"background",d[4]),S&32&&te(L,"color",d[5])},d(d){d&&$(t),d&&$(N),d&&$(L),Ge(T,d),ee=!1,oe(ie)}}}function it(e){let t;return{c(){t=a("div"),t.innerHTML='<i class="fa-solid fa-circle-notch fa-spin"></i><br/>loading...',i(t,"class","loader svelte-1t1z5qr")},m(n,o){ne(n,t,o)},p:ue,d(n){n&&$(t)}}}function je(e){let t,n,o=e[22].eth+"",s,r,p,g,_=e[22].limit+"",c,m,y,u,w,k,v;return{c(){t=a("tr"),n=a("td"),s=W(o),r=W(" ETH"),p=b(),g=a("td"),c=W(_),m=b(),y=a("td"),u=a("a"),w=W("Go"),v=b(),i(n,"class","svelte-1t1z5qr"),i(g,"class","svelte-1t1z5qr"),i(u,"class","btn svelte-1t1z5qr"),i(u,"href",k="mint.html#address="+e[22].address+"&key="+e[22].key),te(u,"background",e[7]),te(u,"color",e[6]),i(y,"class","svelte-1t1z5qr"),i(t,"class","svelte-1t1z5qr")},m(z,h){ne(z,t,h),l(t,n),l(n,s),l(n,r),l(t,p),l(t,g),l(g,c),l(t,m),l(t,y),l(y,u),l(u,w),l(t,v)},p(z,h){h&8&&o!==(o=z[22].eth+"")&&fe(s,o),h&8&&_!==(_=z[22].limit+"")&&fe(c,_),h&8&&k!==(k="mint.html#address="+z[22].address+"&key="+z[22].key)&&i(u,"href",k),h&128&&te(u,"background",z[7]),h&64&&te(u,"color",z[6])},d(z){z&&$(t)}}}function rt(e){let t;function n(r,p){return r[8]?it:ot}let o=n(e),s=o(e);return{c(){s.c(),t=Qe()},m(r,p){s.m(r,p),ne(r,t,p)},p(r,[p]){o===(o=n(r))&&s?s.p(r,p):(s.d(1),s=o(r),s&&(s.c(),s.m(t.parentNode,t)))},i:ue,o:ue,d(r){s.d(r),r&&$(t)}}}function at(e,t,n){const o=Xe();let{contract:s}=t,{network:r}=t,{web3:p}=t,g,_,c,m,y,u=[],w,k="linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",v="white",z="white",h="rgba(0,0,0,0.1)",F=!0;const V=()=>{o("style",{style:`body {
  background: ${k};
  color: ${v};
  background-size: cover;
}
h1 a {
  color: ${v};
}
.line .b {
  border-left: 10px solid ${v};
}
.line a {
  color: ${v}; 
}
button, a.btn, .console a.token {
  background: ${h};
  color: ${z};
  text-transform: uppercase;
  font-weight: bold;
}`})};Ue(async()=>{w=new F0,console.log("contract",s),console.log("network",r),console.log("web3",p),await w.init({web3:p,contract:s,net:r}),n(0,g=await w.name()),n(1,_=await w.symbol()),c=await w.placeholder(),m=await w.myInvites(),n(2,y=c.converted.image),n(3,u=Object.keys(m).map((q,Z)=>({index:Z,address:s,key:q,eth:m[q].condition.converted.eth,limit:m[q].condition.converted.limit}))),n(8,F=!1)});function O(){k=this.value,n(4,k)}function N(){v=this.value,n(5,v)}function L(){h=this.value,n(7,h)}function I(){z=this.value,n(6,z)}return e.$$set=q=>{"contract"in q&&n(10,s=q.contract),"network"in q&&n(11,r=q.network),"web3"in q&&n(12,p=q.web3)},[g,_,y,u,k,v,z,h,F,V,s,r,p,O,N,L,I]}class ct extends Fe{constructor(t){super(),De(this,t,at,rt,Te,{contract:10,network:11,web3:12})}}function Ne(e){let t,n;return t=new ct({props:{network:e[1],contract:e[0],web3:e[6]}}),t.$on("style",e[8]),{c(){lt(t.$$.fragment)},m(o,s){Ae(t,o,s),n=!0},p(o,s){const r={};s&2&&(r.network=o[1]),s&1&&(r.contract=o[0]),t.$set(r)},i(o){n||(ce(t.$$.fragment,o),n=!0)},o(o){we(t.$$.fragment,o),n=!1},d(o){Ie(t,o)}}}function Le(e){let t,n,o;return{c(){t=a("input"),i(t,"type","text"),i(t,"placeholder","enter your infura ID (required for walletconnect)"),i(t,"class","svelte-m19xpa")},m(s,r){ne(s,t,r),B(t,e[5]),n||(o=Q(t,"input",e[12]),n=!0)},p(s,r){r&32&&t.value!==s[5]&&B(t,s[5])},d(s){s&&$(t),n=!1,o()}}}function ut(e){let t,n,o,s,r,p,g,_,c,m,y,u,w,k,v,z,h,F,V,O,N,L,I,q,Z,P,f,x,C,D,A,U,R,K,X,ee,ie,J,T,d,S,j,le,Y,ge,ke,M=e[1]&&e[0]&&e[6]&&Ne(e),H=e[4]=="https://factoria-org.github.io/skinnerbox2/"&&Le(e);return{c(){t=a("main"),n=a("nav"),o=a("h1"),o.textContent="skinnerbox",s=b(),r=a("div"),r.textContent="NFT vending machine vending machine",p=b(),g=a("div"),g.innerHTML=`<a href="https://factoria.app/docs" class="svelte-m19xpa"><i class="fa-solid fa-circle-question"></i></a> 
      <a href="https://github.com/factoria-org/openfactoria" class="svelte-m19xpa"><i class="fa-brands fa-github"></i></a> 
      <a href="https://twitter.com/skogard" class="svelte-m19xpa"><i class="fa-brands fa-twitter"></i></a> 
      <a href="https://discord.gg/BZtp5F6QQM" class="svelte-m19xpa"><i class="fa-brands fa-discord"></i></a>`,_=b(),c=a("div"),m=W(e[1]),y=b(),u=a("section"),w=a("h2"),w.textContent="Step 1. Customize collection",k=b(),v=a("div"),v.innerHTML='Deploy your contract on <a href="https://open.factoria.app" class="svelte-m19xpa">Factoria</a> and enter the contract address below:',z=b(),h=a("input"),V=b(),M&&M.c(),O=b(),N=a("section"),L=a("h2"),L.textContent="Step 2. Download website",I=b(),q=a("div"),q.textContent='Enter your collection address, and select either "Skinnerbox 1" or "Skinnerbox 2" (Mobile support).',Z=b(),P=a("form"),f=a("select"),x=a("option"),x.textContent="Skinnerbox 1",C=a("option"),C.textContent="Skinnerbox 2",D=b(),A=a("input"),R=b(),H&&H.c(),K=b(),X=a("input"),ie=b(),J=a("div"),T=a("i"),d=W(" Generating..."),j=b(),le=a("section"),le.innerHTML=`<h2 class="svelte-m19xpa">Step 3. Publish website</h2> 
    <div class="description svelte-m19xpa">Once you download your website, you can publish it anywhere. Just unzip it and upload to any web hosting provider, such as <a href="https://pages.github.com/" class="svelte-m19xpa">GitHub pages</a>, <a target="_blank" href="https://vercel.com" class="svelte-m19xpa">Vercel</a>, <a target="_blank" href="https://www.netlify.com/" class="svelte-m19xpa">Netlify</a>, or whichever web hosting provider you use.</div> 
    <blockquote class="svelte-m19xpa"><div class="description svelte-m19xpa"><b>TIP:</b> Want to try publishing instantly without hassle?<br/>Go to Netlify drop and just drag &amp; drop the downloaded zip file.</div> 
      <img src="skinnerboxgen.gif" class="svelte-m19xpa"/> 
      <br/> 
      <div><a target="_blank" class="btn svelte-m19xpa" href="https://app.netlify.com/drop"><i class="fa-solid fa-upload"></i> Instant Publish with Netlify Drop</a></div></blockquote>`,i(o,"class","svelte-m19xpa"),i(r,"class","description svelte-m19xpa"),i(g,"class","buttons svelte-m19xpa"),i(c,"class","connection svelte-m19xpa"),i(n,"class","svelte-m19xpa"),i(w,"class","svelte-m19xpa"),i(v,"class","description svelte-m19xpa"),i(h,"type","text"),i(h,"placeholder",F="enter your "+e[1]+" factoria contract address"),i(h,"class","svelte-m19xpa"),i(u,"class","svelte-m19xpa"),i(L,"class","svelte-m19xpa"),i(q,"class","description svelte-m19xpa"),x.__value="https://factoria-org.github.io/skinnerbox/",x.value=x.__value,C.__value="https://factoria-org.github.io/skinnerbox2/",C.value=C.__value,i(f,"class","svelte-m19xpa"),e[4]===void 0&&ve(()=>e[10].call(f)),i(A,"type","hidden"),i(A,"placeholder",U="enter your "+e[1]+" factoria contract address"),i(X,"type","submit"),i(X,"class",ee="btn "+e[3]+" svelte-m19xpa"),X.value="download",i(P,"method","post"),i(P,"class","svelte-m19xpa"),i(T,"class","fa-solid fa-circle-notch fa-spin"),i(J,"class",S="loading "+e[2]+" svelte-m19xpa"),i(N,"class","svelte-m19xpa"),i(le,"class","svelte-m19xpa"),i(t,"class","svelte-m19xpa")},m(E,G){ne(E,t,G),l(t,n),l(n,o),l(n,s),l(n,r),l(n,p),l(n,g),l(n,_),l(n,c),l(c,m),l(t,y),l(t,u),l(u,w),l(u,k),l(u,v),l(u,z),l(u,h),B(h,e[0]),l(u,V),M&&M.m(u,null),l(t,O),l(t,N),l(N,L),l(N,I),l(N,q),l(N,Z),l(N,P),l(P,f),l(f,x),l(f,C),Ee(f,e[4]),l(P,D),l(P,A),B(A,e[0]),l(P,R),H&&H.m(P,null),l(P,K),l(P,X),l(N,ie),l(N,J),l(J,T),l(J,d),l(t,j),l(t,le),Y=!0,ge||(ke=[Q(h,"input",e[9]),Q(f,"change",e[10]),Q(A,"input",e[11]),Q(P,"submit",We(Re(e[7])))],ge=!0)},p(E,[G]){(!Y||G&2)&&fe(m,E[1]),(!Y||G&2&&F!==(F="enter your "+E[1]+" factoria contract address"))&&i(h,"placeholder",F),G&1&&h.value!==E[0]&&B(h,E[0]),E[1]&&E[0]&&E[6]?M?(M.p(E,G),G&3&&ce(M,1)):(M=Ne(E),M.c(),ce(M,1),M.m(u,null)):M&&(tt(),we(M,1,1,()=>{M=null}),nt()),G&16&&Ee(f,E[4]),(!Y||G&2&&U!==(U="enter your "+E[1]+" factoria contract address"))&&i(A,"placeholder",U),G&1&&B(A,E[0]),E[4]=="https://factoria-org.github.io/skinnerbox2/"?H?H.p(E,G):(H=Le(E),H.c(),H.m(P,K)):H&&(H.d(1),H=null),(!Y||G&8&&ee!==(ee="btn "+E[3]+" svelte-m19xpa"))&&i(X,"class",ee),(!Y||G&4&&S!==(S="loading "+E[2]+" svelte-m19xpa"))&&i(J,"class",S)},i(E){Y||(ce(M),Y=!0)},o(E){we(M),Y=!1},d(E){E&&$(t),M&&M.d(),H&&H.d(),ge=!1,oe(ke)}}}function ft(e,t,n){let o=location.hash.length>0?location.hash.slice(1):"",s,r,p="hidden",g="",_,c,m,y;const u={"https://factoria-org.github.io/skinnerbox/":[".nojekyll","README.md","box.png","index.html","mint.html","opensea.png","looksrare.png","rarible.png","skinnerbox.gif","style.css","custom.css","etherscan.png","handleerror.js"],"https://factoria-org.github.io/skinnerbox2/":[".nojekyll","README.md","box.png","connect.js","index.html","mint.html","opensea.png","looksrare.png","rarible.png","skinnerbox.gif","skinnerbox2.gif","style.css","custom.css","etherscan.png","handleerror.js"]},w=new Web3(window.ethereum),k=new F0,v=(f,x)=>Promise.all(x.map(C=>fetch(f+C).then(D=>D.blob()))),z=f=>{let x={contract:o,network:s};m&&(x.infura=m);const C=new TextEncoder().encode(JSON.stringify(x));f.file("box.json",new Blob([C],{type:"application/json;charset=utf-8"}))},h=async f=>{await k.init({web3:w,contract:o,cache:!0}),await k.config(),await k.invites();let x=await k.placeholder(),C=x.converted.image,D=await fetch(C).then(K=>K.blob()),A=x.raw.image.replace("ipfs://","");f.file(A,D),k.cached[C]=A;let U=JSON.stringify(k.cached,null,2);const R=new TextEncoder().encode(U);f.file("cached.json",new Blob([R],{type:"application/json;charset=utf-8"}))},F=async f=>{if(y){const x=new TextEncoder().encode(y);f.file("custom.css",new Blob([x],{type:"text/css"}))}},V=async()=>{n(2,p=""),n(3,g="hidden");let f=u[c],x=await v(c,f);const C=JSZip();for(let D=0;D<f.length;D++){let A=f[D];C.file(A,x[D])}await z(C),await h(C),await F(C),_=await C.generateAsync({type:"blob"}),r=!0,n(2,p="hidden"),await saveAs(_,"skinnerbox.zip")},O=async()=>{o&&s&&!r&&(s==="rinkeby"||s==="main"?await V():alert("must be either 'rinkeby' or 'main'"))},N=async()=>{let f=await w.eth.getChainId();f.toString()==="4"?n(1,s="rinkeby"):f.toString()==="1"&&n(1,s="main")},L=f=>{console.log(f.detail.style),y=f.detail.style};N();function I(){o=this.value,n(0,o)}function q(){c=Ke(this),n(4,c)}function Z(){o=this.value,n(0,o)}function P(){m=this.value,n(5,m)}return[o,s,p,g,c,m,w,O,L,I,q,Z,P]}class dt extends Fe{constructor(t){super(),De(this,t,ft,ut,Te,{})}}new dt({target:document.getElementById("app")});
