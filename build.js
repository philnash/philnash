const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

(async () => {
  let template = readFileSync(join(__dirname, "TEMPLATE.md"), "utf-8");
  const message = process.env.MESSAGE.replace(/^/gm, "> ");
  const from = process.env.FROM;
  template = template.replace("<!-- From -->", from);
  template = template.replace("<!-- Message -->", message);
  writeFileSync(join(__dirname, "README.md"), template);
})();
