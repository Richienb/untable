"use strict"

const insideString = require("inside-string")
const fromEntries = require("fromentries")
const is = require("@sindresorhus/is")

const { assert } = is

const toBoolean = input => {
	if (/^(?:y|yes|true|on)$/i.test(input)) {
		return true
	}

	if (/^(?:n|no|false|off)$/i.test(input)) {
		return false
	}
}

const convertValue = (value, options) => {
	if (options.allowNumbers && !is.nan(Number(value))) {
		return Number(value)
	}

	if (options.allowArrays && (/^[.+]$/i.test(value) || /^{.+}$/i.test(value))) {
		return value.slice(1, -1).split(",").map(value => convertValue(value, options))
	}

	if (options.allowArrays && insideString(value, ",")) {
		return value.split(",").map(value => convertValue(value, options))
	}

	if (options.allowBooleans && toBoolean(value) !== undefined) {
		return toBoolean(value)
	}

	return value
}

module.exports = (input, options) => {
	options = {
		separator: ":",
		allowNumbers: false,
		allowArrays: false,
		allowBooleans: false,
		...options
	}

	assert.string(input)
	assert.string(options.separator)
	assert.boolean(options.allowNumbers)
	assert.boolean(options.allowArrays)
	assert.boolean(options.allowBooleans)

	// TODO: Replace `fromEntries` with `Object.fromEntries` when Node.js 10 support is dropped.
	return fromEntries(input.trim().split("\n").map(line => {
		const [key, value] = line.split(options.separator)
		return [key.trim(), convertValue(value.trim(), options)]
	}))
}
