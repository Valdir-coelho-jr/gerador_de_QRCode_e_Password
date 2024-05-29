## QR Code and Password Generator

This repository contains a command-line project that allows you to generate QR Codes and strong passwords. The project is built with JavaScript and uses terminal libraries for an intuitive user experience.

### Key Features:

- **QR Code Generator:**
    - Allows generating QR Codes from any provided link.
    - Option to generate QR Codes in two sizes: normal and terminal.
    - Displays the generated QR Code directly in the terminal.
- **Password Generator:**
    - Generates strong passwords with a customizable length.
    - Allows choosing which types of characters will be included in the password: uppercase, lowercase, numbers, and special characters.
    - Prints the generated password to the terminal.

### Installation and Usage:

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/qr-password-generator.git
```

2. **Install the dependencies:**

```bash
cd qr-password-generator
npm install
```

3. **Configure the environment variables (optional):**

   - `PASSWORD_LENGTH`: Defines the length of the password to be generated.
   - `UPPERCASE_LETTERS`: Defines whether uppercase letters will be included in the password. (true/false)
   - `LLOWERCASE_LETTERS`: Defines whether lowercase letters will be included in the password. (true/false)
   - `NUMBERS`: Defines whether numbers will be included in the password. (true/false)
   - `SPECIAL_CHARACTERS`: Defines whether special characters will be included in the password. (true/false)

   **Example configuration in the .env file:**

   ```
   PASSWORD_LENGTH=16
   UPPERCASE_LETTERS=true
   LLOWERCASE_LETTERS=true
   NUMBERS=true
   SPECIAL_CHARACTERS=true
   ```

4. **Run the project:**

```bash
npm start
```

5. **Follow the instructions in the terminal to choose between generating a QR Code or a password.**

### Project Structure:

- **prompts_schema:**
    - **prompt_main.js:** Contains the prompts for the initial choice between generating a QR Code or a password.
    - **prompt_qrcode.js:** Contains the prompts for QR Code generation, including the size selection.
- **services:**
    - **password:**
        - **create.js:** Responsible for generating the password.
        - **handle.js:** Contains the logic for password generation and validation of allowed characters.
        - **utils/permitted_characters.js:** Defines the allowed characters for the password.
    - **qr_code:**
        - **create.js:** Responsible for generating the QR Code.
        - **handle.js:** Contains the logic for QR Code generation and display in the terminal.
- **index.js:** Main file of the project, which initializes the prompts and calls the generation functions.

### Libraries Used:

- **prompt:** Allows interaction with the user through prompts in the terminal.
- **chalk:** Adds colors to the text in the terminal, improving the user experience.
- **qrcode-terminal:** Allows generating QR Codes directly in the terminal.

### Considerations:

- The project was developed to run in command-line environments.
- The generated passwords are random and strong, but should not be used in critical security systems without additional protection measures.
- Environment variables can be configured to customize the project's behavior, such as the password length and the types of characters allowed.
