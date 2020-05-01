declare namespace untable {
	export interface Options {
		/**
		The separator between table items.
		@default ":"
		*/
		separator?: string

		/**
		Allow parsing values as numbers.
		@default false
		*/
		allowNumbers?: boolean

		/**
		Allow parsing values as arrays. Matches strings with commas and strings surrounded by `[]` or `{}`.
		@default false
		*/
		allowArrays?: boolean

		/**
		Allow parsing values these values as booleans:
		```
		'y', 'yes', 'true', true, 'n', 'no', 'false', false, 'on', 'off'
		```
		@default false
		*/
		allowBooleans?: boolean
	}
}

/**
Create an object from a string table of keys and values.
@param input The input string table to parse.
@example
```
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
*\/
```
*/
declare function untable(input: string, options?: untable.Options): Record<string, unknown>

export = untable
