import { buildSuffix, isUpperCase, isVowel, EXAMPLES } from "./utils";

const translateWord = (word: string): string => {
  const suffix = buildSuffix(word);
  let prefix = "";
  let stem = "";

  for (const letter of word) {
    if (isVowel(letter)) {
      stem = word.slice(word.indexOf(letter));
      break;
    }
    prefix += letter;
  }

  if (!stem) {
    stem = word;
    prefix = "";
  }

  if (!/[a-zA-Z]/.test(word)) return word;

  const translatedWord = isUpperCase(word[0])
    ? stem[0]?.toUpperCase() + stem.slice(1) + prefix.toLowerCase() + suffix
    : stem + prefix + suffix;

  return translatedWord;
};

export const translateSentence = (sentence: string): string => {
  if (sentence.length === 0) return sentence;

  const words = sentence.split(/\b/);
  const translatedWords = words.map(translateWord);

  return translatedWords.join("");
};

(function main() {
  for (const sentence of EXAMPLES) {
    console.log(`Original Sentence: ${sentence} - Translated Sentence: ${translateSentence(sentence)}`);
  }
})();
