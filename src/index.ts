import { EXAMPLES, buildSuffix, isUpperCase, isVowel } from "./utils";

/**
 * Translate a single word from English to the Pig Language.
 *
 * @param {string} word - The English word to translate.
 * @returns {string} The translated word in Pig Language.
 */
const translateWord = (word: string): string => {
  // Build the suffix for the translation
  const suffix = buildSuffix(word);
  let prefix = "";
  let stem = "";

  // Iterate through the letters to find the first vowel
  for (const letter of word) {
    if (isVowel(letter)) {
      // Found the vowel, set the stem and break the loop
      stem = word.slice(word.indexOf(letter));
      break;
    }
    prefix += letter;
  }

  // If no vowel is found, the entire word is the stem
  if (!stem) {
    stem = word;
    prefix = "";
  }

  // If the word doesn't contain alphabetic characters, return it unchanged
  if (!/[a-zA-Z]/.test(word)) return word;

  // Build the translated word based on the translation rules
  const translatedWord = isUpperCase(word[0])
    ? `${stem[0]?.toUpperCase()}${stem.slice(1)}${prefix.toLowerCase()}${suffix}`
    : `${stem}${prefix}${suffix}`;

  return translatedWord;
};

/**
 * Translate a sentence from English to the Pig Language.
 *
 * @param {string} sentence - The English sentence to translate.
 * @returns {string} The translated sentence in Pig Language.
 */
export const translateSentence = (sentence: string): string => {
  // If the sentence is empty, return it unchanged
  if (sentence.length === 0) return sentence;

  // Split the sentence into words
  const words = sentence.split(/\b/);

  // Translate each word and join them back into a sentence
  const translatedWords = words.map(translateWord);
  return translatedWords.join("");
};

/**
 * Example usage in a main function.
 */
(function main() {
  // Iterate through example sentences and display the original and translated versions
  for (const sentence of EXAMPLES) {
    console.log(
      `Original Sentence: ${sentence} - Translated Sentence: ${translateSentence(sentence)}`,
    );
  }
})();
