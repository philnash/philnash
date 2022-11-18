import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

import chalk from "chalk";
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

const data = [
  chalk.white.bold("     Home page: ") + chalk.blue("https://philna.sh"),
  "",
  chalk.white.bold("       Twitter: ") +
    chalk.grey("https://twitter.com/") +
    chalk.cyan(handle),
  chalk.white.bold("      Mastodon: ") +
    chalk.grey("https://mastodon.social/") +
    chalk.magenta(`@${handle}`),
  chalk.white.bold("      LinkedIn: ") +
    chalk.grey("https://www.linkedin.com/in/") +
    chalk.blue(handle),
  "",
  chalk.white.bold("           DEV: ") +
    chalk.grey("https://dev.to/") +
    chalk.white(handle),
  chalk.white.bold("        Medium: ") +
    chalk.grey("https://medium.com/") +
    chalk.white(`@${handle}`),
  "",
  chalk.white.bold("        GitHub: ") +
    chalk.grey("https://github.com/") +
    chalk.white(handle),
  chalk.white.bold("      RubyGems: ") +
    chalk.grey("https://rubygems.org/profiles/") +
    chalk.red(handle),
  chalk.white.bold("           npm: ") +
    chalk.grey("https://www.npmjs.com/") +
    chalk.magenta(`~${handle}`),
  chalk.white.bold("Stack Overflow: ") +
    chalk.grey("https://stackoverflow.com/users/28376/") +
    chalk.yellow(handle),
];

const output = boxen(data.join("\n"), boxOptions);

writeFileSync(join(__dirname, "..", "dist", "output.txt"), output);
