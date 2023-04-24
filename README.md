<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [pitch-utils](#pitch-utils)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Conversion Overview](#conversion-overview)
  - [Type Aliases](#type-aliases)
    - [Cents](#cents)
    - [Hz](#hz)
    - [NoteName](#notename)
    - [NoteObject](#noteobject)
    - [Octave](#octave)
    - [Ratio](#ratio)
    - [RoundingMethod](#roundingmethod)
    - [Semitones](#semitones)
  - [Variables](#variables)
    - [A4](#a4)
    - [chromaticScale](#chromaticscale)
    - [enharmonicChromaticScale](#enharmonicchromaticscale)
  - [Functions](#functions)
    - [centsToHz](#centstohz)
    - [centsToRatio](#centstoratio)
    - [centsToSemitones](#centstosemitones)
    - [cleanNoteName](#cleannotename)
    - [formatHz](#formathz)
    - [getNoteIndexInOctave](#getnoteindexinoctave)
    - [getRoundingFunction](#getroundingfunction)
    - [hzToCents](#hztocents)
    - [hzToNoteName](#hztonotename)
    - [hzToNoteObject](#hztonoteobject)
    - [hzToRatio](#hztoratio)
    - [hzToSemitones](#hztosemitones)
    - [namedNoteToCents](#namednotetocents)
    - [namedNoteToHz](#namednotetohz)
    - [namedNoteToRatio](#namednotetoratio)
    - [namedNoteToSemitones](#namednotetosemitones)
    - [quantizeHz](#quantizehz)
    - [ratioToCents](#ratiotocents)
    - [ratioToHz](#ratiotohz)
    - [ratioToSemitones](#ratiotosemitones)
    - [semitonesToCents](#semitonestocents)
    - [semitonesToHz](#semitonestohz)
    - [semitonesToRatio](#semitonestoratio)
  - [Classes](#classes)
    - [Pitch](#pitch)

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
|                  | → hz                  | → ratio                  | → semitones                  | → cents                  | → named               | → note object          |
| :--------------- | :-------------------- | :----------------------- | :--------------------------- | :----------------------- | :-------------------- | :--------------------- |
| hz&nbsp;→        | _N/A_                 | [hzToRatio](#hztoratio)        | [hzToSemitones](#hztosemitones)        | [hzToCents](#hztocents)        | [hzToNoteName](#hztonotename)  | [hzToNoteObject](#hztonoteobject) |
| ratio&nbsp;→     | [ratioToHz](#ratiotohz)     | _N/A_                    | [ratioToSemitones](#ratiotosemitones)     | [ratioToCents](#ratiotocents)     | _Unimplemented_       | _Unimplemented_        |
| semitones&nbsp;→ | [semitonesToHz](#semitonestohz) | [semitonesToRatio](#semitonestoratio) | _N/A_                        | [semitonesToCents](#semitonestocents) | _Unimplemented_       | _Unimplemented_        |
| cents&nbsp;→     | [centsToHz](#centstohz)     | [centsToRatio](#centstoratio)     | [centsToSemitones](#centstosemitones)     | _N/A_                    | _Unimplemented_       | _Unimplemented_        |
| named&nbsp;→     | [namedNoteToHz](#namednotetohz) | [namedNoteToRatio](#namednotetoratio) | [namedNoteToSemitones](#namednotetosemitones) | [namedNoteToCents](#namednotetocents) | _N/A_                 | _Unimplemented_        |

## Type Aliases

### Cents

Ƭ **Cents**: `number`

A granular pitch offset unit, e.g. `+100`, `-200`, `0`.
Supports positive and negative numbers.

#### Defined in

[src/index.ts:53](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L53)

___

### Hz

Ƭ **Hz**: `number`

A frequency unit reflecting the number of cycles per second, e.g. `440`, `523.2511`, or `1600` (1.6kHz).
Supports positive numbers.

#### Defined in

[src/index.ts:59](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L59)

___

### NoteName

Ƭ **NoteName**: `string`

A note name with its octave, e.g. `C4`, `A♯3`, `F♯5`.
Also accepts lowercase and keyboard-accessible accidentals like `bb3` and `b#3`.

#### Defined in

[src/index.ts:35](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L35)

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

[src/index.ts:69](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L69)

___

### Octave

Ƭ **Octave**: `number`

Integer pitch grouping, e.g. `-1`, `4`, `10`.

#### Defined in

[src/index.ts:64](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L64)

___

### Ratio

Ƭ **Ratio**: `number`

A frequency ratio, e.g. `1.5`, `2`, `0.5`.
Supports positive numbers.

#### Defined in

[src/index.ts:41](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L41)

___

### RoundingMethod

Ƭ **RoundingMethod**: ``"nearest"`` \| ``"up"`` \| ``"down"``

Rounding method for converting between frequency units.

**`Todo`**

maybe eventually this can include hz rounding in addition to pitch rounding

#### Defined in

[src/index.ts:80](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L80)

___

### Semitones

Ƭ **Semitones**: `number`

A semitone pitch offset, e.g. `+3`, `-5`, `0`.
Supports positive and negative numbers.

#### Defined in

[src/index.ts:47](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L47)

## Variables

### A4

• `Const` **A4**: ``440``

A4 frequency in Hz

#### Defined in

[src/index.ts:89](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L89)

___

### chromaticScale

• `Const` **chromaticScale**: `string`[]

Normalized note names in the chromatic scale, using sharps

#### Defined in

[src/index.ts:93](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L93)

___

### enharmonicChromaticScale

• `Const` **enharmonicChromaticScale**: `string`[][]

Note names with alternate enharmonic names

#### Defined in

[src/index.ts:110](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L110)

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

[src/index.ts:260](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L260)

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

[src/index.ts:252](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L252)

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

[src/index.ts:244](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L244)

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

[src/index.ts:160](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L160)

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

[src/index.ts:179](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L179)

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

[src/index.ts:143](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L143)

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

[src/index.ts:133](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L133)

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

[src/index.ts:439](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L439)

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

[src/index.ts:378](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L378)

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

[src/index.ts:388](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L388)

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

[src/index.ts:411](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L411)

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

[src/index.ts:425](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L425)

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

[src/index.ts:302](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L302)

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

[src/index.ts:315](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L315)

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

[src/index.ts:291](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L291)

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

[src/index.ts:273](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L273)

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

[src/index.ts:450](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L450)

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

[src/index.ts:360](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L360)

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

[src/index.ts:344](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L344)

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

[src/index.ts:331](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L331)

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

[src/index.ts:217](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L217)

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

[src/index.ts:202](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L202)

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

[src/index.ts:229](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L229)


## Classes


<a name="classespitchmd"></a>

### Pitch

**`Example`**

```js
const note = new Pitch(440)
note.noteObject.note // "A4"
note.modRatio(3/1)
note.noteObject.note // "E6"
```

#### Constructors

##### constructor

• **new Pitch**(`frequency?`)

###### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `frequency` | `number` | `A4` | frequency of note in hertz |

###### Defined in

[src/index.ts:469](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L469)

#### Properties

##### detune

• **detune**: (`cents`: `number`) => [`Pitch`](#classespitchmd)

###### Type declaration

▸ (`cents`): [`Pitch`](#classespitchmd)

####### Parameters

| Name | Type |
| :------ | :------ |
| `cents` | `number` |

####### Returns

[`Pitch`](#classespitchmd)

###### Defined in

[src/index.ts:533](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L533)

___

##### frequency

• **frequency**: `number` = `A4`

frequency of note in hertz

###### Defined in

[src/index.ts:471](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L471)

___

##### hz

• **hz**: `number`

base value for calculations

###### Defined in

[src/index.ts:468](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L468)

___

##### transpose

• **transpose**: (`semitones`: `number`) => [`Pitch`](#classespitchmd)

###### Type declaration

▸ (`semitones`): [`Pitch`](#classespitchmd)

####### Parameters

| Name | Type |
| :------ | :------ |
| `semitones` | `number` |

####### Returns

[`Pitch`](#classespitchmd)

###### Defined in

[src/index.ts:522](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L522)

#### Accessors

##### cents

• `get` **cents**(): `number`

###### Returns

`number`

###### Defined in

[src/index.ts:492](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L492)

___

##### closestNoteAbove

• `get` **closestNoteAbove**(): [`NoteObject`](#noteobject)

###### Returns

[`NoteObject`](#noteobject)

###### Defined in

[src/index.ts:507](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L507)

___

##### closestNoteBelow

• `get` **closestNoteBelow**(): [`NoteObject`](#noteobject)

###### Returns

[`NoteObject`](#noteobject)

###### Defined in

[src/index.ts:502](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L502)

___

##### noteObject

• `get` **noteObject**(): [`NoteObject`](#noteobject)

###### Returns

[`NoteObject`](#noteobject)

###### Defined in

[src/index.ts:499](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L499)

___

##### ratio

• `get` **ratio**(): `number`

###### Returns

`number`

###### Defined in

[src/index.ts:495](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L495)

___

##### semitones

• `get` **semitones**(): `number`

###### Returns

`number`

###### Defined in

[src/index.ts:489](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L489)

#### Methods

##### addCents

▸ **addCents**(`cents`): [`Pitch`](#classespitchmd)

###### Parameters

| Name | Type |
| :------ | :------ |
| `cents` | `number` |

###### Returns

[`Pitch`](#classespitchmd)

###### Defined in

[src/index.ts:529](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L529)

___

##### addSemitones

▸ **addSemitones**(`semitones`): [`Pitch`](#classespitchmd)

###### Parameters

| Name | Type |
| :------ | :------ |
| `semitones` | `number` |

###### Returns

[`Pitch`](#classespitchmd)

###### Defined in

[src/index.ts:518](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L518)

___

##### modRatio

▸ **modRatio**(`ratio`): [`Pitch`](#classespitchmd)

###### Parameters

| Name | Type |
| :------ | :------ |
| `ratio` | `number` |

###### Returns

[`Pitch`](#classespitchmd)

###### Defined in

[src/index.ts:535](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L535)

___

##### quantize

▸ **quantize**(`roundingMethod?`): [`Pitch`](#classespitchmd)

###### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `roundingMethod` | [`RoundingMethod`](#roundingmethod) | `"nearest"` |

###### Returns

[`Pitch`](#classespitchmd)

###### Defined in

[src/index.ts:513](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L513)

___

##### shift

▸ **shift**(`hz`): [`Pitch`](#classespitchmd)

###### Parameters

| Name | Type |
| :------ | :------ |
| `hz` | `number` |

###### Returns

[`Pitch`](#classespitchmd)

###### Defined in

[src/index.ts:524](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L524)

___

##### fromNamedNote

▸ `Static` **fromNamedNote**(`note`): [`Pitch`](#classespitchmd)

initialize from NamedNote

**`Example`**

```js
Pitch.fromNamedNote("A3").hz // 220
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `note` | `string` |

###### Returns

[`Pitch`](#classespitchmd)

###### Defined in

[src/index.ts:481](https://github.com/danielgamage/pitch-utils/blob/73ebc94/src/index.ts#L481)

