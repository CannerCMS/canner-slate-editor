import React from "react";
import { Change, Value } from "slate";
import { join } from "path";
import Bold from "../";
import renderer from "react-test-renderer";
import iconTest from "../../../../test/icon-test";

test("create a Bold icon", () => {
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
    <Bold change={new Change({ value: initialValue })} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("simulate click icon", done => {
  iconTest(Bold, join(__dirname, "expected.yaml"), done);
});
