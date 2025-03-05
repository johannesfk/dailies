<script lang="ts">
	import Player from '$lib/player/Player.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<!-- <h1 class="h1">{data.title}</h1> -->
<h2 class="h2">Tasks</h2>

<div class="w-1/2">
	<Player></Player>
</div>
