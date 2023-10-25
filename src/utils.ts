const VOWELS = "aeiouy";

const EXAMPLES: string[] = [
  "Stop",
  "No littering",
  "No shirts, no shoes, no service",
  "No persons under 14 admitted",
  "Hey buddy, get away from my car!",
];

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

export { isUpperCase, isVowel, buildSuffix, EXAMPLES };
