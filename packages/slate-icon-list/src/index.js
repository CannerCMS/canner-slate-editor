import OlListIcon from './olList';
import UlListIcon from './ulList';

import commonNode from '@canner/slate-editor-renderer/lib/commonNode';

export const ListPlugin = {
  renderNode: (props) => {
    if (props.node.type === 'list-ul') 
      return commonNode('ul')(props);
    else if (props.node.type === 'list-ol')
      return commonNode('ol')(props);
    else if (props.node.type === 'list-item')
      return commonNode('li')(props);
  }
}

export const OlList = OlListIcon;
export const UlList = UlListIcon;
