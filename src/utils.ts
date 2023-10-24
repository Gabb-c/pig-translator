const VOWELS = "aeiouy";

const isUpperCase = (letter?: string): boolean => letter === letter?.toUpperCase();
const isVowel = (letter: string): boolean => VOWELS.includes(letter.toLowerCase());

const buildSuffix = (word: string): "ay" | "yay" => {
  for (const letter of word) {
    if (!isVowel(letter)) {
      return "ay";
    }
  }
  return "yay";
};

export { isUpperCase, isVowel, buildSuffix };
