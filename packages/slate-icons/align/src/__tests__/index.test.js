import React from "react";
import { Change, Value } from "slate";
import { join } from "path";
import { AlignCenter, AlignLeft, AlignRight } from "../";
import iconTest from "test/icon-test";
import renderer from "react-test-renderer";
const onChange = arg => arg;

test("create a AlignCenter icon", () => {
  const component = renderer.create(
    <AlignCenter
      change={new Change({ value: new Value() })}
      onChange={onChange}
    />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("create a AlignLeft icon", () => {
  const component = renderer.create(
    <AlignLeft
      change={new Change({ value: new Value() })}
      onChange={onChange}
    />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("create a AlignRight icon", () => {
  const component = renderer.create(
    <AlignRight
      change={new Change({ value: new Value() })}
      onChange={onChange}
    />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("click AlignCenter icon", done => {
  iconTest({
    icon: AlignCenter,
    expectedPath: join(__dirname, "expected-center.yaml"),
    callback: done
  });
});

test("click AlignCenter icon use customized type", done => {
  iconTest({
    icon: AlignCenter,
    type: "customizeAlign",
    expectedPath: join(__dirname, "custom-expected-center.yaml"),
    callback: done
  });
});

test("click AlignLeft icon", done => {
  iconTest({
    icon: AlignLeft,
    expectedPath: join(__dirname, "expected-left.yaml"),
    callback: done
  });
});

test("click AlignLeft icon use customized type", done => {
  iconTest({
    icon: AlignLeft,
    type: "customizeAlign",
    expectedPath: join(__dirname, "custom-expected-left.yaml"),
    callback: done
  });
});

test("click AlignRight icon", done => {
  iconTest({
    icon: AlignRight,
    expectedPath: join(__dirname, "expected-right.yaml"),
    callback: done
  });
});

test("click AlignRight icon use customized type", done => {
  iconTest({
    icon: AlignRight,
    type: "customizeAlign",
    expectedPath: join(__dirname, "custom-expected-right.yaml"),
    callback: done
  });
});
