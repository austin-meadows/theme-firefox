import { minify } from "csso";
import fs from "fs";

const inputFile = "src/theme.css";
const outputFile = "dist/userChrome.css";

const input = fs.readFileSync(inputFile, "utf8");
const output = minify(input, {
  filename: inputFile,
});

fs.writeFile(outputFile, output.css, () => {
  console.log("File written to dist/userChrome.css");
});
