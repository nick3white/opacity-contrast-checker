<script>
	import { Slider } from 'carbon-components-svelte';
	import { cssizer } from '$lib';
	// import { updateComputedColor } from '$lib/colorUtils.js';
	import { bgColor, overlayColor, opacity, fgColor, computedColor } from '$lib';
	// let localOpacity = opacity.subscribe((value) => {
	// 	return value;
	// });
	// $: console.log('localOpacity', localOpacity);
</script>

<div class="slider-component">
	<h2 style="color: rgb({cssizer($fgColor)});">
		Overlay Opacity: {$opacity.toFixed(2)}%
	</h2>
	<div class="slider-wrapper" id="slider">
		<Slider hideTextInput bind:value={$opacity} min={0} max={1} step={0.01} />
	</div>
	<!-- on:change={updateComputedColor} -->
</div>

<style>
	.slider-component {
		z-index: 3;

		position: relative;
		/* position: absolute; */
		align-self: center;
		display: flex;
		flex-direction: column;
		justify-content: end;
		align-items: center;
		width: fit-content;
	}
	h2,
	.slider-wrapper {
		width: fit-content;
	}
	.slider-wrapper {
		padding: 0 33px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		background-color: #393939;
	}
	:global(.bx--form-item) {
		text-align: center;
		justify-content: center;
		align-items: center;
		width: fit-content;
	}
</style>
