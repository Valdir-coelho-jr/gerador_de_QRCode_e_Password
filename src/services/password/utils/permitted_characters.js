async function permittedCharacters() {
  let permitted = [];

  if (JSON.parse(process.env.UPPERCASE_LETTERS)) {
    permitted.push(..."ABCDEFGHIJKLMNOPKRSTUVXWYZ");
  }

  if (JSON.parse(process.env.LLOWERCASE_LETTERS)) {
    permitted.push(..."abcdefghijklmnopqrstuvxwyz");
  }
  if (JSON.parse(process.env.NUMBERS)) {
    permitted.push(..."0123456789");
  }
  if (JSON.parse(process.env.SPECIAL_CHARACTERS)) {
    permitted.push(..."!@#$%&*()_-");
  }

  return permitted;
}

export default permittedCharacters