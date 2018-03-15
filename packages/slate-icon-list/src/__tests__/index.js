import React from 'react';
import {Change, Value} from 'slate';
import {OlList, UlList} from '../';
import renderer from 'react-test-renderer';

test('create a OlList icon', () => {
  const initialValue = Value.fromJSON({
    document: {
      nodes: [
        {
          object: 'block',
          type: 'paragraph',
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  text: 'A line of text in a paragraph.',
                },
              ],
            },
          ],
        },
      ],
    },
  });

  const component = renderer.create(
    <OlList
      change={new Change({value: initialValue})}/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})


test('create a UlList icon', () => {
  const initialValue = Value.fromJSON({
    document: {
      nodes: [
        {
          object: 'block',
          type: 'paragraph',
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  text: 'A line of text in a paragraph.',
                },
              ],
            },
          ],
        },
      ],
    },
  });

  const component = renderer.create(
    <UlList
      change={new Change({value: initialValue})}/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
