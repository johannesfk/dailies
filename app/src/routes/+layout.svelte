<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<!-- Header -->

<div class="grid h-dvh grid-cols-[auto_1fr] max-md:grid-cols-1">
	<!-- Sidebar -->
	<aside class="sticky top-0 col-span-1 h-screen bg-slate-700 p-4 max-md:hidden">(sidebar)</aside>
	<!-- Main -->
	<main class="bg-surface-900 col-span-1 flex flex-col justify-between space-y-4">
		<header class="sticky top-0 z-10 bg-slate-600/80 p-4 backdrop-blur-xs">
			<p class="type-title">Dailies</p>
		</header>
		<div class="h-full p-4">
			{@render children()}
		</div>
		<footer class="bg-surface-950 bottom-0 p-4">
			<p>User: admin</p>
			<p class="type-caption">Version: 0.0.1</p>
			<p class="type-caption">© 2025 Johannes Farmer Knudsen</p>
		</footer>
	</main>
</div>
