## Gerador de QR Code e Senhas

Este repositório contém um projeto de linha de comando que permite gerar QR Codes e senhas fortes. O projeto é construído com JavaScript e utiliza bibliotecas de terminal para uma experiência de usuário intuitiva.

### Funcionalidades Principais:

- **Gerador de QR Code:**
    - Permite gerar QR Codes a partir de qualquer link fornecido.
    - Opção de gerar QR Codes em dois tamanhos: normal e terminal.
    - Exibe o QR Code gerado diretamente no terminal.
- **Gerador de Senha:**
    - Gera senhas fortes com um comprimento personalizável.
    - Permite escolher quais tipos de caracteres serão incluídos na senha: maiúsculas, minúsculas, números e caracteres especiais.
    - Imprime a senha gerada no terminal.

### Instalação e Utilização:

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/gerador-qr-senha.git
```

2. **Instale as dependências:**

```bash
cd gerador-qr-senha
npm install
```

3. **Configure as variáveis de ambiente (opcional):**

   - `PASSWORD_LENGTH`: Define o comprimento da senha a ser gerada.
   - `UPPERCASE_LETTERS`: Define se letras maiúsculas serão incluídas na senha. (true/false)
   - `LLOWERCASE_LETTERS`: Define se letras minúsculas serão incluídas na senha. (true/false)
   - `NUMBERS`: Define se números serão incluídos na senha. (true/false)
   - `SPECIAL_CHARACTERS`: Define se caracteres especiais serão incluídos na senha. (true/false)

   **Exemplo de configuração no arquivo .env:**

   ```
   PASSWORD_LENGTH=16
   UPPERCASE_LETTERS=true
   LLOWERCASE_LETTERS=true
   NUMBERS=true
   SPECIAL_CHARACTERS=true
   ```

4. **Execute o projeto:**

```bash
npm start
```

5. **Siga as instruções no terminal para escolher entre gerar um QR Code ou uma senha.**

### Estrutura do Projeto:

- **prompts_schema:**
    - **prompt_main.js:** Contém as prompts para a escolha inicial entre gerar QR Code ou senha.
    - **prompt_qrcode.js:** Contém as prompts para a geração do QR Code, incluindo a escolha do tamanho.
- **services:**
    - **password:**
        - **create.js:** Responsável por gerar a senha.
        - **handle.js:** Contém a lógica de geração da senha e a validação dos caracteres permitidos.
        - **utils/permitted_characters.js:** Define os caracteres permitidos na senha.
    - **qr_code:**
        - **create.js:** Responsável por gerar o QR Code.
        - **handle.js:** Contém a lógica de geração do QR Code e a exibição no terminal.
- **index.js:** Arquivo principal do projeto, que inicializa as prompts e chama as funções de geração.

### Bibliotecas Utilizadas:

- **prompt:** Permite a interação com o usuário por meio de prompts no terminal.
- **chalk:** Adiciona cores ao texto no terminal, melhorando a experiência de usuário.
- **qrcode-terminal:** Permite gerar QR Codes diretamente no terminal.

### Considerações:

- O projeto foi desenvolvido para funcionar em ambientes de linha de comando.
- As senhas geradas são aleatórias e fortes, mas não devem ser utilizadas em sistemas críticos de segurança sem medidas adicionais de proteção.
- As variáveis de ambiente podem ser configuradas para personalizar o comportamento do projeto, como o comprimento da senha e os tipos de caracteres permitidos.
