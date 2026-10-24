// Content hash of css/style.css, appended to the stylesheet URL as ?v=
// so browsers and the CDN fetch the new file whenever its content changes.
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

module.exports = function () {
  const css = fs.readFileSync(path.join(__dirname, "../../css/style.css"));
  return {
    css: crypto.createHash("sha256").update(css).digest("hex").slice(0, 10),
  };
};
