#!/usr/bin/env node

"use strict";

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const output = readFileSync(
  join(__dirname, "..", "dist", "output.txt"),
  "utf8"
);
console.log(output);
