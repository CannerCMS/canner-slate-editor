import React from 'react';
import {Change, Value} from 'slate';
import {
  AlignCenter,
  AlignLeft,
  AlignRight
} from '../';
import renderer from 'react-test-renderer';

test('create a AlignCenter icon', () => {
  const component = renderer.create(
    <AlignCenter
      change={new Change({value: new Value()})}/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})

test('create a AlignLeft icon', () => {
  const component = renderer.create(
    <AlignLeft
      change={new Change({value: new Value()})}/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})

test('create a AlignRight icon', () => {
  const component = renderer.create(
    <AlignRight
      change={new Change({value: new Value()})}/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
