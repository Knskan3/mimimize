module.exports = function mimimize(text) {
  return text.replace(/[aeou]/g, "i").replace(/[AIOU]/g, "I");
};
