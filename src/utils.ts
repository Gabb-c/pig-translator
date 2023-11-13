const VOWELS = "aeiouy";

const EXAMPLES: string[] = [
  "Stop",
  "No littering",
  "No shirts, no shoes, no service",
  "No persons under 14 admitted",
  "Hey buddy, get away from my car!",
];

/**
 * Check if a letter is uppercase.
 *
 * @param {string|undefined} letter - The letter to check.
 * @returns {boolean} Whether the letter is uppercase.
 */
const isUpperCase = (letter?: string): boolean => letter === letter?.toUpperCase();

/**
 * Check if a letter is a vowel.
 *
 * @param {string} letter - The letter to check.
 * @returns {boolean} Whether the letter is a vowel.
 */
const isVowel = (letter: string): boolean => VOWELS.includes(letter.toLowerCase());

/**
 * Determine the suffix based on the presence of vowels.
 *
 * @param {string} word - The word to analyze.
 * @returns {"ay"|"yay"} The determined suffix.
 */
const buildSuffix = (word: string): "ay" | "yay" => {
  // Convert the word to an array of characters and check if any are vowels
  const hasVowel = Array.from(word).some(isVowel);
  return hasVowel ? "ay" : "yay";
};

export { isUpperCase, isVowel, buildSuffix, EXAMPLES };
