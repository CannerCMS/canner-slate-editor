import React from "react";
import { Change, Value } from "slate";
import { join } from "path";
import Code from "../";
import renderer from "react-test-renderer";
import iconTest from "../../../../test/icon-test";

test("create a Code icon", () => {
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
    <Code change={new Change({ value: initialValue })} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("simulate click icon", done => {
  iconTest({
    icon: Code,
    expectedPath: join(__dirname, "expected.yaml"),
    callback: done
  });
});
