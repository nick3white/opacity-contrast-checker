<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import ColorThief from 'colorthief';
	import 'carbon-components-svelte/css/g90.css';
	import { CopyButton, Dropdown, FileUploader, Slider } from 'carbon-components-svelte';
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

	// TODO: refactor schema to allow colorpicker input after image upload

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
	$: fixUsersBadContrast =
		contrastRatio < 4.5
			? `background: #393939; color: rgba(233,233,255,0.9);`
			: `background: rgba(0,0,0,0); color: ${fgColor};`;

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
	$: console.log('palette', palette);

	$: console.log('background color', bgColor);
	$: console.log('scjema', schema);
</script>

<p class:hide={imageUrl !== 'tunnel.jpg'} style={fixUsersBadContrast} class="photo-credit">
	photo by <a
		href="https://www.flickr.com/photos/megane_wakui"
		style={fixUsersBadContrast}
		target="_blank">Masashi Wakui</a
	>
</p>
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
				{#each schema as color, i}
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
					<label for="bgPicker">Background Color: </label>
					<input type="color" class="color-picker" id="bgPicker" bind:value={bgColorPicker} />
				</div>
				<div class="input-wrapper">
					<label for="olPicker">Overlay Color: </label>
					<input type="color" class="color-picker" id="olPicker" bind:value={overlayColorPicker} />
				</div>
				<div class="input-wrapper">
					<label for="fgPicker">Foreground Color: </label>
					<input type="color" class="color-picker" id="fgPicker" bind:value={fgColorPicker} />
				</div>
			{/if}
			<div class="more-info">
				<button class="teaser" class:open on:click={() => (open = !open)}
					>What is this i don't even</button
				>
				<div class="more-info-content">
					<p>
						This tool calculates the contrast ratio of text on background when using a
						semi-transparent overlay. Provide a background color, an overlay color, and a
						foreground/text color, and the tool will calculate the contrast ratio, seen in the
						bottom right.
					</p>
					<p>
						The <a
							href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
							target="_blank">WCAG guidelines</a
						>
						use the following thresholds:
						<span class="lightgreen">greater than 4.5:1 is "AA" status;</span>
						<span class="yellow">3.0-4.5 is "A";</span>
						<span class="pink"> less than 3 is <em>fail.</em></span>
					</p>
					<p>
						If you choose an image of your own, the tool will generate a 5-color palette from the
						dominant colors of the image, using <a
							href="https://lokeshdhakar.com/projects/color-thief/"
							target="_blank">Color Thief</a
						>. (This tool doesn't provide css for the full palette, the Color Thief website provides
						that functionality, and it's a bit out of scope for this already-bloated tool.)
					</p>
					<p>
						Why? Because it's a deceptively difficult task. There are plenty of tools online that
						will check contrast ratio, they don't often make it easy to use opacity-based blend and
						then to tweak the colors to get a decent ratio. The idea of this tool is that it allows
						you to tweak the knobs a bit better. Additionally, the image palette generation part
						isn't super common.
					</p>
					<p>
						<em>
							Please note that this tool does not upload anything to a server. There's no storage,
							no memory, nothing like that. The only data collected by the tool is traffic, and I
							don't sell your data.
						</em>
					</p>
					<p>
						Once upon a time, I made a background with an overlay. The contrast was great! But then
						my "stakeholder" felt the background was too dark. <em>Too</em> dark. Is that even possible?
					</p>
					<p>
						She gave me a target color, and asked me to blend the background color with the overlay
						to reach that target.
					</p>
					<p>
						I don't know if you know anything about color theory, but the math involved in that
						request is...from another planet. So I made a thing. This way, I never have to do that
						math, and, hopefully, with this lil tool, you can avoid it, too.
					</p>
				</div>
			</div>
		</div>
		<div class="lilwrapper" id="color-display">
			<div class="intro">
				<p>
					text: {fgColor}
				</p>
				<p>on background: {bgColor}</p>

				<p>
					with overlay: {overlayColor} at {(opacity * 100).toFixed(0)}%
				</p>
				<p>looks kinda like:</p>
			</div>
			<div class="rgb" style="background-color: rgb({cssizer(resultRGB)}); text-align: center;">
				<p style=" color: {fgColor}">
					rgb: {cssizer(resultRGB)}
					<CopyButton text={cssizer(resultRGB)} feedback="Copied!">ok</CopyButton>
				</p>
			</div>
			<div class="contrast">
				<p class={contrastRatio < 3 ? 'pink' : contrastRatio > 4.5 ? 'lightgreen' : 'yellow'}>
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
	.dropdown-wrapper {
		width: 100%;
		display: flex;
		gap: 11px;
		&:first-child {
			flex: 1;
		}
		&:last-child {
			flex-basis: 64px;
		}
	}
	.lightgreen {
		color: lightgreen !important;
	}
	.yellow {
		color: yellow !important;
	}
	.pink {
		color: pink !important;
	}
	a {
	}
	.rgb p {
		display: flex;
		justify-content: start;
		align-items: center;
		gap: 11px;
		padding: 4px;
		margin-block: 4px;
		&:last-child {
			justify-content: end;
		}
	}
	.photo-credit {
		z-index: 4;
		position: absolute;
		top: 0;
		right: 0;
		padding: 3px;
		margin: 3px;
	}
	.photo-credit.hide {
		display: none;
	}
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
	:global(.bx--copy-btn.bx--copy) {
		background: rgba(0, 0, 0, 0.33);
		border: 1px solid rgba(0, 0, 0, 0.77);
		&:hover {
			background: rgba(0, 0, 0, 0.77);
			border: 1px solid rgba(0, 0, 0, 1);
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
			min-height: 100vh;
			min-width: 100vw;
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
		&:last-child {
			margin-top: 11px;
			text-align: right;
		}
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
