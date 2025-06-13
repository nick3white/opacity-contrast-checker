import { bgColor, overlayColor, opacity, fgColor, computedColor } from "$lib";
import { get } from 'svelte/store'

export function clamp(value, min, max) {
	return Math.max(Math.min(value, max), min);
}

// returns an object literal which is r, g and b integers from an RGB hex string:
export function hexToRGB(str) {
	var hex = str.replace('#', '');
	// NOTE: This can be removed for brevity if you stick with 6-character codes:
	// if (hex.length === 3) {hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];}
	var num = parseInt(hex, 16);
	return { r: num >> 16, g: (num >> 8) & 255, b: num & 255 };
}
// converts RGB integer values to hex:
export function rgbToHex({ r, g, b }) {
	// NEXT LINE OPTIONAL, depending on your purposes:
	var r = clamp(r, 0, 255);
	var g = clamp(g, 0, 255);
	var b = clamp(b, 0, 255);
	return '#' + (b | (g << 8) | (r << 16) | (1 << 24)).toString(16).slice(1);
}