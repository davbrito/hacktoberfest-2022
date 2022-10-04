<script type="ts">
	import { fly } from 'svelte/transition'

	export let value: string
</script>

<output
	class="selection:bg-indigo-800 selection:text-white selection:rounded-md block select-all overflow-hidden whitespace-nowrap relative mx-auto h-8 font-mono bg-neutral-50 text-neutral-700 rounded-md px-2 py-1 flex-grow"
>
	{#key value}
		<div
			class="absolute"
			in:fly|local={{ y: -30, duration: 500 }}
			out:fly|local={{ y: 30, duration: 500 }}
		>
			{value}
		</div>
	{/key}
</output>
