import { minify } from "csso";
import { homedir } from "os";
import fs from "fs";
import ini from "ini";

//// Config
const inputCSS = "src/theme.css";
const userJS = "src/user.js";
const outputCSS = "build/userChrome.css";

let ffPath;
if (process.platform === "win32") {
  ffPath = `${process.env.APPDATA}/Mozilla/Firefox`;
} else if (process.platform === "darwin") {
  ffPath = `${homedir()}/Library/Application Support/Firefox`;
} else {
  console.log("Building not added for this OS, update build.js");
  return;
}

//// CSS File Creation
const input = fs.readFileSync(inputCSS, "utf8");
const output = minify(input, {
  filename: inputCSS,
});

fs.writeFileSync(outputCSS, output.css);
console.log(`${inputCSS} written to ${outputCSS}`);

//// Copies built file to Firefox profile
// comment this out if you don't want this step
const {
  Profile0: { Path: ffProfilePath },
} = ini.parse(fs.readFileSync(`${ffPath}/profiles.ini`, "utf-8"));

fs.mkdirSync(`${ffPath}/${ffProfilePath}/chrome/`, { recursive: true });
fs.copyFileSync(outputCSS, `${ffPath}/${ffProfilePath}/chrome/userChrome.css`);
console.log(`${outputCSS} written to ${ffProfilePath}`);

// copies my profile as well
fs.copyFileSync(userJS, `${ffPath}/${ffProfilePath}/user.js`);
console.log(`${userJS} written to ${ffProfilePath}`);
