<script lang="ts">
	import Player from '$lib/player/Player.svelte';
	import type { PageData } from '../[slug]/$types';

	let { data }: { data: PageData } = $props();

	const imgSrc =
		'https://images.unsplash.com/photo-1463171515643-952cee54d42a?q=80&w=450&h=190&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
</script>

<!-- <h1 class="h1">{data.title}</h1> -->

<!-- <div class="w-1/2">
	<Player></Player>
</div> -->

<div>
	<a
		href="/project/200-kilo/reels"
		class="card preset-filled-surface-100-900 border-surface-200-800 card-hover divide-surface-200-800 block max-w-md divide-y overflow-hidden border-[1px]"
	>
		<header>
			<img src={imgSrc} class="aspect-[21/9] w-full grayscale hue-rotate-90" alt="banner" />
		</header>
		<article class="space-y-4 p-4">
			<div>
				<!-- <h2 class="h6">Announcements</h2> -->
				<h3 class="h3">Dailies</h3>
			</div>
		</article>
		<footer class="flex items-center justify-between gap-4 p-4">
			<small class="opacity-60">By Alex</small>
			<small class="opacity-60">On {new Date().toLocaleDateString()}</small>
		</footer>
	</a>
</div>
