<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import ColorThief from 'colorthief';
	import 'carbon-components-svelte/css/g90.css';
	import { Dropdown, FileUploader, Slider } from 'carbon-components-svelte';
	import { calculateContrastRatio, objectify } from '$lib';
	import { hexToRGB, rgbToHex } from '$lib/colorUtils';
	let colorThief,
		palette = [],
		opacity = 0.5,
		imageUrl = 'tunnel.jpg',
		bgColorPicker = '#3c6d88',
		overlayColorPicker = '#b9cfdd',
		fgColorPicker = '#182a2f',
		bgColor = bgColorPicker,
		overlayColor = overlayColorPicker,
		fgColor = fgColorPicker;
	$: useImageColors = imageUrl !== 'tunnel.jpg' && palette && palette.length === 5;
	$: schema = [
		{ loc: 'Background', id: 0 },
		{ loc: 'Overlay', id: 2 },
		{ loc: 'Foreground', id: 4 }
	];
	$: bgColor = useImageColors && palette[schema[0].id] ? palette[schema[0].id] : bgColorPicker;
	$: overlayColor =
		useImageColors && palette[schema[1].id] ? palette[schema[1].id] : overlayColorPicker;
	$: fgColor = useImageColors && palette[schema[2].id] ? palette[schema[2].id] : fgColorPicker;

	onMount(async () => {
		colorThief = new ColorThief();
	});
	async function handleFileUpload(event) {
		const file = event.detail.length > 0 ? event.detail[0] : false;
		// const file = event.detail[0];

		if (file) {
			const reader = new FileReader();

			reader.onload = async function (event) {
				imageUrl = event.target.result;
				const img = new Image();
				img.src = event.target.result;
				if (img && img.complete) {
					// let colorArray = colorThief.getColor(img);
					// let thiefObj = Object.fromEntries(colorArray.map((c, i) => ['rgb'.split('')[i], c]));
					// bgColor = rgbToHex(thiefObj);
					palette = colorThief.getPalette(img, 5).map((color) => rgbToHex(objectify(color)));
				} else {
					img.addEventListener('load', function () {
						// let colorArray = colorThief.getColor(img);
						// let thiefObj = Object.fromEntries(colorArray.map((c, i) => ['rgb'.split('')[i], c]));
						// bgColor = rgbToHex(thiefObj);
						palette = colorThief.getPalette(img, 5).map((color) => rgbToHex(objectify(color)));
					});
				}
			};

			reader.readAsDataURL(file);
			// const img = document.getElementById('underlay');
		}
	}

	let computedColor = '#000000';

	function updateComputedColor() {
		let bg = hexToRGB(bgColor);
		let ol = hexToRGB(overlayColor);
		let blendedColor = {
			r: Math.round((1 - opacity) * bg.r + opacity * ol.r),
			g: Math.round((1 - opacity) * bg.g + opacity * ol.g),
			b: Math.round((1 - opacity) * bg.b + opacity * ol.b)
		};
		// Convert the blended color back to hex
		computedColor = `#${blendedColor.r.toString(16).padStart(2, '0')}${blendedColor.g.toString(16).padStart(2, '0')}${blendedColor.b.toString(16).padStart(2, '0')}`;
	}

	// Call updateComputedColor whenever opacity changes
	$: {
		updateComputedColor(opacity, bgColor, overlayColor, fgColor);
		if (browser) {
			document.body.style.backgroundColor = bgColor;
		}
	}
	let open = false;
	$: resultRGB = hexToRGB(computedColor);
	$: contrastRatio = calculateContrastRatio(hexToRGB(computedColor), hexToRGB(fgColor));
	function cssizer(color) {
		if (typeof color === 'string') {
			color = hexToRGB(color);
		}
		let triad = Object.keys(color);
		if (triad.length !== 3) {
			return '0, 0, 0';
		}
		return `${color[triad[0]]}, ${color[triad[1]]}, ${color[triad[2]]}`;
	}
	// // if (useImageColors) {
	// 	$: bgColor = palette[schema[0].id];
	// 	$: overlayColor = palette[schema[1].id];
	// 	$: fgColor = palette[schema[2].id];
	// 	$: console.log('fgcolor', fgColor);
	// }
	$: console.log('palette', palette);

	$: console.log('background color', bgColor);
	$: console.log('scjema', schema);
</script>

<div
	class="wrapper"
	id="wrapper"
	style="--bg-color: {bgColor}; --fg-color: {fgColor}; background-color: rgb({cssizer(bgColor)})"
>
	<img class="underlay" id="underlay" src={imageUrl} alt="" />
	<div class="overlay" style="background-color: rgba({cssizer(overlayColor)}, {opacity});"></div>
	<div class="infobox">
		<div class="lilwrapper" id="file-upload">
			<FileUploader
				hideTitle
				buttonLabel="Add image"
				status="complete"
				accept="image/*"
				on:change={handleFileUpload}
			/>
			{#if useImageColors}
				{#each schema as color}
					<Dropdown
						style="--active-color: {palette[color.id]} !important;"
						titleText={`${color.loc} Color`}
						items={palette.map((x, idx) => ({ id: idx, text: x }))}
						let:item
						bind:selectedId={color.id}
					>
						<p style="height: 100%; background-color: {item.text};"></p>
					</Dropdown>
				{/each}
			{:else}
				<div class="input-wrapper">
					<label for="bgPicker">Background Color:</label>
					<input type="color" class="color-picker" id="bgPicker" bind:value={bgColorPicker} />
				</div>
				<div class="input-wrapper">
					<label for="olPicker">Overlay Color:</label>
					<input type="color" class="color-picker" id="olPicker" bind:value={overlayColorPicker} />
				</div>
				<div class="input-wrapper">
					<label for="fgPicker">Foreground Color:</label>
					<input type="color" class="color-picker" id="fgPicker" bind:value={fgColorPicker} />
				</div>
			{/if}
			<div class="more-info">
				<em class="teaser" class:open on:click={() => (open = !open)}>What is this i don't even</em>
				<div class="more-info-content">
					<p>
						Once upon a time, I made a background with an overlay. The contrast was great! But then
						my "stakeholder" felt the background was too dark. Is that even possible?
					</p>
					<p>
						She gave me a target color, and asked me to blend the background color with the overlay
						to reach that target.
					</p>
					<p>
						I don't know if you know anything about color theory, but that's some weird math. So I
						made a thing. This way, I never have to do math, and I can help you avoid it, too.
					</p>
				</div>
			</div>
		</div>
		<div class="lilwrapper" id="color-display">
			<div class="intro">
				<p>{bgColor} with {overlayColor} at {(opacity * 100).toFixed(0)}%</p>
				<p>looks kinda like:</p>
			</div>
			<div class="rgb" style="background-color: rgb({cssizer(resultRGB)}); text-align: center;">
				<p style="display: inline-block; padding: 4px; margin: 4px; color: {fgColor}">
					rgb: {cssizer(resultRGB)}
				</p>
			</div>
			<div class="contrast">
				<p
					style="color: {contrastRatio < 3
						? 'pink'
						: contrastRatio > 4.5
							? 'lightgreen'
							: 'yellow'}"
				>
					contrast ratio: {contrastRatio}
				</p>
			</div>
		</div>
	</div>

	<h1 style="color: rgb({cssizer(fgColor)});">
		Overlay Opacity: {opacity.toFixed(2)}%
	</h1>
	<div class="slider-wrapper">
		<div class="lilwrapper" id="slider">
			<Slider
				hideTextInput
				bind:value={opacity}
				min={0}
				max={1}
				step={0.01}
				on:change={updateComputedColor}
			/>
		</div>
	</div>
</div>

<style>
	.teaser {
		display: block;
		background: rgba(0, 0, 0, 0.33);
		border: 1px solid #ccc0;
		color: #ccc;
		height: 33px;
		line-height: 33px;
		padding-inline: 11px;
		cursor: pointer;
	}

	.teaser:hover,
	.teaser.open {
		background: rgba(0, 0, 0, 0.76);
		border: 1px solid #ccc;
		height: 33px;
		line-height: 33px;
		padding-inline: 11px;
	}
	.more-info-content {
		display: none;
	}
	.open ~ .more-info-content {
		padding: 11px;
		display: flex;
		flex-direction: column;
		gap: 11px;
		height: 100%;
	}
	:global(.bx--list-box__menu-item__option) {
		margin: 0;
		padding: 0;
		& p {
			margin: 0;
			padding: 0;
			height: 100%;
		}
	}
	:global(.bx--dropdown) {
		background-color: var(--active-color) !important;
	}
	.color-picker {
		border: 0;
		padding: 0;
		width: 100%;
		height: 33px;
	}
	.input-wrapper {
		display: flex;
		gap: 11px;
		height: 64px;
	}

	:global(body) {
		height: 100%;
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: 250ms;
		/* padding: 33px; */
		& * {
			box-sizing: border-box;
			transition: 250ms;
		}
	}
	.wrapper {
		/* overflow: hidden; */
		position: relative;

		background-size: cover;
		display: flex;
		flex-direction: column;
	}
	.infobox {
		position: relative;
		flex: 1;
		display: flex;
		position: relative;
	}
	@media screen and (max-width: 876px) {
		.wrapper {
			/* overflow: auto; */

			height: 100%;
			width: 100%;
		}
		.infobox {
			align-items: stretch;
			justify-content: start;
			flex-direction: column;
		}

		#file-upload,
		#color-display {
			align-self: stretch;
		}
	}
	@media screen and (min-width: 876px) {
		.wrapper {
			/* overflow: auto; */
			height: 100vh;
			width: 100vw;
		}
		.infobox {
			justify-content: space-between;
			flex-direction: row;
		}
		#color-display {
			align-self: end;
		}
		#file-upload {
			align-self: start;
		}
	}
	.overlay,
	.underlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	.underlay {
		clip-path: polygon(0 0, 100% 0, 100% 33%, 33% 100%, 0 100%);
		object-fit: cover;
		height: 100%;
		width: 100%;
		z-index: 1;
	}
	.overlay {
		z-index: 2;
	}
	h1 {
		position: relative;
		z-index: 3;
		width: 100%;
		text-align: center;
		color: var(--fg-color, #ccc) !important;
	}
	.lilwrapper {
		position: relative;
		z-index: 3;
		background-color: #333;
	}
	#slider {
		width: auto;
		padding: 3px 11px;
	}
	#file-upload,
	#color-display {
		padding: 33px;
		margin: 33px;
	}
	#color-display {
		max-width: 600px;
	}
	#file-upload {
		display: flex;
		flex-direction: column;
		gap: 11px;
		max-width: 600px;
		/* width: min(100%, 600px); */
	}
	#color-display p {
		font-family: 'Monaspace Xenon';
		color: #ccc;
		text-align: right;
	}
	.slider-wrapper {
		z-index: 3;
		position: absolute;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: end;
		align-items: center;
		/* background-color: #393939; */
	}
</style>
