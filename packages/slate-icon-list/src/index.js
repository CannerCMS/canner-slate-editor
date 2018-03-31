import OlListIcon from './olList';
import UlListIcon from './ulList';
import {OL_LIST, UL_LIST, LIST_ITEM} from '@canner/slate-constant/lib/blocks';

import commonNode from '@canner/slate-editor-renderer/lib/commonNode';

const DEFAULT = {
  ol: OL_LIST,
  ul: UL_LIST,
  li: LIST_ITEM
}


export const ListPlugin = (type = DEFAULT) => {
  if (!type.ol)
    type.ol = OL_LIST
  if (!type.ul)
    type.ul = UL_LIST
  if (!type.li)
    type.li = LIST_ITEM

  return {
    renderNode: (props) => {
      if (props.node.type === type.ul) 
        return commonNode('ul')(props);
      else if (props.node.type === type.ol)
        return commonNode('ol')(props);
      else if (props.node.type === type.li)
        return commonNode('li')(props);
    }
  }
}

export const OlList = OlListIcon;
export const UlList = UlListIcon;
