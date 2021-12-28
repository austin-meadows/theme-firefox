import { minify } from "csso";
import fs from "fs";
import ini from "ini";

//// Config
const inputFile = "src/theme.css";
const outputFile = "build/userChrome.css";
// (may work for macOS)
const ffPath = `${process.env.APPDATA}/Mozilla/Firefox`;

//// CSS File Creation
const input = fs.readFileSync(inputFile, "utf8");
const output = minify(input, {
  filename: inputFile,
});

fs.writeFileSync(outputFile, output.css);
console.log(`File written to ${outputFile}`);

//// Copies built file to Firefox profile
// comment this out if you don't want this step
const {
  Profile0: { Path: ffProfilePath },
} = ini.parse(fs.readFileSync(`${ffPath}/profiles.ini`, "utf-8"));
fs.mkdirSync(`${ffPath}/${ffProfilePath}/chrome/`, { recursive: true });
fs.copyFileSync(outputFile, `${ffPath}/${ffProfilePath}/chrome/userChrome.css`);
console.log(`File written to ${ffProfilePath}`);
