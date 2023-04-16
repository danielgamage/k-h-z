/**
 * 
 * This (ESM)  module provides a collection of functions for converting between pitch and frequency units.
 * 
 * ## Conversion Overview
 * |                  | → hz                  | → ratio                  | → semitones                  | → cents                  | → named               | → note object         |
 * | :--------------- | :-------------------- | :----------------------- | :--------------------------- | :----------------------- | :-------------------- | :-------------------- |
 * | hz&nbsp;→        | _N/A_                 | {@link hzToRatio}        | {@link hzToSemitones}        | {@link hzToCents}        | {@link hzToNoteName}  | {@link hzToNoteObject}  |
 * | ratio&nbsp;→     | {@link ratioToHz}     | _N/A_                    | {@link ratioToSemitones}     | {@link ratioToCents}     | _Unimplemented_       | _Unimplemented_       |
 * | semitones&nbsp;→ | {@link semitonesToHz} | {@link semitonesToRatio} | _N/A_                        | {@link semitonesToCents} | _Unimplemented_       | _Unimplemented_       |
 * | cents&nbsp;→     | {@link centsToHz}     | {@link centsToRatio}     | {@link centsToSemitones}     | _N/A_                    | _Unimplemented_       | _Unimplemented_       |
 * | named&nbsp;→     | {@link namedNoteToHz} | {@link namedNoteToRatio} | {@link namedNoteToSemitones} | {@link namedNoteToCents} | _N/A_                 | _N/A_                 |
 * 
 * ## Installation
 * ```bash
 * npm install k-h-z
 * ```
 * @packageDocumentation
 */

/**
 * A note name, e.g. `C4`, `A♯3`, `F♯5`.
 * Also accepts lowercase and keyboard-accessible accidentals like `bb3` and `b#3`.
 */
export type NoteName = string;
/**
 * A ratio, e.g. `1.5`, `2`, `0.5`.
 * Supports positive numbers.
 */
export type Ratio = number;
/**
 * A semitone offset, e.g. `+3`, `-5`, `0`.
 * Supports positive and negative numbers.
 */
export type Semitones = number;
/**
 * A frequency in Hz, e.g. `440`, `523.2511`, or `1600` (1.6kHz).
 * Supports positive numbers.
 */
export type Hz = number;
/**
 * A frequency offset in cents, e.g. `+100`, `-200`, `0`.
 * Supports positive and negative numbers.
 */
export type Cents = number
/**
 * 
 */
export type NoteObject = {
  note: NoteName;
  octave: number;
  detune: Cents;
}

/**
 * A4 frequency in Hz
 */
export const A4 = 440;
/**
 * Normalized note names in the chromatic scale, using sharps
 */
export const chromaticScale = [
  "C",
  "C♯",
  "D",
  "D♯",
  "E",
  "F",
  "F♯",
  "G",
  "G♯",
  "A",
  "A♯",
  "B",
];
/**
 * Normalized note names in the chromatic scale, using flats
 */
export const chromaticScaleFlat = [
  "C",
  "D♭",
  "D",
  "E♭",
  "E",
  "F",
  "G♭",
  "G",
  "A♭",
  "A",
  "B♭",
  "B",
];

// =====================
// utils
// =====================
/**
 *
 */
export const getNoteIndexInOctave = (note: string) => {
  let scaleIndex = chromaticScale.indexOf(note);
  if (scaleIndex === -1) {
    scaleIndex = chromaticScaleFlat.indexOf(note);
  }
  // center around A4
  return -9 + scaleIndex;
};

/**
 * Replaces keyboard-accessible accidentals with their unicode equivalents and makes note name uppercase.
 * @example ```js
 * cleanNoteName("C#4") // "C♯4"
 * cleanNoteName("bb4") // "B♭4"
 * ```
 */
export function cleanNoteName(
  /** dirty note name, with name, optional accidental, and octave */
  dirtyNote: string
): string {
  return dirtyNote
    .replace(/([A-Za-z])(b)/g, "$1♭") // replace b with ♭
    .replace("#", "♯") // replace # with ♯
    .toUpperCase();
}

// =====================
// from semitones
// =====================
/**
 * @example ```js
 * semitonesToHz(3) // 523.2511
 * semitonesToHz(-3, 523.2511) // 440
 * ```
 */
export function semitonesToHz(
  /** semitone offset */
  semitones: number,
  /** optional base note */
  baseHz: number = A4
): number {
  return baseHz * Math.pow(2, semitones / 12);
}

export function semitonesToCents(
  /**semitone offset*/
  semitones: number
): number {
  return 100 * semitones;
}
export function semitonesToRatio(
  /** semitone offset */
  semitones: number
): number {
  return Math.pow(2, semitones / 12);
}

// =====================
// from cents
// =====================
export function centsToSemitones(cents: number) {
  return cents / 100;
}
export function centsToRatio(cents: number) {
  return semitonesToRatio(centsToSemitones(cents));
}
export function centsToHz(cents: number, baseHz?: number) {
  return semitonesToHz(centsToSemitones(cents), baseHz);
}


// =====================
// from named note
// =====================
/**
 * @example ```js
 * namedNoteToSemitones("C4") // +3
 * namedNoteToSemitones("A♯3") // -11
 * ```
 */
export function namedNoteToSemitones(
  note: NoteName
) {
  const cleanNote = cleanNoteName(note);
  const noteIndex = getNoteIndexInOctave(cleanNote.replace(/-?[0-9]+/g, ""));

  let octave = 4;
  const octaveNumber = cleanNote.match(/-?[0-9]+/g)?.[0];
  if (octaveNumber && !Number.isNaN(parseInt(octaveNumber))) {
    octave = parseInt(octaveNumber);
  }
  const semitone = noteIndex + (octave - 4) * 12;
  return semitone;
}
export function namedNoteToRatio(
  note: NoteName,
  baseNote: string = "A4",
) {
  return namedNoteToHz(note) / namedNoteToHz(baseNote);
}
export function namedNoteToCents(
  /** note name, e.g. C4, A♯3, F♯5 */
  note: string
) {
  return semitonesToCents(namedNoteToSemitones(note));
}

/**
 * @example ```js
 * namedNoteToHz("C4") // 261.6256
 * namedNoteToHz("A♯3") // 233.0819
 * ```
 */
export function namedNoteToHz(
  /** note name, e.g. C4, A♯3, F♯5 */
  note: string
): number {
  return semitonesToHz(namedNoteToSemitones(note));
}

// =====================
// from ratio
// =====================
/**
 * @example ```js
 * ratioToSemitones(2) // 12
 * ratioToSemitones(3) // ~19.02
 * ```
 */
export function ratioToSemitones(
  /** decimal or fractional ratio */
  ratio: number
): number {
  return 12 * Math.log2(ratio);
}

export function ratioToHz(
  /** decimal or fractional ratio */
  ratio: number,
  baseHz?: number
): number {
  return semitonesToHz(ratioToSemitones(ratio), baseHz);
}

export function ratioToCents(
  /** decimal or fractional ratio */
  ratio: number
): number {
  return semitonesToCents(ratioToSemitones(ratio));
}

// =====================
// from Hz
// =====================
/**
 * @example ```js
 * hzToNoteName(260) // C
 * hzToNoteName(260, Math.floor) // B
 * hzToNoteName(263) // C
 * hzToNoteName(263, Math.ceil) // C♯
 * ```
 */
export function hzToNoteName(
  /** frequency of note in hertz */
  hz: number,
  /** whether to round up, down, or naturally */
  rounding:
    | typeof Math.round
    | typeof Math.floor
    | typeof Math.ceil = Math.round
): string {
  const note = rounding(12 * (Math.log(hz / 440) / Math.log(2))) + 69;
  return chromaticScale[note % 12];
}

export function hzToNoteObject(
  /** frequency of note in hertz */
  hz: number
): NoteObject {
  const semitone = 12 * (Math.log(hz / 440) / Math.log(2)) + 69;
  const round = Math.round(semitone);
  const centRemainder =
    (semitone % 1 > 0.5 ? -1 + (semitone % 1) : semitone % 1) * 100;
  return {
    note: hzToNoteName(hz),
    octave: Math.floor(round / 12 - 1),
    detune: Math.round(centRemainder),
  };
}

export function hzToRatio(
  /** base frequency in hertz */
  hzA: number,
  /** target frequency in hertz */
  hzB: number = A4
): number {
  return hzA / hzB;
}

/**
 * @example ```js
 * hzToSemitones(880, 440) // -12
 * ```
 */
export function hzToSemitones(
  /** base frequency in hertz */
  hzA: number,
  /** target frequency in hertz */
  hzB: number
): number {
  return 12 * Math.log2(hzB / hzA);
}

export function hzToCents(hzA: number, hzB: number): number {
  return semitonesToCents(hzToSemitones(hzA, hzB));
}

/**
 * formats a number in Hz to a string with kilohertz support
 */
export function formatHz(hz: number, precision = 2): string {
  if (hz >= 1000) {
    return `${(hz / 1000).toFixed(precision)}kHz`;
  }
  return `${hz.toFixed(precision)}Hz`;
}
