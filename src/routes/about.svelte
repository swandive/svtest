<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev; // hot module in dev
	export const router = browser; // use client router if available
	export const prerender = true; // serve via static
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="content">
	<h1>About</h1>
	<p class="">Link is <a sveltekit:prefetch href="/test">right here</a></p>
</div>
