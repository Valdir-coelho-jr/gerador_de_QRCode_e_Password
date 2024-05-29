import prompt from "prompt";
import promptQrCode from "../../prompts_schema/prompt_qrcode.js";
import handle from "./handle.js";

async function createQrCode() {
  prompt.get(promptQrCode, handle);
}

export default createQrCode;
