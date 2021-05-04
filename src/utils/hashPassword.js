// Utility function to see the hash of given plaintext password
const bcrypt = require("bcrypt");
const saltRounds = 10;

const hash = async (plainText) => {
  const hashedText = await bcrypt.hash(plainText, saltRounds);
  console.log("hashedText", hashedText);
  return hashedText;
};

hash("123456");

module.exports = hash;
