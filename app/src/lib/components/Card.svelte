<script lang="ts">
	import cardImage from '$lib/assets/200KILO_dailies.jpg';

	export let title;
	export let desc = '';
	export let id;
	export let img = '';
</script>

<a
	href="/project/{id ? id : '1'}"
	class="hover:bg-surface-800 grid grid-cols-[auto_1fr] border-y border-slate-600 p-2"
>
	<div class="mr-4">
		<img src={img ? img : cardImage} alt="card title" class="max-h-36 max-w-36" />
	</div>
	<div>
		<h3 class="h3">{title ? title : 'Title'}</h3>
		<p class="p">{desc ? desc : 'Description'}</p>
	</div>
</a>
