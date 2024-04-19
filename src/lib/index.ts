// place files you want to import through the `$lib` alias in this folder.
export interface RGBColor {
	r: number;
	g: number;
	b: number;
}

export function hexToRGB(hex: String) {
	// Remove '#' if it's included
	hex = hex.replace('#', '');

	// Convert hex to RGB
	let r = parseInt(hex.substring(0, 2), 16);
	let g = parseInt(hex.substring(2, 4), 16);
	let b = parseInt(hex.substring(4, 6), 16);

	return { r, g, b };
}

export function hexToHSL(hex: String) {
	let { r, g, b } = hexToRGB(hex);

	// Convert RGB to HSL
	(r /= 255), (g /= 255), (b /= 255);
	let max = Math.max(r, g, b),
		min = Math.min(r, g, b);
	let h,
		s,
		l = (max + min) / 2;

	if (max == min) {
		h = s = 0; // achromatic
	} else {
		let d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
		}
		h /= 6;
	}

	return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

export function objectify(rgb) {
	return { r: rgb[0], g: rgb[1], b: rgb[2] };
}

export function calculateContrastRatio(color1: RGBColor, color2: RGBColor): number {
	// Helper function to calculate the relative luminance of a color
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
}

export function rgbToOklab(r, g, b) {
	// Normalize RGB values to range 0 to 1
	r /= 255;
	g /= 255;
	b /= 255;

	// Apply gamma correction for sRGB (standard RGB)
	const gamma = 2.2;
	r = r <= 0.04045 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, gamma);
	g = g <= 0.04045 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, gamma);
	b = b <= 0.04045 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, gamma);

	// Convert to XYZ space
	const X = r * 0.4124 + g * 0.3576 + b * 0.1805;
	const Y = r * 0.2126 + g * 0.7152 + b * 0.0722;
	const Z = r * 0.0193 + g * 0.1192 + b * 0.8615;

	// Adapt for D65 white point
	const Xn = 0.95047;
	const Yn = 1.0;
	const Zn = 1.08883;

	const varX = X / Xn;
	const varY = Y / Yn;
	const varZ = Z / Zn;

	// Convert to Oklab
	let L = 116 * f(varY) - 16;
	L = Math.max(0, L); // Clamp L to 0-1 range

	const a = 138.81 * f(varX) - 137.517;
	// const b = 275.021 * f(varZ) - 276.889;
	const oklabB = 275.021 * f(varZ) - 276.889;

	// Format and return as oklab() string
	console.log(`oklab(${L.toFixed(2)}%, ${a.toFixed(4)}, ${oklabB.toFixed(4)})`);
	return `oklab(${L.toFixed(2)}%, ${a.toFixed(4)}, ${oklabB.toFixed(4)})`;
}

// Helper function for Oklab conversion
function f(t) {
	return t <= 0.008856 ? t * 7.787 + 16 / 116 : Math.pow(t, 1 / 3);
}
