import chalk from "chalk";
import permittedCharacters from "./utils/permitted_characters.js";

async function handle() {
  let characters = [];
  let password = "";

  const passwordLength = process.env.PASSWORD_LENGTH;
  characters = await permittedCharacters();

  // Validação: se characters estiver vazio, retorna um erro
  if (characters.length === 0) {
    console.error(
      chalk.red.italic("Nenhum tipo de caractere permitido definido.")
    );
    return;
  }

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }

  return password;
}

export default handle;
