import { isEmojiSupported } from 'is-emoji-supported';

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getFlagEmoji(countryCode: string) {
  return [...countryCode.toUpperCase()]
    .map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
    .reduce((a, b) => a + b);
}

export function polyfillCountryFlagEmojis(
  fontName = 'Twemoji Country Flags',
  fontUrl = '/fonts/TwemojiCountryFlags.woff2',
) {
  if (isEmojiSupported('😊') && !isEmojiSupported('🇨🇭')) {
    const style = document.createElement('style');

    style.textContent = `@font-face {
      font-family: "${fontName}";
      unicode-range: U+1F1E6-1F1FF, U+1F3F4, U+E0062-E0063, U+E0065, U+E0067,
        U+E006C, U+E006E, U+E0073-E0074, U+E0077, U+E007F;
      src: url('${fontUrl}') format('woff2');
      font-display: swap;
    }`;
    document.head.appendChild(style);

    return true;
  }
  return false;
}
