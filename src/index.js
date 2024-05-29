import prompt from "prompt";

import mainPrompt from "./prompts_schema/prompt_main.js";
import createQrCode from "./services/qr_code/create.js";
import createPassword from "./services/password/create.js";

async function main() {
  prompt.get(mainPrompt, async (err, choice) => {

    if (err) console.log(err)

    if (choice.select == 1) await createQrCode();
    if (choice.select == 2) await createPassword();
  });

  prompt.start();
}

main();
