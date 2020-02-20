var mimimize = require("./index.js");

var testSuite = {
  One: "Ini",
  day: "diy",
  I: "I",
  "One day I'll mimimize the world": "Ini diy I'll mimimizi thi wirld",
  "This 123 is number 123 stuff 912": "This 123 is nimbir 123 stiff 912"
};

test("Mimimizes", () => {
  for (var k in testSuite) {
    if (testSuite.hasOwnProperty(k)) {
      expect(mimimize(k)).toEqual(testSuite[k]);
    }
  }
});
