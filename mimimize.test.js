var mimimize = require("./mimimize");

var testSuite = {
	One: "Ini",
	day: "diy",
	I: "I",
	"One day I'll mimimize the world": "Ini diy I'll mimimizi thi wirld"
};
test("Mimimizes", () => {
	for (var k in testSuite) {
		if (testSuite.hasOwnProperty(k)) {
			expect(mimimize(k)).toEqual(testSuite[k]);
		}
	}
});
