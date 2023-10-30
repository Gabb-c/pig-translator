## Pig Language Translator

This is a repository for a  live code interview. Down below I will provide the description, the features of this project and how to run the tests and the program itself.

## Tests and how to run the program

```bash
# Development
pnpm test:dev

# Coverage
pnpm test:coverage

# Opens Vitest UI
pnpm test:ui

# Run the development script
pnpm dev
```

## Features

  - Latest TypeScript
  - Unit tests with Vitest
  - Linting with Biome.js
  - Clean code with comments

## Part One 

### Description

An ancient language was recently uncovered which appears to be a close English language
derivative. A group of researchers requires a program to translate English into this ancient text.
The rules to translate any English word to this foreign language are listed below.

### Translation rules

Separate each word into two parts. The first part is called the “prefix” and extends from the beginning of the word
up to, but not including, the first vowel (The letter “y” will be considered a
vowel). The rest of the word is called the “stem”.

The translated text is formed by switching the order of the prefix and the stem, and
adding the letters “ay” to the end. For example, “sandwich” is composed of “s” + “andwich” and translates into “andwichsay”, which is “andwich” + “s” + “ay”.

### Assignment

Your task is to write a simple program in 20 min to perform basic English to this foreign
language translation. Your program does not need to expect inputs from the user. Create a
function that makes the translation and call it using your own code.


### Sample session

```txt
Input: stop
Output: opstay

Input: no
Output: onay

Input: people
Output: eoplepay

Input: bubble
Output: ubblebay

Input: under
Output: underay

Input: admitted
Output: admitteday

Input: away
Output: awayay
```

## Part Two

### Description

The same group of researchers have discovered later that the sentence structure is very similar
to English and that specific words need to be translated under different conditions. They now
require a program to translate English sentences into this ancient text. The rules to translate any
sentence in English to this foreign language are listed below.

### Translation Rules

1. If a word has no letters, don't translate it.
2. All punctuation should be preserved.
3. If the word begins with a capital letter, then the translated word should too.
4. If the word contains no consonants, let the prefix be empty and the word be the stem. The word ending should be “yay” instead of merely “ay”. For example, “I” would be “Iyay”

### Assignment

Your task is to adapt the program you wrote in half an hour to fulfill these new requirements 
to perform sentence translation from English to this foreign language.

### Sample session

```txt
Input: Stop
Output: Opstay

Input: No littering
Output: Onay itteringlay

Input: No shirts, no shoes, no service
Output: Onay irtsshay, onay oesshay, onay ervicesay

Input: No persons under 14 admitted
Output: Onay ersonspay underay 14 admitteday

Input: Hey buddy, get away from my car!
Output: Eyhay uddybay, etgay awayay omfray ymay arcay!
```
