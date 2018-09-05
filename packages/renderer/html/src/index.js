// @flow
import mark from "./markRules";
import block from "./blockRules";
import voidBlock from "./voidBlockRules";
import inline from "./inlineRules";
import image from "./imageRules";
import video from "./videoRules";
import codeBlock from "./codeBlockRules";
import emoji from "./emojiRules";
import voidNode from "./voidNodeRules";
import { BLOCKS, MARKS, INLINES } from "@canner/slate-constant";
import { DEFAULT as DEFAULT_VIDEO } from "@canner/slate-icon-video";

export const markRules = mark;
export const blockRules = block;
export const inlineRules = inline;
export const imageRules = image;
export const videoRules = video;
export const codeBlockRules = codeBlock;
export const emojiRules = emoji;

export const DEFAULT_RULES = [
  blockRules("p", BLOCKS.PARAGRAPH),
  blockRules("blockquote", BLOCKS.BLOCKQUOTE),
  blockRules("h1", BLOCKS.HEADING_1),
  blockRules("h2", BLOCKS.HEADING_2),
  blockRules("h3", BLOCKS.HEADING_3),
  blockRules("h4", BLOCKS.HEADING_4),
  blockRules("h5", BLOCKS.HEADING_5),
  blockRules("h6", BLOCKS.HEADING_6),
  blockRules("ul", BLOCKS.UL_LIST),
  blockRules("ol", BLOCKS.OL_LIST),
  blockRules("li", BLOCKS.LIST_ITEM),
  blockRules("table", BLOCKS.TABLE),
  blockRules("tr", BLOCKS.TABLE_ROW),
  blockRules("td", BLOCKS.TABLE_CELL),
  voidBlock("hr", BLOCKS.HR),
  inlineRules("a", INLINES.LINK),
  markRules("strong", MARKS.BOLD),
  markRules("code", MARKS.CODE),
  markRules("i", MARKS.ITALIC),
  markRules("s", MARKS.STRIKETHROUGH),
  markRules("u", MARKS.UNDERLINE),
  markRules("span", MARKS.FONTBGCOLOR),
  markRules("span", MARKS.FONTCOLOR),
  markRules("span", MARKS.FONTSIZE),
  markRules("span", MARKS.LETTERSPACING),
  videoRules(DEFAULT_VIDEO.youtube),
  videoRules(DEFAULT_VIDEO.vimeo),
  videoRules(DEFAULT_VIDEO.dailymotion),
  videoRules(DEFAULT_VIDEO.youku),
  imageRules(INLINES.IMAGE),
  codeBlockRules(),
  emojiRules(),

  // some void node types that generate from 'markup-it'
  voidNode("unstyled"),
  voidNode("html")
];
