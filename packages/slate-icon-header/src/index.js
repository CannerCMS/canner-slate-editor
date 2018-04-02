// @flow
import type {Change} from 'slate';
import Header1Icon from './header1';
import Header2Icon from './header2';
import {HEADING_1, HEADING_2, PARAGRAPH} from '@canner/slate-constant/lib/blocks';

import commonNode from '@canner/slate-editor-renderer/lib/commonNode';

export const HeaderPlugin = (opt) => {
  const options = Object.assign({
    headingOneType: HEADING_1,
    headingTwoType: HEADING_2
  }, opt);

  return {
    renderNode: (props) => {
      if (props.node.type === options.headingOneType) 
        return commonNode('h1')(props);
      else if (props.node.type === options.headingTwoType)
        return commonNode('h2')(props);
    },
    onKeyDown: (e: any, change: Change) => {
      if (e.key === 'Enter') {
        const {value} = change;
        const {blocks} = value;
        const getCurrentblock = blocks.get(0);

        if (
          getCurrentblock.type === options.headingOneType ||
          getCurrentblock.type === options.headingTwoType
        )
          return change
            .splitBlock()
            .setBlock(PARAGRAPH);
      }
    }
  }
}

export const Header1 = Header1Icon;
export const Header2 = Header2Icon;
