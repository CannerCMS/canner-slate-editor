import React from 'react';
import SharedWrapper from '../';
import renderer from 'react-test-renderer';

test('create a AlignJustify icon', () => {
  const component = renderer.create(
    <SharedWrapper
      type="align-justify"
      icon="AlignJustify"/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
