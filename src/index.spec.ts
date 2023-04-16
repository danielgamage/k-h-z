import { describe, test, expect } from "vitest";
import * as khz from "./";

const A4 = 440;
const C5 = 523.2511306011972;
const A5 = 880;

describe("from semitones", function () {
  describe("semitonesToCents", function () {
    [
      { input: 0, output: 0 },
      { input: -12, output: -1200 },
      { input: 12, output: 1200 },
    ].forEach(({ input, output }) => {
      test(`${input} → ${output}`, () => {
        expect(khz.semitonesToCents(input)).toBeCloseTo(output);
      });
    });
  });
  describe("semitonesToHz", function () {
    test("converts octaves", function () {
      expect(khz.semitonesToHz(12)).toEqual(A4 * 2);
      expect(khz.semitonesToHz(24)).toEqual(A4 * 4);
    });
    test("converts non-12 transposition", function () {
      expect(khz.semitonesToHz(3)).toBeCloseTo(C5);
    });
  });
  describe("semitonesToRatio", function () {
    [
      { input: 0, output: 1 },
      { input: -12, output: 0.5 },
      { input: 12, output: 2 },
      { input: 19.02, output: 3 },
    ].forEach(({ input, output }) => {
      test(`${input} → ${output}`, () => {
        expect(khz.semitonesToRatio(input)).toBeCloseTo(output);
      });
    });
  });
});
describe("from Hz", function () {
  describe("hzToRatio", function () {
    test("defaults to A4 for denominator", function () {
      expect(khz.hzToRatio(A5)).toBeCloseTo(2);
    });
    test("works on smaller numerator values", function () {
      expect(khz.hzToRatio(A4, A5)).toBeCloseTo(0.5);
    });
  });

  describe("hzToNoteObject", () => {
    test("basic", () => {
      expect(khz.hzToNoteObject(262).note).toBe("C");
      expect(khz.hzToNoteObject(440).note).toBe("A");
      expect(khz.hzToNoteObject(523).note).toBe("C");
      expect(khz.hzToNoteObject(8372).note).toBe("C");
      expect(khz.hzToNoteObject(262).octave).toBe(4);
      expect(khz.hzToNoteObject(440).octave).toBe(4);
      expect(khz.hzToNoteObject(523).octave).toBe(5);
      expect(khz.hzToNoteObject(8372).octave).toBe(9);
    });
    test("exports correct negative detune in cents", () => {
      const Bflat = khz.hzToNoteObject(480);
      expect(Bflat.note).toBe("B");
      expect(Bflat.octave).toBe(4);
      expect(Bflat.detune).toBe(-49);
    });
    test("exports correct positive detune in cents", () => {
      const Bsharp = khz.hzToNoteObject(1000);
      expect(Bsharp.note).toBe("B");
      expect(Bsharp.octave).toBe(5);
      expect(Bsharp.detune).toEqual(21);
    });
  });
  describe("hzToNoteName", () => {
    describe("converts Hz to note name", () => {
      [
        { input: 262, output: "C" },
        { input: 440, output: "A" },
        { input: 523, output: "C" },
        { input: 8372, output: "C" },
      ].forEach(({ input, output }) => {
        test(`${input} → ${output}`, () => {
          expect(khz.hzToNoteName(input)).toBe(output);
        });
      });
    });
    describe("responds to rounding", () => {
      test(`260 → C`, () => expect(khz.hzToNoteName(260)).toBe("C"));
      test(`260 → B (floor)`, () =>
        expect(khz.hzToNoteName(260, Math.floor)).toBe("B"));
      test(`263 → C`, () => expect(khz.hzToNoteName(263)).toBe("C"));
      test(`263 → C♯ (ceil)`, () =>
        expect(khz.hzToNoteName(263, Math.ceil)).toBe("C♯"));
    });
  });
  describe("hzToSemitones", function () {
    test("works between octaves", function () {
      expect(khz.hzToSemitones(C5)).toBeCloseTo(+3);
    });
    test("works on positive octaves", function () {
      expect(khz.hzToSemitones(A4 * 2)).toEqual(+12);
      expect(khz.hzToSemitones(A4 * 2, A4 / 2)).toEqual(+24);
    });
    test("works on negative octaves", function () {
      expect(khz.hzToSemitones(A4 / 2)).toEqual(-12);
    });
  });
});
describe("from cents", function () {
  describe("centsToSemitones", function () {
    [
      { input: 0, output: 0 },
      { input: -1200, output: -12 },
      { input: 1200, output: 12 },
    ].forEach(({ input, output }) => {
      test(`${input} → ${output}`, () => {
        expect(khz.centsToSemitones(input)).toBeCloseTo(output);
      });
    });
  });
  describe("centsToRatio", function () {
    [
      { input: 0, output: 1 },
      { input: -1200, output: 0.5 },
      { input: 1200, output: 2 },
    ].forEach(({ input, output }) => {
      test(`${input} → ${output}`, () => {
        expect(khz.centsToRatio(input)).toBeCloseTo(output);
      });
    });
  });
  describe("centsToHz", function () {
    [
      { input: 0, output: 440 },
      { input: -1200, output: 220 },
      { input: 1200, output: 880 },
    ].forEach(({ input, output }) => {
      test(`${input} → ${output}`, () => {
        expect(khz.centsToHz(input)).toBeCloseTo(output);
      });
    });
  });
});
describe("formatHz", function () {
  [
    { input: 2, output: "2.00Hz" },
    { input: 2.325, output: "2.33Hz" },
    { input: 999, output: "999.00Hz" },
    { input: 1000, output: "1.00kHz" },
    { input: 2000, output: "2.00kHz" },
    { input: 20000, output: "20.00kHz" },
    { input: 200000, output: "200.00kHz" },
  ].forEach(({ input, output }) => {
    test(`${input} → ${output}`, () => {
      expect(khz.formatHz(input)).toBe(output);
    });
  });
});

describe("from ratio", () => {
  describe("ratioToSemitones", () => {
    test("converts multipliers to semitones", () => {
      expect(khz.ratioToSemitones(1.4983206107)).toBeCloseTo(7);
      expect(khz.ratioToSemitones(2.997)).toBeCloseTo(19);
      expect(khz.ratioToSemitones(4)).toBeCloseTo(24);
    });
    test("converts fractional ratios", () => {
      expect(khz.ratioToSemitones(3 / 2)).toBeCloseTo(7.02);
    });
  });
});
describe("from named note", () => {
  describe("cleanNoteName", () => {
    test("capitalizes", () => {
      expect(khz.cleanNoteName("c4")).toBe("C4");
      expect(khz.cleanNoteName("c♯4")).toBe("C♯4");
    });
    test("normalizes sharps", () => {
      expect(khz.cleanNoteName("c#4")).toBe("C♯4");
    });
    test("normalizes flats", () => {
      expect(khz.cleanNoteName("cb4")).toBe("C♭4");
      expect(khz.cleanNoteName("bb4")).toBe("B♭4");
    });
  });
  describe("getNoteIndexInOctave", function () {
    [
      { input: "C", output: -9 },
      { input: "C♯", output: -8 },
      { input: "D♭", output: -8 },
      { input: "D", output: -7 },
      { input: "E", output: -5 },
      { input: "F", output: -4 },
      { input: "G", output: -2 },
      { input: "A", output: 0 },
      { input: "B", output: 2 },
    ].forEach(({ input, output }) => {
      test(`${input} → ${output}`, () => {
        expect(khz.getNoteIndexInOctave(input)).toBe(output);
      });
    });
  });
  describe("namedNoteToSemitones", () => {
    test("C4", () => expect(khz.namedNoteToSemitones("C4")).toBe(-9));
    test("A♯3", () => expect(khz.namedNoteToSemitones("A♯3")).toBe(-11));
  });
  describe("namedNoteToHz", () => {
    const tests = {
      "C-1": 8.176,
      "G#-1": 12.978,
      "A-1": 13.75,
      "B-1": 15.434,
      A0: 27.5,
      A1: 55,
      C4: 261.626,
      "C♯4": 277.183,
      D4: 293.665,
      "D♯4": 311.127,
      eb4: 311.127,
      E4: 329.628,
      F4: 349.228,
      "F♯4": 369.994,
      G4: 391.995,
      "G♯4": 415.305,
      A4: 440,
      "A♯4": 466.164,
      B4: 493.883,
      C5: 523.251,
      F5: 698.457,
      C8: 4186.009,
      C9: 8372.0181,
      B10: 31608.53,
    };
    Object.entries(tests).forEach(([note, hz]) => {
      test(`${note}`, () => {
        expect(khz.namedNoteToHz(note)).toBeCloseTo(hz);
      });
    });
    test("uses 4 in the absence of an explicit octave", () => {
      expect(khz.namedNoteToHz("C")).toBeCloseTo(261.63);
    });
  });
  describe("namedNoteToRatio", () => {
    test("A4", () => expect(khz.namedNoteToRatio("A4")).toBeCloseTo(1));
    test("A5", () => expect(khz.namedNoteToRatio("A5")).toBeCloseTo(2));
    test("A6", () => expect(khz.namedNoteToRatio("A6")).toBeCloseTo(4));
    test("A4:A3", () =>
      expect(khz.namedNoteToRatio("A4", "A3")).toBeCloseTo(2));
  });
});
