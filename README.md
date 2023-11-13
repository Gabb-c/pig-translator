## Pig Language Translator

This repository hosts a simple Pig Latin translator, developed as part of a live code interview. The project includes features such as the latest TypeScript integration, unit tests using Vitest, linting with Biome.js, and clean code with comments.

## Table of Contents

- [Pig Language Translator](#pig-language-translator)
- [Table of Contents](#table-of-contents)
- [Tests and how to run the program](#tests-and-how-to-run-the-program)
- [Part One](#part-one)
  - [Description](#description)
  - [Translation rules](#translation-rules)
  - [Assignment](#assignment)
  - [Sample session](#sample-session)
- [Part Two](#part-two)
  - [Description](#description-1)
  - [Translation Rules](#translation-rules-1)
  - [Assignment](#assignment-1)
  - [Sample session](#sample-session-1)

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

## Part One 

### Description

An ancient language was recently uncovered which appears to be a close English language
derivative. A group of researchers requires a program to translate English into this ancient text.
The rules to translate any English word to this foreign language are listed below.

### Translation rules

Separate each word into two parts: the "prefix" and the "stem." The translated text is formed by switching the order of the prefix and the stem, adding the letters "ay" to the end.

### Assignment

Write a program to perform basic English to this foreign language translation within a 20-minute timeframe. Create a function for translation and call it in your code.

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

Researchers have found that the sentence structure is similar to English, and specific words need to be translated under different conditions. A program is needed to translate English sentences into this ancient text.

### Translation Rules

1. If a word has no letters, don't translate it.
2. Preserve all punctuation.
3. If the word begins with a capital letter, the translated word should too.
4. If the word contains no consonants, let the prefix be empty, and the word be the stem. The word ending should be "yay" instead of merely "ay."

### Assignment

Adapt the program to fulfill new requirements for sentence translation from English to this foreign language.

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
