import React from 'react';
import {Change, Value} from 'slate';
import {Header1, Header2} from '../';
import renderer from 'react-test-renderer';

test('create a Header1 icon', () => {
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
    <Header1
      change={new Change({value: initialValue})}/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})

test('create a Header2 icon', () => {
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
    <Header2
      change={new Change({value: initialValue})}/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
