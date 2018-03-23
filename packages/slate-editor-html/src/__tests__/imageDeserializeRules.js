// @flow
/** @jsx h */

import Html from "slate-html-serializer";
import h from "slate-hyperscript";
import imageRules from "../imageRules";

test("test normal block deserialize", () => {
  const html = new Html({
    rules: [imageRules()]
  });

  expect(html.deserialize("<p>this is data</p>").toJSON()).toEqual(
    (
      <value>
        <document>
          <block type="paragraph">this is data</block>
        </document>
      </value>
    ).toJSON()
  );
});
