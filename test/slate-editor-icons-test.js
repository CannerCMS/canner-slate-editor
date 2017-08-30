import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import Slate from 'slate';

// hint:
// paste http://example.com/ at first test

describe('EditorIcons', function() {
  this.timeout(30000);
  const tests = [
    'link',
    'bold',
    'code',
    'italic',
    'strikethrough',
    'underline',
    'blockquote',
    'olList',
    'ulList'
  ];

  tests.forEach(test => {
    it(test, done => {
      const input = require(`./${test}/input.yaml`);
      const expected = require(`./${test}/expected.yaml`);
      const stateInput = Slate.Raw.deserialize(input, {terse: true});
      const {document, selection} = stateInput;
      const texts = document.getTexts();
      const first = texts.first();
      const range = selection.merge({
        anchorKey: first.key,
        anchorOffset: 0,
        focusKey: first.key,
        focusOffset: 5
      });

      const nextState = stateInput
            .transform()
            .moveTo(range)
            .apply();
      const icon = React.createElement(
        require(`./${test}/icon.js`),
        {
          state: nextState,
          onChange: state => {
            const newDocJSon = Slate.Raw.serialize(state, {terse: true});
            expect(newDocJSon).to.deep.equal(expected);
            done();
          }
        }
      );

      mount(icon).find('svg').simulate('click');
    });
  });
});
