<script type="ts">
	import boolWithTimeout from '@components/davbrito/bool-with-timeout'
	import Button from '@components/davbrito/Button.svelte'
	import CopyIcon from '@components/davbrito/copy-icon.svelte'
	import Toast from '@components/davbrito/Toast.svelte'

	export let value: string | undefined

	const showAlert = boolWithTimeout(false, 3000)

	async function handleClipboard() {
		if (!value) return

		await navigator.clipboard.writeText(value)
		$showAlert = true
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.ctrlKey && event.key === 'c') {
			event.preventDefault()
			handleClipboard()
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<Button title="Copiar contraseña" on:click={handleClipboard} let:hovering>
	<CopyIcon {hovering} />
</Button>

<Toast show={$showAlert}>
	<div class="flex gap-2 items-center">
		<CopyIcon size="1.3em" />Contraseña copiada al portapapeles
	</div>
</Toast>
