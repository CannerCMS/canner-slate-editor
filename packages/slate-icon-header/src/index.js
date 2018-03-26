import Header1Icon from './header1';
import Header2Icon from './header2';

import commonNode from '@canner/slate-editor-renderer/lib/commonNode';

export const HeaderPlugin = {
  renderNode: (props) => {
    if (props.node.type === 'heading1') 
      return commonNode('h1')(props);
    else if (props.node.type === 'heading2')
      return commonNode('h2')(props);
  }
}

export const Header1 = Header1Icon;
export const Header2 = Header2Icon;
