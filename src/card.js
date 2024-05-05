import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { styleText } from "util"

import boxen from "boxen";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const boxOptions = {
  title: "ϟ Phil Nash ϟ",
  titleAlignment: "center",
  padding: 1,
  margin: 1,
  borderStyle: "round",
};

const handle = "philnash";

const bold = (text) => styleText("bold", text);
const white = (text) => styleText("white", text);
const gray = (text) => styleText("gray", text);
const blue = (text) => styleText("blue", text);
const cyan = (text) => styleText("cyan", text);
const magenta = (text) => styleText("magenta", text);
const red = (text) => styleText("red", text);
const yellow = (text) => styleText("yellow", text);

const data = [
  white(bold("          Work: ")) + gray("Developer Relations Engineer for ") + white("DataStax"),
  white(bold("     Home page: ")) + blue("https://philna.sh"),
  "",
  white(bold("       Twitter: ")) + gray("https://twitter.com/") + cyan(handle),
  white(bold("      Mastodon: ")) + gray("https://mastodon.social/") + magenta(`@${handle}`),
  white(bold("      LinkedIn: ")) + gray("https://www.linkedin.com/in/") + blue(handle),
  "",
  white(bold("           DEV: ")) + gray("https://dev.to/") + white(handle),
  white(bold("        Medium: ")) + gray("https://medium.com/") + white(`@${handle}`),
  "",
  white(bold("        GitHub: ")) + gray("https://github.com/") + white(handle),
  white(bold("      RubyGems: ")) + gray("https://rubygems.org/profiles/") + red(handle),
  white(bold("           npm: ")) + gray("https://www.npmjs.com/") + magenta(`~${handle}`),
  white(bold("Stack Overflow: ")) + gray("https://stackoverflow.com/users/28376/") + yellow(handle),
];

const output = boxen(data.join("\n"), boxOptions);

writeFileSync(join(__dirname, "..", "dist", "output.txt"), output);
