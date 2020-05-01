# untable [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/untable/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/untable)

Create an object from a string table of keys and values. 

[![NPM Badge](https://nodei.co/npm/untable.png)](https://npmjs.com/package/untable)

## Install

```sh
npm install untable
```

## Usage

```js
const untable = require("untable");

untable(`
Availability                : 3
Caption                     : Internal Battery
Chemistry                   : 6
PowerManagementCapabilities : {1}
PowerManagementSupported    : False
`, { allowNumbers: true, allowBooleans: true, allowArrays: true });
/*
{
	Availability: 3,
	Caption: "Internal Battery",
	Chemistry: 6,
	PowerManagementCapabilities: [ 1 ],
	PowerManagementSupported: false
}
*/
```

## API

### untable(input, options?)

#### input

Type: `string`

The input string table to parse.

#### options

Type: `object`

##### separator

Type: `string`\
Default: `:`

The separator between table items.

##### allowNumbers

Type: `boolean`\
Default: `false`

Allow parsing values as numbers.

##### allowArrays

Type: `boolean`\
Default: `false`

Allow parsing values as arrays. Matches strings with commas and strings surrounded by `[]` or `{}`.

##### allowBooleans

Type: `boolean`\
Default: `false`

Allow parsing values these values as booleans:

```js
"y", "yes", "true", true, "n", "no", "false", false, "on", "off"
```
