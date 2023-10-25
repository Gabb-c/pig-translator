import { describe, it, expect } from 'vitest';

import { translateSentence } from "../src"
import { EXAMPLE_PHRASES } from './mocks/example';


describe("Translator", () =>{
  it("should translate the sentences", () => {
    for (const example of EXAMPLE_PHRASES) {
      const translatedSentence = translateSentence(example.original);
      expect(translatedSentence).toBe(example.expected)
    }
  });

  it("should not translate if there is no sentence", () => {
    const translatedSentence = translateSentence("");
    expect(translatedSentence).toBe("");
  })
});
