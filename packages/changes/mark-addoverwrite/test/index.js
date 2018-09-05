import fs from "fs";
import path from "path";
import packageJSON from "../package.json";
import matchTest from "../../../test/match-test";

const tests = fs.readdirSync(__dirname);

tests.forEach(test => {
  if (test[0] === "." || path.extname(test).length > 0) {
    return;
  }

  matchTest(
    `${packageJSON.name}: ${test}`,
    path.resolve(__dirname, test, "input.yaml"),
    path.resolve(__dirname, test, "expected.yaml"),
    path.resolve(__dirname, test, "transform.js")
  );
});
