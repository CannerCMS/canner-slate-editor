import React from "react";
import { Change, Value } from "slate";
import { OlList, UlList } from "../";
import { join } from "path";
import renderer from "react-test-renderer";
import iconTest from "test/icon-test";

test("create a OlList icon", () => {
  const initialValue = Value.fromJSON({
    document: {
      nodes: [
        {
          object: "block",
          type: "paragraph",
          nodes: [
            {
              object: "text",
              leaves: [
                {
                  text: "A line of text in a paragraph."
                }
              ]
            }
          ]
        }
      ]
    }
  });

  const component = renderer.create(
    <OlList change={new Change({ value: initialValue })} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("create a UlList icon", () => {
  const initialValue = Value.fromJSON({
    document: {
      nodes: [
        {
          object: "block",
          type: "paragraph",
          nodes: [
            {
              object: "text",
              leaves: [
                {
                  text: "A line of text in a paragraph."
                }
              ]
            }
          ]
        }
      ]
    }
  });

  const component = renderer.create(
    <UlList change={new Change({ value: initialValue })} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("simulate click ulList icon", done => {
  iconTest({
    icon: UlList,
    expectedPath: join(__dirname, "expectedUlList.yaml"),
    callback: done
  });
});

test("simulate click olList icon", done => {
  iconTest({
    icon: OlList,
    expectedPath: join(__dirname, "expectedOlList.yaml"),
    callback: done
  });
});
