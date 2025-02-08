<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<!-- Header -->

<div class="grid grid-cols-[auto_1fr]">
	<!-- Sidebar -->
	<aside class="sticky top-0 col-span-1 h-screen bg-slate-700 p-4">(sidebar)</aside>
	<!-- Main -->
	<main class="col-span-1 space-y-4 bg-green-700">
		<header class="sticky top-0 z-10 bg-slate-600/80 p-4 backdrop-blur-sm">
			<p class="type-title">Dailies</p>
		</header>
		<div class="p-4">
			{@render children()}
		</div>
		<footer class="bg-blue-800 p-4">(footer)</footer>
	</main>
</div>
