// @flow
import type {Change} from 'slate';
import Header1Icon from './header1';
import Header2Icon from './header2';
import {HEADING_1, HEADING_2, PARAGRAPH} from '@canner/slate-constant/lib/blocks';

import commonNode from '@canner/slate-editor-renderer/lib/commonNode';

const DEFAULT = {
  heading_1: HEADING_1,
  heading_2: HEADING_2
}

export const HeaderPlugin = (type = DEFAULT) => {
  if (!type.heading_1)
    type.heading_1 = HEADING_1
  if (!type.heading_2)
    type.heading_2 = HEADING_2

  return {
    renderNode: (props) => {
      if (props.node.type === type.heading_1) 
        return commonNode('h1')(props);
      else if (props.node.type === type.heading_2)
        return commonNode('h2')(props);
    },
    onKeyDown: (e: any, change: Change) => {
      if (e.key === 'Enter') {
        const {value} = change;
        const {blocks} = value;
        const getCurrentblock = blocks.get(0);

        if (
          getCurrentblock.type === type.heading_1 ||
          getCurrentblock.type === type.heading_2
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
