<script type="ts">
	import { sineInOut } from 'svelte/easing'
	import { fade } from 'svelte/transition'

	export let title: string | undefined
	let hovering = false
</script>

<button
	class="flex-shrink-0 relative ml-auto w-7 h-7 grid place-items-center bg-pink-400 hover:bg-pink-500 border border-pink-300/50 hover:border-pink-400/50 rounded-md transition-all"
	type="button"
	aria-label={title}
	on:click
	on:mouseenter={() => (hovering = true)}
	on:mouseleave={() => (hovering = false)}
>
	<slot {hovering} />
	{#if title && hovering}
		<div
			transition:fade={{ duration: 300, easing: sineInOut }}
			class="absolute bottom-0 translate-y-[calc(100%+5px)] bg-pink-700/80 rounded-md whitespace-nowrap shadow-lg px-2 py-1 text-xs"
		>
			{title}
		</div>
	{/if}
</button>
