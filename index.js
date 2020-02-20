module.exports = function mimimize(text) {
  text.replace(/a|e|o|u/g, "i").replace(/A|I|O|U/g, "I");
};
