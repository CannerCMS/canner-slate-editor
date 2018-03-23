// @flow
/** @jsx h */

import Html from "slate-html-serializer";
import h from "slate-hyperscript";
import markRules from "../markRules";

test("test mark deserialize", () => {
  const html = new Html({
    rules: [markRules('i', 'italic')]
  });

  expect(html.deserialize(`<i>Wow</i>`).toJSON()).toEqual(
    (
      <value>
        <document>
          <block type="paragraph">
            <mark
              type="italic">
              Wow
            </mark>
          </block>
        </document>
      </value>
    ).toJSON()
  );
});

test("test mark deserialize with background color", () => {
  const html = new Html({
    rules: [
      markRules('span', 'fontBgColor', {
        key: 'backgroundColor',
        value: 'color'
      })
    ]
  });

  expect(html.deserialize(`<span style="background-color: red;">Wow</span>`).toJSON()).toEqual(
    (
      <value>
        <document>
          <block type="paragraph">
            <mark
              type="fontBgColor"
              data={{
                color: "red"
              }}>
              Wow
            </mark>
          </block>
        </document>
      </value>
    ).toJSON()
  );
});

test("test mark deserialize with bg color", () => {
  const html = new Html({
    rules: [
      markRules('span', 'fontBgColor', {
        key: 'backgroundColor',
        value: 'color'
      })
    ]
  });

  expect(html.deserialize(`<span style="background-color: red;">Wow</span>`).toJSON()).toEqual(
    (
      <value>
        <document>
          <block type="paragraph">
            <mark
              type="fontBgColor"
              data={{
                color: "red"
              }}>
              Wow
            </mark>
          </block>
        </document>
      </value>
    ).toJSON()
  );
});

test("test mark deserialize with font size", () => {
  const html = new Html({
    rules: [
      markRules('span', 'fontSize', {
        key: 'fontSize',
        value: 'fontSize'
      })
    ]
  });

  expect(html.deserialize(`<span style="font-size: 20px;">Wow</span>`).toJSON()).toEqual(
    (
      <value>
        <document>
          <block type="paragraph">
            <mark
              type="fontSize"
              data={{
                fontSize: '20px'
              }}>
              Wow
            </mark>
          </block>
        </document>
      </value>
    ).toJSON()
  );
});
