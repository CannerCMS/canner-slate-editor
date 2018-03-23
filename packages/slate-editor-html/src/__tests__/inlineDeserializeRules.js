// @flow
/** @jsx h */

import Html from "slate-html-serializer";
import h from "slate-hyperscript";
import inlineRules from "../inlineRules";

test("test link deserialize", () => {
  const html = new Html({
    rules: [inlineRules('a', 'link')]
  });

  expect(html.deserialize(`<a href="https://test.com">Test</a>`).toJSON()).toEqual(
    (
      <value>
        <document>
          <block type="paragraph">
            <inline
              type="link"
              data={{
                href: "https://test.com/"
              }}>
              Test
            </inline>
          </block>
        </document>
      </value>
    ).toJSON()
  );
});
