<script type="ts">
	import Button from '@components/davbrito/Button.svelte'
	import CopyClipboardButton from '@components/davbrito/CopyClipboardButton.svelte'
	import Password from '@components/davbrito/Password.svelte'
	import RefreshIcon from '@components/davbrito/RefreshIcon.svelte'
	import SizeIndicator from '@components/davbrito/SizeIndicator.svelte'
	import { generatePassword } from './util'

	const MIN = 6
	const MAX = 50

	let size = 8

	$: password = generatePassword(size)
	$: securityPercent = (size - MIN) / (MAX - MIN)
</script>

<div
	class="background flex flex-col justify-center items-center h-full p-4 bg-gradient-to-br from-purple-500 to-pink-500"
>
	<article
		class="shadow-lg shadow-purple-900/40 w-full max-w-md p-5 rounded-md bg-slate-600 text-neutral-50 accent-pink-500"
	>
		<header class="mb-4">
			<h2 class="font-bold text-2xl">Generador de contraseñas</h2>
		</header>
		<form class="flex flex-col gap-2 items-stretch" on:submit|preventDefault>
			<label class="text-slate-300 text-sm">
				<div>Longitud:</div>
				<div class="flex gap-2">
					<input class="flex-grow" type="range" min={MIN} max={MAX} bind:value={size} />
					<SizeIndicator value={size} percent={securityPercent} />
				</div>
			</label>
			<div>
				<div class="mb-1 text-slate-300 text-sm">Contraseña:</div>
				<div class="flex gap-2 items-center">
					<Password value={password} />
					<CopyClipboardButton value={password} />
					<Button
						let:hovering
						title="Regenerar"
						on:click={() => (password = generatePassword(size))}
					>
						<RefreshIcon {hovering} />
					</Button>
				</div>
			</div>
		</form>
	</article>
	<footer class="text-white/50 text-xs absolute bottom-2 font-sans">
		Hecho por <a href="http://github.com/davbrito" class="hover:underline font-bold">davbrito</a>
	</footer>
</div>
