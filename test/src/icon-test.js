import React from 'react';
import fs from 'fs';
import path from 'path';
import Slate, {Range} from 'slate';
import readMetadata from 'read-metadata';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

function deserializeValue(json) {
  return Slate.Value.fromJSON(
      json,
      { normalize: false }
  );
}


export default function(settings) {
  const {icon, expectedPath, callback, type} = settings;
  const input = readMetadata.sync(path.resolve(__dirname, 'icon-input.yaml'));

  let expected;
  if (fs.existsSync(expectedPath)) {
    expected = readMetadata.sync(expectedPath);
  }

  const valueInput = deserializeValue(input);
  const {document} = valueInput;
  const first = document.getFirstText();
  const range = Range.create({
    anchorKey: first.key,
    anchorOffset: 0,
    focusKey: first.key,
    focusOffset: 5
  });

  const nextChange = valueInput.change()
    .select(range);

  const iconComponent = React.createElement(icon, {
    type,
    change: nextChange,
    onChange: change => {
      expect(change.value.toJSON()).toEqual(deserializeValue(expected).toJSON());
      callback();
    }
  })

  mount(iconComponent).find('svg').simulate('click');
};
