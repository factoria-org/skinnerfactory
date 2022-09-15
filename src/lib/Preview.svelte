<script>
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();
import {onMount} from "svelte";
export let contract;
export let network;
export let web3;
let name
let symbol
let placeholder
let invites
let image
let items = []
let config = { contract, network }
let f0;
let background = "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)"
let color = "white";
let buttoncolor = "white";
let buttonbackground = "rgba(0,0,0,0.1)";
let loading = true;
const update = () => {
  dispatch("style", {
    style: `body {
  background: ${background};
  color: ${color};
  background-size: cover;
}
h1 a {
  color: ${color};
}
.line .b {
  border-left: 10px solid ${color};
}
.line a {
  color: ${color}; 
}
button, a.btn, .console a.token {
  background: ${buttonbackground};
  color: ${buttoncolor};
  text-transform: uppercase;
  font-weight: bold;
}` })
}
onMount(async () => {
  f0 = new F0()
  console.log("contract", contract)
  console.log("network", network)
  console.log("web3", web3)
  await f0.init({
    web3,
    contract: contract,
    net: network,
  })
  name = await f0.name()
  symbol = await f0.symbol()
  placeholder = await f0.placeholder()
  invites = await f0.myInvites()
  image = placeholder.converted.image
  items = Object.keys(invites).map((key, index) => {
    return {
      index: index,
      address: contract,
      key: key,
      eth: invites[key].condition.converted.eth,
      limit: invites[key].condition.converted.limit
    }
  })
  loading = false;
})

</script>
{#if loading}
  <div class='loader'><i class="fa-solid fa-circle-notch fa-spin"></i><br>loading...</div>
{:else}
<div class='form'>
  <div class='editor-item'>
    <label>background</label>
    <input type='text' bind:value={background} on:change={update}>
  </div>
  <div class='editor-item'>
    <label>color</label>
    <input type='text' bind:value={color} on:change={update}>
  </div>
  <div class='editor-item'>
    <label>button background</label>
    <input type='text' bind:value={buttonbackground} on:change={update}>
  </div>
  <div class='editor-item'>
    <label>button color</label>
    <input type='text' bind:value={buttoncolor} on:change={update}>
  </div>
</div>
<div class='body' style="background: {background}; color: {color}">
<div class='box'>
  <img src={image}>
  <h1>{name} ({symbol} Invite List</h1>
  <table class='invites'>
  <tr>
    <th>mint price</th>
    <th>mint limit</th>
    <th>Invite</th>
  </tr>
  {#each items as item}
    <tr>
      <td>{item.eth} ETH</td>
      <td>{item.limit}</td>
      <td><a class='btn' href="mint.html#address={item.address}&key={item.key}" style="background:{buttonbackground}; color:{buttoncolor};">Go</a></td>
    </tr>
  {/each}
  </table>
</div>
</div>
{/if}
<style>
.body {
  font-family: Sans-serif;
  background-size: cover !important;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 50px 0;
}
.box {
  max-width: 350px;
  text-align: center;
}
.box > *, .minter > *{
  display: block;
  width: 100% !important;
  margin-bottom: 10px;
}
.nice-select {
  margin-bottom: 10px;
  color: black;
}
.nice-select-dropdown {
  width: 100%;
}
button {
  background: rgba(0,0,0,0.8);
  color: white;
  padding: 10px;
  border: none;
}
.container {
  max-width: 800px;
  margin: 50px auto;
}
a {
  color: royalblue;
  text-decoration: none;
  display: block;
}
.label {
  font-size: 18px;
  font-weight: bold;
}
h1 {
  margin: 0;
  font-size: 30px;
  box-sizing: border-box;
  letter-spacing: -1px;
  text-align: left;
}
h1 a {
  color: white;
}
.invite {
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  text-align: left;
  color: white;
  font-size: 16px;
}
.invites a {
  color: white;
}
.invites {
}
table {
  width: 100%;
  table-layout: fixed;
  overflow-wrap: break-word;
  display: table !important;
  margin-top: 10px;
}
td, th {
  padding: 5px;
  font-size: 14px;
}
th {
  border-bottom: 1px solid rgba(255,255,255,0.2);
  border-top: 1px solid rgba(255,255,255,0.2);
}
tr {
  width: 100%;
  border-bottom: 1px solid white;
}
.btn {
  background: rgba(0,0,0,0.1);
  padding: 5px 10px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
}
.hidden {
  display: none !important;
}
.loading {
  padding: 20px;
  box-sizing: border-box;
  font-size: 15px;
  margin-top: 20px;
  border-radius: 50px;
}
tr img {
  height: 20px;
}
tr a {
  color: white;
}
.token {
  background: rgba(0,0,0,0.3);
  padding: 5px;
  text-align: center;
  font-size: 12px;
}
.editor-item {
  display:flex;
  padding: 10px 20px;
  box-sizing: border-box;
  align-items: center;
}
.editor-item label {
  width: 150px;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
}
.editor-item input {
  flex-grow: 1;
  padding: 10px;
  box-sizing: border-box;
  border: 2px solid #eaeaea;
}
.loader {
  padding: 50px;
  text-align: center;
}
</style>
