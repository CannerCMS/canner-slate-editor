// @flow
import type { Change } from "slate";
import Header1Icon from "./header1";
import Header2Icon from "./header2";
import Header3Icon from "./header3";
import Header4Icon from "./header4";
import Header5Icon from "./header5";
import Header6Icon from "./header6";
import { applyChange } from "./headerDecorator";
import {
  HEADING_1,
  HEADING_2,
  HEADING_3,
  HEADING_4,
  HEADING_5,
  HEADING_6,
  PARAGRAPH
} from "@canner/slate-constant/lib/blocks";
import isHotkey from "is-hotkey";

import commonNode from "@canner/slate-editor-renderer/lib/commonNode";
import { nodeAttrs } from "@canner/slate-icon-shared";

const plugin = (type, tagName, hotkey) => {
  return {
    renderNode: props => {
      if (props.node.type === type)
        return commonNode(tagName, nodeAttrs)(props);
    },
    onKeyDown: (e: any, change: Change) => {
      if (e.key === "Enter") {
        const { value } = change;
        const { blocks } = value;
        const getCurrentblock = blocks.get(0);

        if (getCurrentblock.type === type)
          return change.splitBlock().setBlock(PARAGRAPH);
      } else if (isHotkey(hotkey, e)) {
        change.call(applyChange, type);
        return false;
      }
    }
  };
};

export const HeaderOnePlugin = (type = HEADING_1) =>
  plugin(type, "h1", "ctrl+opt+1");
export const HeaderTwoPlugin = (type = HEADING_2) =>
  plugin(type, "h2", "ctrl+opt+2");
export const HeaderThreePlugin = (type = HEADING_3) =>
  plugin(type, "h3", "ctrl+opt+3");
export const HeaderFourPlugin = (type = HEADING_4) =>
  plugin(type, "h4", "ctrl+opt+4");
export const HeaderFivePlugin = (type = HEADING_5) =>
  plugin(type, "h5", "ctrl+opt+5");
export const HeaderSixPlugin = (type = HEADING_6) =>
  plugin(type, "h6", "ctrl+opt+6");

export const Header1 = Header1Icon;
export const Header2 = Header2Icon;
export const Header3 = Header3Icon;
export const Header4 = Header4Icon;
export const Header5 = Header5Icon;
export const Header6 = Header6Icon;
