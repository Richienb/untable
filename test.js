const test = require("ava")
const untable = require(".")

test("main", t => {
	t.deepEqual(untable(`
Availability                : 3
Caption                     : Internal Battery
Chemistry                   : 6
PowerManagementCapabilities : {1}
PowerManagementSupported    : False
`, { allowNumbers: true, allowBooleans: true, allowArrays: true }), {
		Availability: 3,
		Caption: "Internal Battery",
		Chemistry: 6,
		PowerManagementCapabilities: [1],
		PowerManagementSupported: false
	})
})
