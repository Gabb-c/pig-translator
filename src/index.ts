import { buildSuffix, isUpperCase, isVowel } from "./utils";

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

const translateSentence = (sentence: string): string => {
  if (sentence.length === 0) return sentence;

  const words = sentence.split(/\b/);
  const translatedWords = words.map(translateWord);

  return translatedWords.join("");
};

(function main() {
  console.log(`Original Sentence: Stop - Translated Sentence: ${translateSentence("Stop")}`);
  console.log(
    `Original Sentence: No littering - Translated Sentence: ${translateSentence("No littering")}`,
  );
  console.log(
    `Original Sentence: No shirts, no shoes, no service - Translated Sentence: ${translateSentence(
      "No shirts, no shoes, no service",
    )}`,
  );
  console.log(
    `Original Sentence: No persons under 14 admitted - Translated Sentence: ${translateSentence(
      "No persons under 14 admitted",
    )}`,
  );
  console.log(
    `Original Sentence: Hey buddy, get away from my car! - Translated Sentence: ${translateSentence(
      "Hey buddy, get away from my car!",
    )}`,
  );
})();
