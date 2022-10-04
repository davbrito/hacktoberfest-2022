import { Writable, writable } from 'svelte/store'

export default function boolWithTimeout(defaultValue: boolean, timeout: number): Writable<boolean> {
	let timeoutId: number | undefined
	const store = writable(defaultValue)

	store.subscribe((newValue) => {
		if (newValue !== defaultValue) {
			if (timeoutId) window.clearTimeout(timeoutId)
			timeoutId = window.setTimeout(() => {
				timeoutId = undefined
				store.set(defaultValue)
			}, timeout)
		}
	})

	return store
}
