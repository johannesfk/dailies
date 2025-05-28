<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<div>
	<a
		href="/project/200-kilo/reels"
		class="card preset-filled-surface-100-900 border-surface-200-800 card-hover divide-surface-200-800 block max-w-md divide-y overflow-hidden border-[1px]"
	>
		<header>
		</header>
		<article class="space-y-4 p-4">
			<div>
				<!-- <h2 class="h6">Announcements</h2> -->
				<h3 class="h3">Day 1</h3>
			</div>
		</article>
		<footer class="flex items-center justify-between gap-4 p-4">
			<small class="opacity-60">Clips: 48</small>
			<small class="opacity-60">Length: 48min</small>
			<small class="opacity-60">Last Updated {new Date().toLocaleDateString()}</small>
		</footer>
	</a>
</div>