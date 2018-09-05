import packageJSON from "../../package.json";
import matchTest from "test/helper-match-test";

matchTest(
  packageJSON.name,
  require("./input"),
  require("./expected"),
  require("./transform").default
);
