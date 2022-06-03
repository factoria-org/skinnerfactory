# Skinnerfactory

> Skinnerbox factory

Website: https://skinnerbox.factoria.app

Skinnerfactory is a web app that lets you generate and download [Skinnerbox](https://github.com/factoria-org/skinnerbox) or [Skinnerbox 2](https://github.com/factoria-org/skinnerbox2) minting websites.

# Features

## 1. Instant load

The Skinnerbox and Skinnerbox2 websites do not cache IPFS content (invites, config, placeholder image, etc.) by default. This often results in very slow load time for your minting pages.

Skinnerfactory solves this problem by dynamically downloading all the IPFS content in the browser and generating a static site that hardcodes all the IPFS content.

**This means your minting site will ALWAYS load instantly.**

## 2. Containerized archive

Skinnerfactory generates a zip file that contains your entire minting site.

You can unzip the file and host it on any web hosting provider you want, such as Github pages, netlify, vercel, etc.

Skinnerfactory also directly links to [Netlify drop](https://app.netlify.com/drop) so you can instantly drag and drop the downloaded zip archive and go live in seconds, with no hassle.

# How it works

This repository is a 100% static website with NO SERVER.

It dynamically downloads the [Skinnerbox](https://github.com/factoria-org/skinnerbox) and [Skinnerbox2](https://github.com/factoria-org/skinnerbox2) repositories, updates the configs, and caches content, and compresses the result in a single zip file.

# Source code

This web app is powered by [svelte](https://svelte.dev/).

There is a single file that takes care of the entire app: [App.svelte](src/App.svelte). If you want to understand how things work, check out that file.
