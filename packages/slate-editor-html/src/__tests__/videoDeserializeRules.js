// @flow
/** @jsx h */

import Html from "slate-html-serializer";
import h from "slate-hyperscript";
import videoRules from "../videoRules";

test("test normal video deserialize with source", () => {
  const html = new Html({
    rules: [videoRules("youtube")]
  });

  expect(html.deserialize(`<iframe src="https://test.png" />`).toJSON()).toEqual(
    (
      <value>
        <document>
          <block
            type="video"
            isVoid
            data={{src: "https://test.png/"}}/>
        </document>
      </value>
    ).toJSON()
  );
});


test("test normal video deserialize with styles", () => {
  const html = new Html({
    rules: [videoRules()]
  });

  expect(html.deserialize(`<img src="https://test.png" style="width: 300px; height: 300px; margin-left: 3em;"/>`).toJSON()).toEqual(
    (
      <value>
        <document>
          <block
            type="video"
            isVoid
            data={{
              src: "https://test.png/",
              width: "300px",
              height: "300px",
              indent: "3em"
            }}/>
        </document>
      </value>
    ).toJSON()
  );
});
