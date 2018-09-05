import fs from "fs";
import path from "path";
import packageJSON from "../../package.json";
import matchTest from "test/helper-match-test";

const tests = fs.readdirSync(__dirname);

tests.forEach(test => {
  if (test[0] === "." || path.extname(test).length > 0) {
    return;
  }

  matchTest(
    `${packageJSON.name}: ${test}`,
    require(path.resolve(__dirname, test, "input")),
    require(path.resolve(__dirname, test, "expected")),
    require("./transform").default
  );
});
