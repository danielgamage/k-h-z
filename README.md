# k-h-z

This (ESM)  module provides a collection of functions for converting between pitch and frequency units.

## Installation
```bash
npm install k-h-z
```

## Usage
```js
import { hzToSemitones } from "k-h-z";
hzToSemitones(880, 440); // +12
```

## Conversion Overview
|                  | → hz                  | → ratio                  | → semitones                  | → cents                  | → named               | → note object         |
| :--------------- | :-------------------- | :----------------------- | :--------------------------- | :----------------------- | :-------------------- | :-------------------- |
| hz&nbsp;→        | _N/A_                 | [hzToRatio](modules.md#hztoratio)        | [hzToSemitones](modules.md#hztosemitones)        | [hzToCents](modules.md#hztocents)        | [hzToNoteName](modules.md#hztonotename)  | [hzToNoteObject](modules.md#hztonoteobject)  |
| ratio&nbsp;→     | [ratioToHz](modules.md#ratiotohz)     | _N/A_                    | [ratioToSemitones](modules.md#ratiotosemitones)     | [ratioToCents](modules.md#ratiotocents)     | _Unimplemented_       | _Unimplemented_       |
| semitones&nbsp;→ | [semitonesToHz](modules.md#semitonestohz) | [semitonesToRatio](modules.md#semitonestoratio) | _N/A_                        | [semitonesToCents](modules.md#semitonestocents) | _Unimplemented_       | _Unimplemented_       |
| cents&nbsp;→     | [centsToHz](modules.md#centstohz)     | [centsToRatio](modules.md#centstoratio)     | [centsToSemitones](modules.md#centstosemitones)     | _N/A_                    | _Unimplemented_       | _Unimplemented_       |
| named&nbsp;→     | [namedNoteToHz](modules.md#namednotetohz) | [namedNoteToRatio](modules.md#namednotetoratio) | [namedNoteToSemitones](modules.md#namednotetosemitones) | [namedNoteToCents](modules.md#namednotetocents) | _N/A_                 | _N/A_                 |

## Table of contents

### Type Aliases

- [Cents](modules.md#cents)
- [Hz](modules.md#hz)
- [NoteName](modules.md#notename)
- [NoteObject](modules.md#noteobject)
- [Ratio](modules.md#ratio)
- [Semitones](modules.md#semitones)

### Variables

- [A4](modules.md#a4)
- [chromaticScale](modules.md#chromaticscale)
- [chromaticScaleFlat](modules.md#chromaticscaleflat)

### Functions

- [centsToHz](modules.md#centstohz)
- [centsToRatio](modules.md#centstoratio)
- [centsToSemitones](modules.md#centstosemitones)
- [cleanNoteName](modules.md#cleannotename)
- [formatHz](modules.md#formathz)
- [getNoteIndexInOctave](modules.md#getnoteindexinoctave)
- [hzToCents](modules.md#hztocents)
- [hzToNoteName](modules.md#hztonotename)
- [hzToNoteObject](modules.md#hztonoteobject)
- [hzToRatio](modules.md#hztoratio)
- [hzToSemitones](modules.md#hztosemitones)
- [namedNoteToCents](modules.md#namednotetocents)
- [namedNoteToHz](modules.md#namednotetohz)
- [namedNoteToRatio](modules.md#namednotetoratio)
- [namedNoteToSemitones](modules.md#namednotetosemitones)
- [ratioToCents](modules.md#ratiotocents)
- [ratioToHz](modules.md#ratiotohz)
- [ratioToSemitones](modules.md#ratiotosemitones)
- [semitonesToCents](modules.md#semitonestocents)
- [semitonesToHz](modules.md#semitonestohz)
- [semitonesToRatio](modules.md#semitonestoratio)

## Type Aliases

### Cents

Ƭ **Cents**: `number`

A pitch offset in cents, e.g. `+100`, `-200`, `0`.
Supports positive and negative numbers.

#### Defined in

[src/index.ts:53](https://github.com/danielgamage/k-h-z/blob/462a1a9/src/index.ts#L53)

___

### Hz

Ƭ **Hz**: `number`

A frequency in Hz, e.g. `440`, `523.2511`, or `1600` (1.6kHz).
Supports positive numbers.

#### Defined in

[src/index.ts:59](https://github.com/danielgamage/k-h-z/blob/462a1a9/src/index.ts#L59)

___

### NoteName

Ƭ **NoteName**: `string`

A note name, e.g. `C4`, `A♯3`, `F♯5`.
Also accepts lowercase and keyboard-accessible accidentals like `bb3` and `b#3`.

#### Defined in

[src/index.ts:35](https://github.com/danielgamage/k-h-z/blob/462a1a9/src/index.ts#L35)

___

### NoteObject

Ƭ **NoteObject**: `Object`

Object with note properties for flexible formatting.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `detune` | [`Cents`](modules.md#cents) |
| `note` | [`NoteName`](modules.md#notename) |
| `octave` | `number` |

#### Defined in

[src/index.ts:64](https://github.com/danielgamage/k-h-z/blob/462a1a9/src/index.ts#L64)

___

### Ratio

Ƭ **Ratio**: `number`

A frequency ratio, e.g. `1.5`, `2`, `0.5`.
Supports positive numbers.

#### Defined in

[src/index.ts:41](https://github.com/danielgamage/k-h-z/blob/462a1a9/src/index.ts#L41)

___

### Semitones

Ƭ **Semitones**: `number`

A semitone pitch offset, e.g. `+3`, `-5`, `0`.
Supports positive and negative numbers.

#### Defined in

[src/index.ts:47](https://github.com/danielgamage/k-h-z/blob/462a1a9/src/index.ts#L47)

## Variables

### A4

• `Const` **A4**: ``440``

A4 frequency in Hz

#### Defined in

[src/index.ts:77](https://github.com/danielgamage/k-h-z/blob/462a1a9/src/index.ts#L77)

___

### chromaticScale

• `Const` **chromaticScale**: `string`[]

Normalized note names in the chromatic scale, using sharps

#### Defined in

[src/index.ts:81](https://github.com/danielgamage/k-h-z/blob/462a1a9/src/index.ts#L81)

___

### chromaticScaleFlat

• `Const` **chromaticScaleFlat**: `string`[]

Normalized note names in the chromatic scale, using flats

#### Defined in

[src/index.ts:98](https://github.com/danielgamage/k-h-z/blob/462a1a9/src/index.ts#L98)

## Functions

### centsToHz

▸ **centsToHz**(`cents`, `baseHz?`): [`Hz`](modules.md#hz)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cents` | `number` |
| `baseHz?` | `number` |

#### Returns

[`Hz`](modules.md#hz)

#### Defined in

[src/index.ts:195](https://github.com/danielgamage/k-h-z/blob/462a1a9/src/index.ts#L195)

___

### centsToRatio

▸ **centsToRatio**(`cents`): [`Ratio`](modules.md#ratio)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cents` | `number` |

#### Returns

[`Ratio`](modules.md#ratio)

#### Defined in

[src/index.ts:192](https://github.com/danielgamage/k-h-z/blob/462a1a9/src/index.ts#L192)

___

### centsToSemitones

▸ **centsToSemitones**(`cents`): [`Semitones`](modules.md#semitones)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cents` | `number` |

#### Returns

[`Semitones`](modules.md#semitones)

#### Defined in

[src/index.ts:189](https://github.com/danielgamage/k-h-z/blob/462a1a9/src/index.ts#L189)

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

[src/index.ts:135](https://github.com/danielgamage/k-h-z/blob/462a1a9/src/index.ts#L135)

___

### formatHz

▸ **formatHz**(`hz`, `precision?`): `string`

formats a number in Hz to a string with kilohertz support

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `hz` | `number` | `undefined` |
| `precision` | `number` | `2` |

#### Returns

`string`

#### Defined in

[src/index.ts:148](https://github.com/danielgamage/k-h-z/blob/462a1a9/src/index.ts#L148)

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

[src/index.ts:119](https://github.com/danielgamage/k-h-z/blob/462a1a9/src/index.ts#L119)

___

### hzToCents

▸ **hzToCents**(`targetHz`, `baseHz`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetHz` | `number` |
| `baseHz` | `number` |

#### Returns

`number`

#### Defined in

[src/index.ts:343](https://github.com/danielgamage/k-h-z/blob/462a1a9/src/index.ts#L343)

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

[src/index.ts:292](https://github.com/danielgamage/k-h-z/blob/462a1a9/src/index.ts#L292)

___

### hzToNoteObject

▸ **hzToNoteObject**(`hz`): [`NoteObject`](modules.md#noteobject)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hz` | `number` | frequency of note in hertz |

#### Returns

[`NoteObject`](modules.md#noteobject)

#### Defined in

[src/index.ts:305](https://github.com/danielgamage/k-h-z/blob/462a1a9/src/index.ts#L305)

___

### hzToRatio

▸ **hzToRatio**(`targetHz`, `baseHz?`): [`Ratio`](modules.md#ratio)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `targetHz` | `number` | `undefined` | target frequency in hertz |
| `baseHz` | `number` | `A4` | base frequency in hertz |

#### Returns

[`Ratio`](modules.md#ratio)

#### Defined in

[src/index.ts:320](https://github.com/danielgamage/k-h-z/blob/462a1a9/src/index.ts#L320)

___

### hzToSemitones

▸ **hzToSemitones**(`targetHz`, `baseHz?`): [`Semitones`](modules.md#semitones)

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

[`Semitones`](modules.md#semitones)

#### Defined in

[src/index.ts:334](https://github.com/danielgamage/k-h-z/blob/462a1a9/src/index.ts#L334)

___

### namedNoteToCents

▸ **namedNoteToCents**(`note`): [`Cents`](modules.md#cents)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `note` | `string` | note name, e.g. C4, A♯3, F♯5 |

#### Returns

[`Cents`](modules.md#cents)

#### Defined in

[src/index.ts:229](https://github.com/danielgamage/k-h-z/blob/462a1a9/src/index.ts#L229)

___

### namedNoteToHz

▸ **namedNoteToHz**(`note`): [`Hz`](modules.md#hz)

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

[`Hz`](modules.md#hz)

#### Defined in

[src/index.ts:242](https://github.com/danielgamage/k-h-z/blob/462a1a9/src/index.ts#L242)

___

### namedNoteToRatio

▸ **namedNoteToRatio**(`note`, `baseNote?`): [`Ratio`](modules.md#ratio)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `note` | `string` | `undefined` |
| `baseNote` | `string` | `"A4"` |

#### Returns

[`Ratio`](modules.md#ratio)

#### Defined in

[src/index.ts:223](https://github.com/danielgamage/k-h-z/blob/462a1a9/src/index.ts#L223)

___

### namedNoteToSemitones

▸ **namedNoteToSemitones**(`note`): [`Semitones`](modules.md#semitones)

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

[`Semitones`](modules.md#semitones)

#### Defined in

[src/index.ts:209](https://github.com/danielgamage/k-h-z/blob/462a1a9/src/index.ts#L209)

___

### ratioToCents

▸ **ratioToCents**(`ratio`): [`Cents`](modules.md#cents)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ratio` | `number` | decimal or fractional ratio |

#### Returns

[`Cents`](modules.md#cents)

#### Defined in

[src/index.ts:274](https://github.com/danielgamage/k-h-z/blob/462a1a9/src/index.ts#L274)

___

### ratioToHz

▸ **ratioToHz**(`ratio`, `baseHz?`): [`Hz`](modules.md#hz)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ratio` | `number` | decimal or fractional ratio |
| `baseHz?` | `number` | optional base note |

#### Returns

[`Hz`](modules.md#hz)

#### Defined in

[src/index.ts:265](https://github.com/danielgamage/k-h-z/blob/462a1a9/src/index.ts#L265)

___

### ratioToSemitones

▸ **ratioToSemitones**(`ratio`): [`Semitones`](modules.md#semitones)

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

[`Semitones`](modules.md#semitones)

#### Defined in

[src/index.ts:258](https://github.com/danielgamage/k-h-z/blob/462a1a9/src/index.ts#L258)

___

### semitonesToCents

▸ **semitonesToCents**(`semitones`): [`Cents`](modules.md#cents)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `semitones` | `number` | semitone offset |

#### Returns

[`Cents`](modules.md#cents)

#### Defined in

[src/index.ts:173](https://github.com/danielgamage/k-h-z/blob/462a1a9/src/index.ts#L173)

___

### semitonesToHz

▸ **semitonesToHz**(`semitones`, `baseHz?`): [`Hz`](modules.md#hz)

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

[`Hz`](modules.md#hz)

#### Defined in

[src/index.ts:164](https://github.com/danielgamage/k-h-z/blob/462a1a9/src/index.ts#L164)

___

### semitonesToRatio

▸ **semitonesToRatio**(`semitones`): [`Ratio`](modules.md#ratio)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `semitones` | `number` | semitone offset |

#### Returns

[`Ratio`](modules.md#ratio)

#### Defined in

[src/index.ts:179](https://github.com/danielgamage/k-h-z/blob/462a1a9/src/index.ts#L179)
