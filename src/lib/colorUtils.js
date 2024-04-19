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

// correlary of first psuedocode block here (f_inv) : https://bottosson.github.io/posts/colorwrong/#what-can-we-do%3F ; "applying the inverse of the sRGB nonlinear transform function.." -- keeping the abbreviated syntax of arrow functions and ? : if/then, despite that they confuse and stretch my noob brain:
const gammaToLinear = (c) => (c >= 0.04045 ? Math.pow((c + 0.055) / 1.055, 2.4) : c / 12.92);
// correlary of the first " : "..then switching back" :
const linearToGamma = (c) => (c >= 0.0031308 ? 1.055 * Math.pow(c, 1 / 2.4) - 0.055 : 12.92 * c);

export function rgbToOklab(input) {
	let r, g, b;
	if (typeof input === 'string') {
		let rgbVal = hexToRGB(input);

		r = rgbVal.r;
		g = rgbVal.g;
		b = rgbVal.b;
	} else if (['r', 'g', 'b'].every((i) => i in input)) {
		r = input.r;
		g = input.g;
		b = input.b;
	} else if (input.every((i) => typeof i === 'number')) {
		r = input[0];
		g = input[1];
		b = input[2];
	}
	// This is my undersanding: JavaScript canvas and many other virtual and literal devices use gamma-corrected (non-linear lightness) RGB, or sRGB. To convert sRGB values for manipulation in the Oklab color space, you must first convert them to linear RGB. Where Oklab interfaces with RGB it expects and returns linear RGB values. This next step converts (via a function) sRGB to linear RGB for Oklab to use:
	r = gammaToLinear(r / 255);
	g = gammaToLinear(g / 255);
	b = gammaToLinear(b / 255);
	// console.log('r', r);
	// console.log('g', g);
	// console.log('b', b);
	// This is the Oklab math:
	var l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
	var m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b;
	var s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b;
	// Math.crb (cube root) here is the equivalent of the C++ cbrtf function here: https://bottosson.github.io/posts/oklab/#converting-from-linear-srgb-to-oklab
	l = Math.cbrt(l);
	m = Math.cbrt(m);
	s = Math.cbrt(s);
	return {
		L: (l * +0.2104542553 + m * +0.793617785 + s * -0.0040720468).toFixed(2),
		a: (l * +1.9779984951 + m * -2.428592205 + s * +0.4505937099).toFixed(4),
		b: (l * +0.0259040371 + m * +0.7827717662 + s * -0.808675766).toFixed(4)
	};
	// return {
	// 	L: Math.round((l * +0.2104542553 + m * +0.793617785 + s * -0.0040720468) * 10000) / 10000,
	// 	a: Math.round((l * +1.9779984951 + m * -2.428592205 + s * +0.4505937099) * 10000) / 10000,
	// 	b: Math.round((l * +0.0259040371 + m * +0.7827717662 + s * -0.808675766) * 10000) / 10000
	// };
}

export function oklabToSRGB({ L, a, b }) {
	var l = L + a * +0.3963377774 + b * +0.2158037573;
	var m = L + a * -0.1055613458 + b * -0.0638541728;
	var s = L + a * -0.0894841775 + b * -1.291485548;
	// The ** operator here cubes; same as l_*l_*l_ in the C++ example:
	l = l ** 3;
	m = m ** 3;
	s = s ** 3;
	var r = l * +4.0767416621 + m * -3.3077115913 + s * +0.2309699292;
	var g = l * -1.2684380046 + m * +2.6097574011 + s * -0.3413193965;
	var b = l * -0.0041960863 + m * -0.7034186147 + s * +1.707614701;
	// Convert linear RGB values returned from oklab math to sRGB for our use before returning them:
	r = 255 * linearToGamma(r);
	g = 255 * linearToGamma(g);
	b = 255 * linearToGamma(b);
	// OPTION: clamp r g and b values to the range 0-255; but if you use the values immediately to draw, JavaScript clamps them on use:
	r = clamp(r, 0, 255);
	g = clamp(g, 0, 255);
	b = clamp(b, 0, 255);
	// OPTION: round the values. May not be necessary if you use them immediately for rendering in JavaScript, as JavaScript (also) discards decimals on render:
	r = Math.round(r);
	g = Math.round(g);
	b = Math.round(b);
	return { r, g, b };
}

// returns an array which is a range of values at N intervals over range min-max (interpolations), inclusive of max:
export function getLerpRange(min, max, N) {
	let dividend = (max - min) / (N - 1);
	var arr = [];
	let currentVal = min;
	for (var i = 0; i < N; i++) {
		arr.push(currentVal);
		currentVal += dividend;
	}
	return arr;
}

// returns an array of sRGB hex color codes, from interpolation in numberOfColors steps through Oklab space (and converted back to sRGB), including start and end value:
export function getRGBlerpRangeInOklabSpace(startRGBhexColor, endRGBhexColor, numberOfColors) {
	var lasInterpolaciones = [];
	var startLabVals = rgbToOklab(hexToRGB(startRGBhexColor));
	var endLabVals = rgbToOklab(hexToRGB(endRGBhexColor));
	var lValsArr = getLerpRange(startLabVals.L, endLabVals.L, numberOfColors);
	var aValsArr = getLerpRange(startLabVals.a, endLabVals.a, numberOfColors);
	var bValsArr = getLerpRange(startLabVals.b, endLabVals.b, numberOfColors);
	for (var i = 0; i < numberOfColors; i++) {
		// I could nest function calls here for brevity . . .
		var tmpOklabVals = { L: lValsArr[i], a: aValsArr[i], b: bValsArr[i] };
		var tmpsRGBvals = oklabToSRGB(tmpOklabVals);
		// var hexVals = rgbToHex(tmpsRGBvals);
		lasInterpolaciones.push(tmpsRGBvals);
	}
	return lasInterpolaciones;
}

var testInterpolaciones = getRGBlerpRangeInOklabSpace('#0000ff', '#ffff00', 7);
for (var element of testInterpolaciones) {
	// console.log(element);
}
// compare the middle value of that to the blue -> yellow gradient through Oklab space here: https://raphlinus.github.io/color/2021/01/18/oklab-critique.html -- they match. This (and other tests) verifies this is doing things correctly from sRGB -> linear RGB -> Oklab -> transformation -> linear RGB -> sRGB.
