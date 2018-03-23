// @flow
/** @jsx h */

import Html from "slate-html-serializer";
import h from "slate-hyperscript";
import blockRules from "../blockRules";

test("test normal block deserialize", () => {
  const html = new Html({
    rules: [blockRules("p", "paragraph")]
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

test("test normal block with textAlign style", () => {
  const html = new Html({
    rules: [blockRules("p", "paragraph")]
  });

  expect(html.deserialize("<p style='text-align:center'>this is data</p>").toJSON()).toEqual(
    (
      <value>
        <document>
          <block
            type="paragraph"
            data={{align: 'center'}}>
            this is data
          </block>
        </document>
      </value>
    ).toJSON()
  );
});


test("test normal block with lineHeight style", () => {
  const html = new Html({
    rules: [blockRules("p", "paragraph")]
  });

  expect(html.deserialize(`<p style="line-height:2.5">this is data</p>`).toJSON()).toEqual(
    (
      <value>
        <document>
          <block
            type="paragraph"
            data={{lineHeight: "2.5"}}>
            this is data
          </block>
        </document>
      </value>
    ).toJSON()
  );
});

test("test normal block with indent style", () => {
  const html = new Html({
    rules: [blockRules("p", "paragraph")]
  });

  expect(html.deserialize(`<p style="padding-left:3em">this is data</p>`).toJSON()).toEqual(
    (
      <value>
        <document>
          <block
            type="paragraph"
            data={{indent: "3em"}}>
            this is data
          </block>
        </document>
      </value>
    ).toJSON()
  );
});
