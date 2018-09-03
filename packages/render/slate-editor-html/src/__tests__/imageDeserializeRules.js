// @flow
/** @jsx h */

import Html from "slate-html-serializer";
import h from "slate-hyperscript";
import imageRules from "../imageRules";

test("test normal image deserialize with source", () => {
  const html = new Html({
    rules: [imageRules()]
  });

  expect(html.deserialize(`<img src="https://test.png" />`).toJSON()).toEqual(
    (
      <value>
        <document>
          <block type="image" isVoid data={{ src: "https://test.png/" }} />
        </document>
      </value>
    ).toJSON()
  );
});

test("test normal image deserialize with styles", () => {
  const html = new Html({
    rules: [imageRules()]
  });

  expect(
    html
      .deserialize(
        `<img src="https://test.png" style="width: 300px; height: 300px; margin-left: 3em;"/>`
      )
      .toJSON()
  ).toEqual(
    (
      <value>
        <document>
          <block
            type="image"
            isVoid
            data={{
              src: "https://test.png/",
              width: "300px",
              height: "300px",
              indent: "3em"
            }}
          />
        </document>
      </value>
    ).toJSON()
  );
});
