# Prettierrc Config Generator

Generate custom `.prettierrc` configuration files with in seconds interface. Simplify your code formatting setup with a variety of customizable options for tabs, quotes, semicolons, and more. Perfect for developers who want to streamline their Prettier setup without the hassle of manually editing configuration files.

![Prettierrc Generator Screenshot](./public/Images/prettierrcGenerator.png)

## Installation
1. **Clone the repository:**

   ```bash
   git clone https://github.com/Ismail-047/PrettierrcGenerator.git
   cd .\PrettierrcGenerator\  
2. **Install & Run**

   ```bash
   npm install
   npm run dev
   ```

## Live Demo

The Prettierrc Generator project is deployed and available online. You can access the live version here:
[Prettierrc Generator - Live Demo](https://prettierrcgenerator.netlify.app/)

## Features

- **Tabs:** Choose between tabs or spaces for indentation.
- **Semicolons:** Toggle semicolon usage at the end of statements.
- **Quotes:** Select between single or double quotes for strings.
- **Bracket Spacing:** Option to include or exclude spaces between brackets in object literals.
- **JSX Brackets:** Control the placement of JSX closing brackets in multi-line elements.
- **Insert Pragma:** Automatically insert a special `@format` marker at the top of files formatted with Prettier.
- **Require Pragma:** Format only files that contain a special `@format` marker at the top.
- **Tab Width:** Specify the number of spaces per indentation level.
- **Print Width:** Set the maximum line length before wrapping.
- **Range Start & End:** Format only specific segments of a file by character offset.
- **Trailing Commas:** Define the use of trailing commas in multi-line lists.
- **Prose Wrap:** Control the wrapping of markdown text.
- **Arrow Function Parentheses:** Decide if parentheses should be included around a sole arrow function parameter.
