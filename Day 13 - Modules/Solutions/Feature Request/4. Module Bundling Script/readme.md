To bundle multiple JavaScript files into a single file using Parcel, follow these steps:

### Step 1: Set Up Your Project

1. **Initialize a New Node.js Project (if you haven't already):**

   Open your terminal and run:

   ```bash
   npm init -y
   ```

   This will create a `package.json` file in your project directory.

2. **Install Parcel:**

   Run the following command to install Parcel as a development dependency:

   ```bash
   npm install --save-dev parcel
   ```

### Step 2: Create Your JavaScript Files

1. **Create the Source Directory and Files:**

   Create a directory named `src` and add your JavaScript files. For example:

   - **`src/index.js`**

     ```javascript
     // src/index.js

     import { greet } from "./greet.js";

     console.log(greet("World"));
     ```

   - **`src/greet.js`**

     ```javascript
     // src/greet.js

     export function greet(name) {
       return `Hello, ${name}!`;
     }
     ```

### Step 3: Add an HTML File

2. **Create an HTML File to Include the JavaScript Bundle:**

   Create a file named `index.html` in the root of your project:

   ```html
   <!-- index.html -->
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Parcel Example</title>
     </head>
     <body>
       <script src="./src/index.js"></script>
     </body>
   </html>
   ```

### Step 4: Configure and Build

1. **Add a Build Script to `package.json`:**

   Open your `package.json` file and add a `build` script:

   ```json
   {
     "scripts": {
       "start": "parcel index.html",
       "build": "parcel build index.html"
     }
   }
   ```

   - `parcel build` will bundle your files for production and output them to the `dist` directory.
   - `parcel start` will start a development server and serve your files with live reloading.

2. **Run the Build Script:**

   To build your project and bundle the files, run:

   ```bash
   npm run build
   ```

   To start a development server and see your project in action, run:

   ```bash
   npm start
   ```

### Step 5: View the Output

- **After running the build script**, you should find the bundled files in the `dist` directory.

- **To test the development server**, open your browser and navigate to `http://localhost:1234` (or whatever port Parcel indicates in the terminal).

### Explanation

- **Parcel Configuration:** Parcel does not require a configuration file by default. It automatically handles module bundling based on your project structure.

- **JavaScript Files:** `index.js` imports the `greet` function from `greet.js`, and Parcel bundles these files together.

- **HTML File:** Includes the bundled JavaScript file and serves as the entry point for Parcel.

- **Build Script:** Uses Parcel to bundle files for production, outputting to the `dist` directory.

This setup demonstrates how to use Parcel to bundle multiple JavaScript files into a single file and optionally serve them using a development server. If you have further questions or need additional help, feel free to ask!

## References

-[Parcel](https://parceljs.org/docs/)
