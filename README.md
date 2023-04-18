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

## Table of contents

### Type Aliases

- [Cents](#cents)
- [Hz](#hz)
- [NoteName](#notename)
- [NoteObject](#noteobject)
- [Octave](#octave)
- [Ratio](#ratio)
- [Semitones](#semitones)

### Variables

- [A4](#a4)
- [chromaticScale](#chromaticscale)
- [chromaticScaleFlat](#chromaticscaleflat)

### Functions

- [centsToHz](#centstohz)
- [centsToRatio](#centstoratio)
- [centsToSemitones](#centstosemitones)
- [cleanNoteName](#cleannotename)
- [formatHz](#formathz)
- [getNoteIndexInOctave](#getnoteindexinoctave)
- [hzToCents](#hztocents)
- [hzToNoteName](#hztonotename)
- [hzToNoteObject](#hztonoteobject)
- [hzToRatio](#hztoratio)
- [hzToSemitones](#hztosemitones)
- [namedNoteToCents](#namednotetocents)
- [namedNoteToHz](#namednotetohz)
- [namedNoteToRatio](#namednotetoratio)
- [namedNoteToSemitones](#namednotetosemitones)
- [ratioToCents](#ratiotocents)
- [ratioToHz](#ratiotohz)
- [ratioToSemitones](#ratiotosemitones)
- [semitonesToCents](#semitonestocents)
- [semitonesToHz](#semitonestohz)
- [semitonesToRatio](#semitonestoratio)

## Type Aliases

### Cents

Ƭ **Cents**: `number`

A granular pitch offset unit, e.g. `+100`, `-200`, `0`.
Supports positive and negative numbers.

#### Defined in

[src/index.ts:53](https://github.com/danielgamage/pitch-utils/blob/5f55005/src/index.ts#L53)

___

### Hz

Ƭ **Hz**: `number`

A frequency unit reflecting the number of cycles per second, e.g. `440`, `523.2511`, or `1600` (1.6kHz).
Supports positive numbers.

#### Defined in

[src/index.ts:59](https://github.com/danielgamage/pitch-utils/blob/5f55005/src/index.ts#L59)

___

### NoteName

Ƭ **NoteName**: `string`

A note name with its octave, e.g. `C4`, `A♯3`, `F♯5`.
Also accepts lowercase and keyboard-accessible accidentals like `bb3` and `b#3`.

#### Defined in

[src/index.ts:35](https://github.com/danielgamage/pitch-utils/blob/5f55005/src/index.ts#L35)

___

### NoteObject

Ƭ **NoteObject**: `Object`

Object with note properties for flexible formatting.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `detune` | [`Cents`](#cents) |
| `note` | [`NoteName`](#notename) |
| `octave` | [`Octave`](#octave) |

#### Defined in

[src/index.ts:69](https://github.com/danielgamage/pitch-utils/blob/5f55005/src/index.ts#L69)

___

### Octave

Ƭ **Octave**: `number`

Integer pitch grouping, e.g. `-1`, `4`, `10`.

#### Defined in

[src/index.ts:64](https://github.com/danielgamage/pitch-utils/blob/5f55005/src/index.ts#L64)

___

### Ratio

Ƭ **Ratio**: `number`

A frequency ratio, e.g. `1.5`, `2`, `0.5`.
Supports positive numbers.

#### Defined in

[src/index.ts:41](https://github.com/danielgamage/pitch-utils/blob/5f55005/src/index.ts#L41)

___

### Semitones

Ƭ **Semitones**: `number`

A semitone pitch offset, e.g. `+3`, `-5`, `0`.
Supports positive and negative numbers.

#### Defined in

[src/index.ts:47](https://github.com/danielgamage/pitch-utils/blob/5f55005/src/index.ts#L47)

## Variables

### A4

• `Const` **A4**: ``440``

A4 frequency in Hz

#### Defined in

[src/index.ts:82](https://github.com/danielgamage/pitch-utils/blob/5f55005/src/index.ts#L82)

___

### chromaticScale

• `Const` **chromaticScale**: `string`[]

Normalized note names in the chromatic scale, using sharps

#### Defined in

[src/index.ts:86](https://github.com/danielgamage/pitch-utils/blob/5f55005/src/index.ts#L86)

___

### chromaticScaleFlat

• `Const` **chromaticScaleFlat**: `string`[]

Normalized note names in the chromatic scale, using flats

#### Defined in

[src/index.ts:103](https://github.com/danielgamage/pitch-utils/blob/5f55005/src/index.ts#L103)

## Functions

### centsToHz

▸ **centsToHz**(`cents`, `baseHz?`): [`Hz`](#hz)

**`Example`**

```js
centsToHz(1200) // 880
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `cents` | `number` |
| `baseHz?` | `number` |

#### Returns

[`Hz`](#hz)

#### Defined in

[src/index.ts:231](https://github.com/danielgamage/pitch-utils/blob/5f55005/src/index.ts#L231)

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

[src/index.ts:223](https://github.com/danielgamage/pitch-utils/blob/5f55005/src/index.ts#L223)

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

[src/index.ts:215](https://github.com/danielgamage/pitch-utils/blob/5f55005/src/index.ts#L215)

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

[src/index.ts:140](https://github.com/danielgamage/pitch-utils/blob/5f55005/src/index.ts#L140)

___

### formatHz

▸ **formatHz**(`hz`, `precision?`): `string`

formats a number in Hz to a string with kilohertz support

**`Example`**

```js
formatHz(232.5) // "232.50Hz"
formatHz(2325) // "2.33kHz"
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `hz` | `number` | `undefined` |
| `precision` | `number` | `2` |

#### Returns

`string`

#### Defined in

[src/index.ts:157](https://github.com/danielgamage/pitch-utils/blob/5f55005/src/index.ts#L157)

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

[src/index.ts:124](https://github.com/danielgamage/pitch-utils/blob/5f55005/src/index.ts#L124)

___

### hzToCents

▸ **hzToCents**(`targetHz`, `baseHz`): [`Cents`](#cents)

**`Example`**

```js
hzToCents(880, 440) // -1200
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetHz` | `number` |
| `baseHz` | `number` |

#### Returns

[`Cents`](#cents)

#### Defined in

[src/index.ts:415](https://github.com/danielgamage/pitch-utils/blob/5f55005/src/index.ts#L415)

___

### hzToNoteName

▸ **hzToNoteName**(`hz`, `rounding?`): `string`

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
| `rounding` | (`x`: `number`) => `number` \| (`x`: `number`) => `number` \| (`x`: `number`) => `number` | `Math.round` | whether to round up, down, or naturally |

#### Returns

`string`

#### Defined in

[src/index.ts:352](https://github.com/danielgamage/pitch-utils/blob/5f55005/src/index.ts#L352)

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

[src/index.ts:365](https://github.com/danielgamage/pitch-utils/blob/5f55005/src/index.ts#L365)

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

[src/index.ts:387](https://github.com/danielgamage/pitch-utils/blob/5f55005/src/index.ts#L387)

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

[src/index.ts:401](https://github.com/danielgamage/pitch-utils/blob/5f55005/src/index.ts#L401)

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

[src/index.ts:276](https://github.com/danielgamage/pitch-utils/blob/5f55005/src/index.ts#L276)

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

[src/index.ts:289](https://github.com/danielgamage/pitch-utils/blob/5f55005/src/index.ts#L289)

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

[src/index.ts:265](https://github.com/danielgamage/pitch-utils/blob/5f55005/src/index.ts#L265)

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

[src/index.ts:245](https://github.com/danielgamage/pitch-utils/blob/5f55005/src/index.ts#L245)

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

[src/index.ts:334](https://github.com/danielgamage/pitch-utils/blob/5f55005/src/index.ts#L334)

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

[src/index.ts:318](https://github.com/danielgamage/pitch-utils/blob/5f55005/src/index.ts#L318)

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

[src/index.ts:305](https://github.com/danielgamage/pitch-utils/blob/5f55005/src/index.ts#L305)

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

[src/index.ts:188](https://github.com/danielgamage/pitch-utils/blob/5f55005/src/index.ts#L188)

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

[src/index.ts:173](https://github.com/danielgamage/pitch-utils/blob/5f55005/src/index.ts#L173)

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

[src/index.ts:200](https://github.com/danielgamage/pitch-utils/blob/5f55005/src/index.ts#L200)
