import { Value } from "slate";
import { State } from "markup-it";
import markdown from "markup-it/lib/markdown";
import readme from "./test.md";

const mdParser = State.create(markdown);
const document = mdParser.deserializeToDocument(readme);

export default Value.create({ document });
