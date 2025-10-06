/**
 * Returns a visually appealing and consistent hex color based on a string.
 * Uses HSL to ensure vibrant, pleasant colors.
 *
 * @param {string} str - The input string (e.g. a name or ID).
 * @returns {string} A hex color string like "#a1c4ff".
 */
export const getColorFromString = (str: string): string => {
  // Create a hash code from the string
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Map hash to a hue (0–360)
  const hue = hash % 360;

  // Use fixed saturation and lightness for consistency
  const saturation = 60; // % (vibrant)
  const lightness = 65; // % (soft, pastel-ish)

  return hslToHex(hue, saturation, lightness);
};

/**
 * Converts HSL to HEX color format.
 */
export const hslToHex = (h: number, s: number, l: number): string => {
  s /= 100;
  l /= 100;

  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    Math.round(
      255 * (l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1))))
    );

  return `#${f(0).toString(16).padStart(2, "0")}${f(8)
    .toString(16)
    .padStart(2, "0")}${f(4).toString(16).padStart(2, "0")}`;
};

export default {
  getColorFromString,
  hslToHex,
};
