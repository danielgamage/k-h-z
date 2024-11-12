<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [pitch-utils](#pitch-utils)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Conversion Overview](#conversion-overview)
  - [Type Aliases](#type-aliases)
    - [Cents](#cents)
    - [Hz](#hz)
    - [MIDINoteNumber](#midinotenumber)
    - [NoteName](#notename)
    - [NoteObject](#noteobject)
    - [Octave](#octave)
    - [Ratio](#ratio)
    - [RoundingMethod](#roundingmethod)
    - [Semitones](#semitones)
  - [Variables](#variables)
    - [A4](#a4)
    - [blackNotesOnPiano](#blacknotesonpiano)
    - [chromaticScale](#chromaticscale)
    - [enharmonicChromaticScale](#enharmonicchromaticscale)
    - [whiteNotesOnPiano](#whitenotesonpiano)
  - [Functions](#functions)
    - [centsToHz](#centstohz)
    - [centsToMidi](#centstomidi)
    - [centsToRatio](#centstoratio)
    - [centsToSemitones](#centstosemitones)
    - [cleanNoteName](#cleannotename)
    - [formatHz](#formathz)
    - [getNoteIndexInOctave](#getnoteindexinoctave)
    - [getRoundingFunction](#getroundingfunction)
    - [hzToCents](#hztocents)
    - [hzToMidi](#hztomidi)
    - [hzToNoteName](#hztonotename)
    - [hzToNoteObject](#hztonoteobject)
    - [hzToRatio](#hztoratio)
    - [hzToSemitones](#hztosemitones)
    - [isNoteBlackOnPiano](#isnoteblackonpiano)
    - [isNoteWhiteOnPiano](#isnotewhiteonpiano)
    - [midiToCents](#miditocents)
    - [midiToHz](#miditohz)
    - [midiToNoteName](#miditonotename)
    - [midiToNoteObject](#miditonoteobject)
    - [midiToRatio](#miditoratio)
    - [midiToSemitones](#miditosemitones)
    - [namedNoteToCents](#namednotetocents)
    - [namedNoteToHz](#namednotetohz)
    - [namedNoteToMidi](#namednotetomidi)
    - [namedNoteToRatio](#namednotetoratio)
    - [namedNoteToSemitones](#namednotetosemitones)
    - [quantizeHz](#quantizehz)
    - [ratioToCents](#ratiotocents)
    - [ratioToHz](#ratiotohz)
    - [ratioToMidi](#ratiotomidi)
    - [ratioToSemitones](#ratiotosemitones)
    - [semitonesToCents](#semitonestocents)
    - [semitonesToHz](#semitonestohz)
    - [semitonesToMidi](#semitonestomidi)
    - [semitonesToRatio](#semitonestoratio)
  - [Classes](#classes)
    - [Class: Pitch](#class-pitch)
      - [Constructors](#constructors)
      - [Properties](#properties)
      - [Accessors](#accessors)
      - [Methods](#methods)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<a name="modulesmd"></a>

# pitch-utils

This (ESM)  module provides a collection of functions for converting between pitch and frequency units.

## Installation
```bash
npm install pitch-utils
```

## Usage
```js
import { hzToSemitones } from "pitch-utils";
hzToSemitones(880, 440); // +12
```

## Conversion Overview
|                  | → hz                  | → ratio                  | → semitones                  | → cents                  | → midi                   | → named               | → note object          |
| :--------------- | :-------------------- | :----------------------- | :--------------------------- | :----------------------- | :----------------------- | :-------------------- | :--------------------- |
| hz&nbsp;→        | _N/A_                 | [hzToRatio](#hztoratio)        | [hzToSemitones](#hztosemitones)        | [hzToCents](#hztocents)        | [hzToMidi](#hztomidi)         | [hzToNoteName](#hztonotename)  | [hzToNoteObject](#hztonoteobject) |
| ratio&nbsp;→     | [ratioToHz](#ratiotohz)     | _N/A_                    | [ratioToSemitones](#ratiotosemitones)     | [ratioToCents](#ratiotocents)     | [ratioToMidi](#ratiotomidi)      | _Unimplemented_       | _Unimplemented_        |
| semitones&nbsp;→ | [semitonesToHz](#semitonestohz) | [semitonesToRatio](#semitonestoratio) | _N/A_                        | [semitonesToCents](#semitonestocents) | [semitonesToMidi](#semitonestomidi)  | _Unimplemented_       | _Unimplemented_        |
| cents&nbsp;→     | [centsToHz](#centstohz)     | [centsToRatio](#centstoratio)     | [centsToSemitones](#centstosemitones)     | _N/A_                    | [centsToMidi](#centstomidi)      | _Unimplemented_       | _Unimplemented_        |
| midi&nbsp;→      | [midiToHz](#miditohz)      | [midiToRatio](#miditoratio)      | [midiToSemitones](#miditosemitones)      | [midiToCents](#miditocents)      | _N/A_                    | _Unimplemented_       | _Unimplemented_        |
| named&nbsp;→     | [namedNoteToHz](#namednotetohz) | [namedNoteToRatio](#namednotetoratio) | [namedNoteToSemitones](#namednotetosemitones) | [namedNoteToCents](#namednotetocents) | [namedNoteToMidi](#namednotetomidi)  | _N/A_                 | _Unimplemented_        |

## Classes

- [Pitch](#classespitchmd)

## Type Aliases

### Cents

Ƭ **Cents**: `number`

A granular pitch offset unit, e.g. `+100`, `-200`, `0`.
Supports positive and negative numbers.

#### Defined in

[src/index.ts:54](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L54)

___

### Hz

Ƭ **Hz**: `number`

A frequency unit reflecting the number of cycles per second, e.g. `440`, `523.2511`, or `1600` (1.6kHz).
Supports positive numbers.

#### Defined in

[src/index.ts:60](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L60)

___

### MIDINoteNumber

Ƭ **MIDINoteNumber**: `number`

Integer representation of pitch in [0, 127], e.g. `12` (C0), `69` (A4), `127` (G9).

#### Defined in

[src/index.ts:70](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L70)

___

### NoteName

Ƭ **NoteName**: `string`

A note name with its octave, e.g. `C4`, `A♯3`, `F♯5`.
Also accepts lowercase and keyboard-accessible accidentals like `bb3` and `b#3`.

#### Defined in

[src/index.ts:36](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L36)

___

### NoteObject

Ƭ **NoteObject**: `Object`

Object with note properties for flexible formatting.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `detune` | [`Cents`](#cents) |
| `hz` | [`Hz`](#hz) |
| `note` | [`NoteName`](#notename) |
| `octave` | [`Octave`](#octave) |

#### Defined in

[src/index.ts:75](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L75)

___

### Octave

Ƭ **Octave**: `number`

Integer pitch grouping, e.g. `-1`, `4`, `10`.

#### Defined in

[src/index.ts:65](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L65)

___

### Ratio

Ƭ **Ratio**: `number`

A frequency ratio, e.g. `1.5`, `2`, `0.5`.
Supports positive numbers.

#### Defined in

[src/index.ts:42](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L42)

___

### RoundingMethod

Ƭ **RoundingMethod**: ``"nearest"`` \| ``"up"`` \| ``"down"``

Rounding method for converting between frequency units.

**`Todo`**

maybe eventually this can include hz rounding in addition to pitch rounding

#### Defined in

[src/index.ts:86](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L86)

___

### Semitones

Ƭ **Semitones**: `number`

A semitone pitch offset, e.g. `+3`, `-5`, `0`.
Supports positive and negative numbers.

#### Defined in

[src/index.ts:48](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L48)

## Variables

### A4

• `Const` **A4**: ``440``

A4 frequency in Hz

#### Defined in

[src/index.ts:95](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L95)

___

### blackNotesOnPiano

• `Const` **blackNotesOnPiano**: `string`[]

#### Defined in

[src/index.ts:136](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L136)

___

### chromaticScale

• `Const` **chromaticScale**: `string`[]

Normalized note names in the chromatic scale, using sharps

#### Defined in

[src/index.ts:99](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L99)

___

### enharmonicChromaticScale

• `Const` **enharmonicChromaticScale**: `string`[][]

Note names with alternate enharmonic names

#### Defined in

[src/index.ts:116](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L116)

___

### whiteNotesOnPiano

• `Const` **whiteNotesOnPiano**: `string`[]

#### Defined in

[src/index.ts:133](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L133)

## Functions

### centsToHz

▸ **centsToHz**(`cents`, `baseHz?`): [`Hz`](#hz)

**`Example`**

```js
centsToHz(1200) // 880
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `cents` | `number` | `undefined` |
| `baseHz` | `number` | `A4` |

#### Returns

[`Hz`](#hz)

#### Defined in

[src/index.ts:285](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L285)

___

### centsToMidi

▸ **centsToMidi**(`cents`): [`MIDINoteNumber`](#midinotenumber)

**`Example`**

```js
centsToMidi(0) // 69
centsToMidi(1200) // 81
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `cents` | `number` |

#### Returns

[`MIDINoteNumber`](#midinotenumber)

#### Defined in

[src/index.ts:295](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L295)

___

### centsToRatio

▸ **centsToRatio**(`cents`): [`Ratio`](#ratio)

**`Example`**

```js
centsToRatio(1200) // 2
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `cents` | `number` |

#### Returns

[`Ratio`](#ratio)

#### Defined in

[src/index.ts:277](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L277)

___

### centsToSemitones

▸ **centsToSemitones**(`cents`): [`Semitones`](#semitones)

**`Example`**

```js
centsToSemitones(100) // +1
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `cents` | `number` |

#### Returns

[`Semitones`](#semitones)

#### Defined in

[src/index.ts:269](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L269)

___

### cleanNoteName

▸ **cleanNoteName**(`dirtyNote`): `string`

Replaces keyboard-accessible accidentals with their unicode equivalents and makes note name uppercase.

**`Example`**

```js
cleanNoteName("C#4") // "C♯4"
cleanNoteName("bb4") // "B♭4"
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dirtyNote` | `string` | dirty note name, with name, optional accidental, and octave |

#### Returns

`string`

#### Defined in

[src/index.ts:175](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L175)

___

### formatHz

▸ **formatHz**(`hz`, `precision?`, `alwaysIncludeSign?`): `string`

Formats a number in Hz to a string with kilohertz support
Assumes tabular numeral usage, and includes trailing zeros for alignment.

**`Example`**

```js
formatHz(232.5) // "232.50Hz"
formatHz(2325) // "2.33kHz"
formatHz(2325, 2, true) // "+2.33kHz"
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `hz` | `number` | `undefined` | - |
| `precision` | `number` | `2` | - |
| `alwaysIncludeSign` | `boolean` | `false` | whether to include (+) signs |

#### Returns

`string`

#### Defined in

[src/index.ts:194](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L194)

___

### getNoteIndexInOctave

▸ **getNoteIndexInOctave**(`note`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `note` | `string` |

#### Returns

`number`

#### Defined in

[src/index.ts:158](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L158)

___

### getRoundingFunction

▸ **getRoundingFunction**(`roundingMethod`): (`x`: `number`) => `number` \| (`x`: `number`) => `number` \| (`x`: `number`) => `number`

Selects a Math.* rounding function based on RoundingMethod union type

#### Parameters

| Name | Type |
| :------ | :------ |
| `roundingMethod` | [`RoundingMethod`](#roundingmethod) |

#### Returns

(`x`: `number`) => `number` \| (`x`: `number`) => `number` \| (`x`: `number`) => `number`

#### Defined in

[src/index.ts:148](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L148)

___

### hzToCents

▸ **hzToCents**(`targetHz`, `baseHz?`): [`Cents`](#cents)

**`Example`**

```js
hzToCents(880, 440) // -1200
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `targetHz` | `number` | `undefined` |
| `baseHz` | `number` | `A4` |

#### Returns

[`Cents`](#cents)

#### Defined in

[src/index.ts:546](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L546)

___

### hzToMidi

▸ **hzToMidi**(`hz`): [`MIDINoteNumber`](#midinotenumber)

**`Example`**

```js
hzToMidi(440) // 69
hzToMidi(880) // 81
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `hz` | `number` |

#### Returns

[`MIDINoteNumber`](#midinotenumber)

#### Defined in

[src/index.ts:556](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L556)

___

### hzToNoteName

▸ **hzToNoteName**(`hz`, `roundingMethod?`): `string`

**`Example`**

```js
hzToNoteName(260) // C
hzToNoteName(260, Math.floor) // B
hzToNoteName(263) // C
hzToNoteName(263, Math.ceil) // C♯
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `hz` | `number` | `undefined` | frequency of note in hertz |
| `roundingMethod` | [`RoundingMethod`](#roundingmethod) | `"nearest"` | whether to round up, down, or naturally |

#### Returns

`string`

#### Defined in

[src/index.ts:482](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L482)

___

### hzToNoteObject

▸ **hzToNoteObject**(`hz`): [`NoteObject`](#noteobject)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hz` | `number` | frequency of note in hertz |

#### Returns

[`NoteObject`](#noteobject)

#### Defined in

[src/index.ts:495](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L495)

___

### hzToRatio

▸ **hzToRatio**(`targetHz`, `baseHz?`): [`Ratio`](#ratio)

**`Example`**

```js
hzToRatio(880) // 2
hzToRatio(440, 880) // 0.5
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `targetHz` | `number` | `undefined` | target frequency in hertz |
| `baseHz` | `number` | `A4` | base frequency in hertz |

#### Returns

[`Ratio`](#ratio)

#### Defined in

[src/index.ts:518](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L518)

___

### hzToSemitones

▸ **hzToSemitones**(`targetHz`, `baseHz?`): [`Semitones`](#semitones)

**`Example`**

```js
hzToSemitones(880, 440) // -12
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `targetHz` | `number` | `undefined` | target frequency in hertz |
| `baseHz` | `number` | `A4` | base frequency in hertz |

#### Returns

[`Semitones`](#semitones)

#### Defined in

[src/index.ts:532](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L532)

___

### isNoteBlackOnPiano

▸ **isNoteBlackOnPiano**(`note`): `boolean`

**`Example`**

```js
isNoteBlackOnPiano("Cb4") // false
isNoteBlackOnPiano("A♯3") // true
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `note` | `string` |

#### Returns

`boolean`

#### Defined in

[src/index.ts:382](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L382)

___

### isNoteWhiteOnPiano

▸ **isNoteWhiteOnPiano**(`note`): `boolean`

**`Example`**

```js
isNoteWhiteOnPiano("C4") // true
isNoteWhiteOnPiano("A♯3") // false
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `note` | `string` |

#### Returns

`boolean`

#### Defined in

[src/index.ts:373](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L373)

___

### midiToCents

▸ **midiToCents**(`midi`): [`Cents`](#cents)

#### Parameters

| Name | Type |
| :------ | :------ |
| `midi` | `number` |

#### Returns

[`Cents`](#cents)

#### Defined in

[src/index.ts:455](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L455)

___

### midiToHz

▸ **midiToHz**(`midi`): [`Hz`](#hz)

#### Parameters

| Name | Type |
| :------ | :------ |
| `midi` | `number` |

#### Returns

[`Hz`](#hz)

#### Defined in

[src/index.ts:452](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L452)

___

### midiToNoteName

▸ **midiToNoteName**(`midi`, `roundingMethod?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `midi` | `number` | `undefined` |
| `roundingMethod` | [`RoundingMethod`](#roundingmethod) | `"nearest"` |

#### Returns

`string`

#### Defined in

[src/index.ts:461](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L461)

___

### midiToNoteObject

▸ **midiToNoteObject**(`midi`): [`NoteObject`](#noteobject)

#### Parameters

| Name | Type |
| :------ | :------ |
| `midi` | `number` |

#### Returns

[`NoteObject`](#noteobject)

#### Defined in

[src/index.ts:467](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L467)

___

### midiToRatio

▸ **midiToRatio**(`midi`): [`Ratio`](#ratio)

#### Parameters

| Name | Type |
| :------ | :------ |
| `midi` | `number` |

#### Returns

[`Ratio`](#ratio)

#### Defined in

[src/index.ts:458](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L458)

___

### midiToSemitones

▸ **midiToSemitones**(`midi`): [`Semitones`](#semitones)

**`Example`**

```js
midiToSemitones(69) // 0
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `midi` | `number` |

#### Returns

[`Semitones`](#semitones)

#### Defined in

[src/index.ts:449](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L449)

___

### namedNoteToCents

▸ **namedNoteToCents**(`note`): [`Cents`](#cents)

**`Example`**

```js
namedNoteToCents("C4") // -900
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `note` | `string` | note name, e.g. C4, A♯3, F♯5 |

#### Returns

[`Cents`](#cents)

#### Defined in

[src/index.ts:337](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L337)

___

### namedNoteToHz

▸ **namedNoteToHz**(`note`): [`Hz`](#hz)

**`Example`**

```js
namedNoteToHz("C4") // 261.6256
namedNoteToHz("A♯3") // 233.0819
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `note` | `string` | note name, e.g. C4, A♯3, F♯5 |

#### Returns

[`Hz`](#hz)

#### Defined in

[src/index.ts:350](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L350)

___

### namedNoteToMidi

▸ **namedNoteToMidi**(`note`): [`MIDINoteNumber`](#midinotenumber)

**`Example`**

```js
namedNoteToMidi("A4") // 69
namedNoteToMidi("C4") // 60
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `note` | `string` |

#### Returns

[`MIDINoteNumber`](#midinotenumber)

#### Defined in

[src/index.ts:363](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L363)

___

### namedNoteToRatio

▸ **namedNoteToRatio**(`note`, `baseNote?`): [`Ratio`](#ratio)

**`Example`**

```js
namedNoteToRatio("A4") // 1
namedNoteToRatio("A♯3") // 0.5
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `note` | `string` | `undefined` |
| `baseNote` | `string` | `"A4"` |

#### Returns

[`Ratio`](#ratio)

#### Defined in

[src/index.ts:326](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L326)

___

### namedNoteToSemitones

▸ **namedNoteToSemitones**(`note`): [`Semitones`](#semitones)

**`Example`**

```js
namedNoteToSemitones("C4") // +3
namedNoteToSemitones("A♯3") // -11
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `note` | `string` |

#### Returns

[`Semitones`](#semitones)

#### Defined in

[src/index.ts:308](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L308)

___

### quantizeHz

▸ **quantizeHz**(`hz`, `roundingMethod?`): [`Hz`](#hz)

**`Example`**

```js
quantizeHz(450) // 440
quantizeHz(450, "down") // 440
quantizeHz(450, "up") // ~466.17
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `hz` | `number` | `undefined` |
| `roundingMethod` | [`RoundingMethod`](#roundingmethod) | `"nearest"` |

#### Returns

[`Hz`](#hz)

#### Defined in

[src/index.ts:567](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L567)

___

### ratioToCents

▸ **ratioToCents**(`ratio`): [`Cents`](#cents)

**`Example`**

```js
ratioToCents(2) // 1200
ratioToCents(3) // 1902
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ratio` | `number` | decimal or fractional ratio |

#### Returns

[`Cents`](#cents)

#### Defined in

[src/index.ts:423](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L423)

___

### ratioToHz

▸ **ratioToHz**(`ratio`, `baseHz?`): [`Hz`](#hz)

**`Example`**

```js
ratioToHz(2) // 880
ratioToHz(3) // 1320
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `ratio` | `number` | `undefined` | decimal or fractional ratio |
| `baseHz` | `number` | `A4` | optional base note |

#### Returns

[`Hz`](#hz)

#### Defined in

[src/index.ts:407](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L407)

___

### ratioToMidi

▸ **ratioToMidi**(`ratio`): [`MIDINoteNumber`](#midinotenumber)

**`Example`**

```js
ratioToMidi(1) // 69
ratioToMidi(2) // 81
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `ratio` | `number` |

#### Returns

[`MIDINoteNumber`](#midinotenumber)

#### Defined in

[src/index.ts:436](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L436)

___

### ratioToSemitones

▸ **ratioToSemitones**(`ratio`): [`Semitones`](#semitones)

**`Example`**

```js
ratioToSemitones(2) // 12
ratioToSemitones(3) // ~19.02
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ratio` | `number` | decimal or fractional ratio |

#### Returns

[`Semitones`](#semitones)

#### Defined in

[src/index.ts:394](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L394)

___

### semitonesToCents

▸ **semitonesToCents**(`semitones`): [`Cents`](#cents)

**`Example`**

```js
semitonesToCents(-12) // -1200
semitonesToCents(0.5) // 50
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `semitones` | `number` | semitone offset |

#### Returns

[`Cents`](#cents)

#### Defined in

[src/index.ts:232](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L232)

___

### semitonesToHz

▸ **semitonesToHz**(`semitones`, `baseHz?`): [`Hz`](#hz)

**`Example`**

```js
semitonesToHz(3) // 523.2511
semitonesToHz(-3, 523.2511) // 440
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `semitones` | `number` | `undefined` | semitone offset |
| `baseHz` | `number` | `A4` | optional base note |

#### Returns

[`Hz`](#hz)

#### Defined in

[src/index.ts:217](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L217)

___

### semitonesToMidi

▸ **semitonesToMidi**(`semitones`): [`MIDINoteNumber`](#midinotenumber)

**`Example`**

```js
semitonesToMidi(0) // 69
semitonesToMidi(12) // 81
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `semitones` | `number` |

#### Returns

[`MIDINoteNumber`](#midinotenumber)

#### Defined in

[src/index.ts:257](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L257)

___

### semitonesToRatio

▸ **semitonesToRatio**(`semitones`): [`Ratio`](#ratio)

**`Example`**

```js
semitonesToRatio(12) // 2
semitonesToRatio(-12) // 0.5
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `semitones` | `number` | semitone offset |

#### Returns

[`Ratio`](#ratio)

#### Defined in

[src/index.ts:244](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L244)

# Classes


<a name="classespitchmd"></a>

## Pitch

**`Example`**

```js
const note = new Pitch(440)
note.noteObject.note // "A4"
note.modRatio(3/1)
note.noteObject.note // "E6"
```

### Constructors

#### constructor

• **new Pitch**(`frequency?`)

##### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `frequency` | `number` | `A4` | frequency of note in hertz |

##### Defined in

[src/index.ts:589](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L589)

### Properties

#### detune

• **detune**: (`cents`: `number`) => [`Pitch`](#classespitchmd)

##### Type declaration

▸ (`cents`): [`Pitch`](#classespitchmd)

###### Parameters

| Name | Type |
| :------ | :------ |
| `cents` | `number` |

###### Returns

[`Pitch`](#classespitchmd)

##### Defined in

[src/index.ts:654](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L654)

___

#### frequency

• **frequency**: `number` = `A4`

frequency of note in hertz

##### Defined in

[src/index.ts:591](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L591)

___

#### hz

• **hz**: `number`

base value for calculations

##### Defined in

[src/index.ts:588](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L588)

___

#### transpose

• **transpose**: (`semitones`: `number`) => [`Pitch`](#classespitchmd)

##### Type declaration

▸ (`semitones`): [`Pitch`](#classespitchmd)

###### Parameters

| Name | Type |
| :------ | :------ |
| `semitones` | `number` |

###### Returns

[`Pitch`](#classespitchmd)

##### Defined in

[src/index.ts:643](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L643)

### Accessors

#### cents

• `get` **cents**(): `number`

##### Returns

`number`

##### Defined in

[src/index.ts:610](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L610)

___

#### closestNoteAbove

• `get` **closestNoteAbove**(): [`NoteObject`](#noteobject)

##### Returns

[`NoteObject`](#noteobject)

##### Defined in

[src/index.ts:628](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L628)

___

#### closestNoteBelow

• `get` **closestNoteBelow**(): [`NoteObject`](#noteobject)

##### Returns

[`NoteObject`](#noteobject)

##### Defined in

[src/index.ts:623](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L623)

___

#### midi

• `get` **midi**(): `number`

##### Returns

`number`

##### Defined in

[src/index.ts:616](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L616)

___

#### noteObject

• `get` **noteObject**(): [`NoteObject`](#noteobject)

##### Returns

[`NoteObject`](#noteobject)

##### Defined in

[src/index.ts:620](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L620)

___

#### ratio

• `get` **ratio**(): `number`

##### Returns

`number`

##### Defined in

[src/index.ts:613](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L613)

___

#### semitones

• `get` **semitones**(): `number`

##### Returns

`number`

##### Defined in

[src/index.ts:607](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L607)

### Methods

#### addCents

▸ **addCents**(`cents`): [`Pitch`](#classespitchmd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `cents` | `number` |

##### Returns

[`Pitch`](#classespitchmd)

##### Defined in

[src/index.ts:650](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L650)

___

#### addSemitones

▸ **addSemitones**(`semitones`): [`Pitch`](#classespitchmd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `semitones` | `number` |

##### Returns

[`Pitch`](#classespitchmd)

##### Defined in

[src/index.ts:639](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L639)

___

#### modRatio

▸ **modRatio**(`ratio`): [`Pitch`](#classespitchmd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `ratio` | `number` |

##### Returns

[`Pitch`](#classespitchmd)

##### Defined in

[src/index.ts:656](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L656)

___

#### quantize

▸ **quantize**(`roundingMethod?`): [`Pitch`](#classespitchmd)

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `roundingMethod` | [`RoundingMethod`](#roundingmethod) | `"nearest"` |

##### Returns

[`Pitch`](#classespitchmd)

##### Defined in

[src/index.ts:634](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L634)

___

#### shift

▸ **shift**(`hz`): [`Pitch`](#classespitchmd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `hz` | `number` |

##### Returns

[`Pitch`](#classespitchmd)

##### Defined in

[src/index.ts:645](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L645)

___

#### fromNamedNote

▸ `Static` **fromNamedNote**(`note`): [`Pitch`](#classespitchmd)

initialize from NamedNote

**`Example`**

```js
Pitch.fromNamedNote("A3").hz // 220
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `note` | `string` |

##### Returns

[`Pitch`](#classespitchmd)

##### Defined in

[src/index.ts:601](https://github.com/danielgamage/pitch-utils/blob/eee4ba6/src/index.ts#L601)
