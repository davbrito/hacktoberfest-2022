<script type="ts">
	export let value: number
	export let percent: number

	const colors = [
		'#fb923c',
		'#fcd34d',
		'#fef08a',
		'#fef08a',
		'#fef08a',
		'#4ade80',
		'#4ade80',
		'#4ade80'
	]

	const size = 24
	const strokeWidth = 2
	const radius = (size - strokeWidth * 2) / 2
	const circumference = radius * 2 * Math.PI
	$: offset = 0.2 + (circumference - percent * circumference) * 0.8
	$: color = colors[Math.round(percent * (colors.length - 1))]
</script>

<div class="relative text-xs font-bold grid place-items-center flex-shrink-0 w-6 h-6">
	<svg class="absolute" width={size} height={size}>
		<circle
			stroke={color}
			stroke-width={2}
			fill="transparent"
			r={radius}
			cx={size / 2}
			cy={size / 2}
			style:stroke-dasharray={`${circumference} ${circumference}`}
			style:stroke-dashoffset={offset}
		/>
	</svg>
	{value}
</div>

<style>
	circle {
		transition: stroke-dashoffset 500ms ease, stroke 400ms ease;
		transform: rotate(-90deg);
		transform-origin: 50% 50%;
	}
</style>
