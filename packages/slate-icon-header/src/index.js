// @flow
import type {Change} from 'slate';
import Header1Icon from './header1';
import Header2Icon from './header2';

import commonNode from '@canner/slate-editor-renderer/lib/commonNode';

export const HeaderPlugin = {
  renderNode: (props) => {
    if (props.node.type === 'heading1') 
      return commonNode('h1')(props);
    else if (props.node.type === 'heading2')
      return commonNode('h2')(props);
  },
  onKeyDown: (e: any, change: Change) => {
    if (e.key === 'Enter') {
      const {value} = change;
      const {blocks} = value;
      const getCurrentblock = blocks.get(0);

      if (
        getCurrentblock.type === 'heading1' ||
        getCurrentblock.type === 'heading2'
      ) return change.insertBlock('paragraph');
    }
  }
}

export const Header1 = Header1Icon;
export const Header2 = Header2Icon;
