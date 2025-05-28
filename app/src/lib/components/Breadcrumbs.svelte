<script lang="ts">
    import ChevronRight from '@lucide/svelte/icons/chevron-right';
	type BreadcrumbItem = {
		label: string;
		href?: string;
	};

	export let items: BreadcrumbItem[] = [];
</script>

<nav aria-label="Breadcrumb">
	<ol class="flex items-center gap-4">
		{#each items as item, index}
			<li>
				{#if item.href}
					<a class="opacity-60 hover:underline" href={item.href}>{item.label}</a>
				{:else}
					<span>{item.label}</span>
				{/if}
			</li>
			{#if index < items.length - 1}
				<li class="opacity-50" aria-hidden="true">
                    <ChevronRight size={14} />
                </li>
			{/if}
		{/each}
	</ol>
</nav>