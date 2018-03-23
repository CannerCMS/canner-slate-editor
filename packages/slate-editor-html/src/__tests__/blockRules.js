// @flow
/** @jsx h */

import Html from 'slate-html-serializer';
import h from 'slate-hyperscript';
import blockRules from '../blockRules';

test('test normal block deserialize', () => {
  const html = new Html({ rules: [
    blockRules('p', 'paragraph')
  ]})

  expect(html.deserialize('<p>this is data</p>').toJSON()).toEqual(
    (<value>
      <document>
        <block type="paragraph">
          this is data
        </block>
      </document>
    </value>).toJSON()
  )
})
