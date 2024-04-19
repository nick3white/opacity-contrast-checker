import { derived, writable } from "svelte/store";
import { hexToRGB } from "./colorUtils";

export const bgColor = writable('#333333')
export const overlayColor = writable('#333399')
export const fgColor = writable('#CCCCCC')
export const opacity = writable(0.5)
export const computedColor = derived([bgColor, overlayColor, opacity], ([$bgColor, $overlayColor, $opacity]) => {
	let bg = hexToRGB($bgColor);
	let ol = hexToRGB($overlayColor);
	let blendedColor = {
		r: Math.round((1 - $opacity) * bg.r + $opacity * ol.r),
		g: Math.round((1 - $opacity) * bg.g + $opacity * ol.g),
		b: Math.round((1 - $opacity) * bg.b + $opacity * ol.b)
	};
	return `#${blendedColor.r.toString(16).padStart(2, '0')}${blendedColor.g.toString(16).padStart(2, '0')}${blendedColor.b.toString(16).padStart(2, '0')}`;
})
export const contrastRatio = derived([computedColor, fgColor], ([$computedColor, $fgColor]) => {
	// Helper function to calculate the relative luminance of a color
	const color1 = hexToRGB($computedColor)
	const color2 = hexToRGB($fgColor)
	const getRelativeLuminance = (color: RGBColor) => {
		const sRGB = Object.values(color).map((value) => {
			value /= 255;
			return value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);
		});
		return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
	};

	// Calculate the relative luminance of both colors
	const luminance1 = getRelativeLuminance(color1);
	const luminance2 = getRelativeLuminance(color2);

	// Ensure luminance1 is the lighter color
	const [lighter, darker] =
		luminance1 > luminance2 ? [luminance1, luminance2] : [luminance2, luminance1];

	// Calculate the contrast ratio
	const contrastRatio = (lighter + 0.05) / (darker + 0.05);

	return Number(contrastRatio.toFixed(2)); // Round to 2 decimal places and convert to number
})

export interface RGBColor {
	r: number;
	g: number;
	b: number;
}

export function objectify(rgb) {
	return { r: rgb[0], g: rgb[1], b: rgb[2] };
}

// export function calculateContrastRatio(color1: RGBColor, color2: RGBColor): number {
// 	// Helper function to calculate the relative luminance of a color
// 	const getRelativeLuminance = (color: RGBColor) => {
// 		const sRGB = Object.values(color).map((value) => {
// 			value /= 255;
// 			return value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);
// 		});
// 		return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
// 	};

// 	// Calculate the relative luminance of both colors
// 	const luminance1 = getRelativeLuminance(color1);
// 	const luminance2 = getRelativeLuminance(color2);

// 	// Ensure luminance1 is the lighter color
// 	const [lighter, darker] =
// 		luminance1 > luminance2 ? [luminance1, luminance2] : [luminance2, luminance1];

// 	// Calculate the contrast ratio
// 	const contrastRatio = (lighter + 0.05) / (darker + 0.05);

// 	return Number(contrastRatio.toFixed(2)); // Round to 2 decimal places and convert to number
// }

export function cssizer(color) {
	// console.log(color);
	if (typeof color === 'string') {
		color = hexToRGB(color);
	}
	let triad = Object.keys(color);
	if (triad.length !== 3) {
		return '0, 0, 0';
	}
	return `${color[triad[0]]}, ${color[triad[1]]}, ${color[triad[2]]}`;
}