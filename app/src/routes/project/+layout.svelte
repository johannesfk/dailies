<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();

	const breadcrumbs = [
		{ label: 'Project', href: '/' },
		{ label: 'Tasks' }
  	];

</script>

<h2 class="h2">Tasks</h2>


<Breadcrumbs items={breadcrumbs} />

{@render children()}