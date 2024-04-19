# opacity-contrast-checker

Uses a background color, overlay color with alpha channel, and a foreground color to determine text contrast ratio for a11y.

## What is this i don't even

This tool calculates the contrast ratio of text on background when using a
semi-transparent overlay. Provide a background color, an overlay color, and a
foreground/text color, and the tool will calculate the contrast ratio, seen in the
bottom right.

The [WCAG guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)

use the following thresholds:
- greater than 4.5:1 is "AA" status
- 3.0-4.5 is "A"
- less than 3 is *fail*

If you choose an image of your own, the tool will generate a 5-color palette from the
dominant colors of the image, using [Color Thief](https://lokeshdhakar.com/projects/color-thief). (This tool doesn't provide css for the full palette, the Color Thief website provides
that functionality, and it's a bit out of scope for this already-bloated tool.)

Why? Because it's a deceptively difficult task. There are plenty of tools online that
will check contrast ratio, they don't often make it easy to use opacity-based blend and
then to tweak the colors to get a decent ratio. The idea of this tool is that it allows
you to tweak the knobs a bit better. Additionally, the image palette generation part
isn't super common.

*Please note that this tool does not upload anything to a server. There's no storage,
no memory, nothing like that. The only data collected by the tool is traffic, and I
don't sell your data.*

Once upon a time, I made a background with an overlay. The contrast was great! But then
my "stakeholder" felt the background was too dark. *Too* dark. Is that even possible?

She gave me a target color, and asked me to blend the background color with the overlay
to reach that target.

I don't know if you know anything about color theory, but the math involved in that
request is...from another planet. So I made a thing. This way, I never have to do that
math, and, hopefully, with this lil tool, you can avoid it, too.

