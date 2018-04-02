// @flow
import type {Change} from 'slate';
import Header1Icon from './header1';
import Header2Icon from './header2';
import Header3Icon from './header3';
import Header4Icon from './header4';
import Header5Icon from './header5';
import Header6Icon from './header6';
import {HEADING_1, HEADING_2, HEADING_3, HEADING_4, HEADING_5, HEADING_6, PARAGRAPH} from '@canner/slate-constant/lib/blocks';

import commonNode from '@canner/slate-editor-renderer/lib/commonNode';

export const HeaderPlugin = (opt) => {
  const options = Object.assign({
    headingOneType: HEADING_1,
    headingTwoType: HEADING_2,
    headingThreeType: HEADING_3,
    headingFourType: HEADING_4,
    headingFiveType: HEADING_5,
    headingSixType: HEADING_6
  }, opt);

  return {
    renderNode: (props) => {
      if (props.node.type === options.headingOneType) 
        return commonNode('h1')(props);
      else if (props.node.type === options.headingTwoType)
        return commonNode('h2')(props);
      else if (props.node.type === options.headingThreeType)
        return commonNode('h3')(props);
      else if (props.node.type === options.headingFourType)
        return commonNode('h4')(props);
      else if (props.node.type === options.headingFiveType)
        return commonNode('h5')(props);
      else if (props.node.type === options.headingSixType)
        return commonNode('h6')(props);
    },
    onKeyDown: (e: any, change: Change) => {
      if (e.key === 'Enter') {
        const {value} = change;
        const {blocks} = value;
        const getCurrentblock = blocks.get(0);

        if (
          getCurrentblock.type === options.headingOneType ||
          getCurrentblock.type === options.headingTwoType ||
          getCurrentblock.type === options.headingThreeType ||
          getCurrentblock.type === options.headingFourType ||
          getCurrentblock.type === options.headingFiveType ||
          getCurrentblock.type === options.headingSixType
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
export const Header3 = Header3Icon;
export const Header4 = Header4Icon;
export const Header5 = Header5Icon;
export const Header6 = Header6Icon;
