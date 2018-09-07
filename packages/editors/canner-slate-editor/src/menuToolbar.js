// @flow
import * as React from "react";
import type { Value, Change } from "slate";
import { Icon, Modal } from "antd";
import styled from "styled-components";
import { Container } from "./components/item";
import FullScreenIcon from "./components/fullScreen";

import { AlignCenter, AlignLeft, AlignRight } from "@canner/slate-icon-align";
import Blockquote from "@canner/slate-icon-blockquote";
import Table from "@canner/slate-icon-table";
import CodeBlock from "@canner/slate-icon-codeblock";
import FontBgColor from "@canner/slate-icon-fontbgcolor";
import FontColor from "@canner/slate-icon-fontcolor";
import { Header1, Header2, Header3 } from "@canner/slate-icon-header";
import Hr from "@canner/slate-icon-hr";
import Image from "@canner/slate-icon-image";
import { Indent, Outdent } from "@canner/slate-icon-indent";
import Link from "@canner/slate-icon-link";
import { OlList, UlList } from "@canner/slate-icon-list";
import Undo from "@canner/slate-icon-undo";
import Redo from "@canner/slate-icon-redo";
import Video from "@canner/slate-icon-video";
import HelpMenu from "@canner/slate-editor-help";

type Props = {
  value: Value,
  isFull?: boolean,
  onChange: (change: Change) => void,
  menuToolbarOption: { [string]: any }[],
  goFull: () => void,
  serviceConfig: any,
  galleryConfig?: any
};

type State = {
  showMenu: boolean
};

const IconContainer = styled.div`
  display: inline-block;
  background: transparent;
  color: #222;
  cursor: pointer;
  -webkit-transition: background 0.2s ease 0s;
  border-bottom: 0.5px solid #ebebeb;

  ${props =>
    !props.noHover &&
    `
    &:hover {
      background: #ebebeb;
    }
  `};
`;

const Seperator = styled.div`
  height: 35px;
  width: 1px;
  margin: 2px 0;
  background: #ebebeb;
  display: inline-block;
  vertical-align: top;
`;

export default class Toolbar extends React.Component<Props, State> {
  state = {
    showMenu: false
  };

  changeVisibleMenu = (visible: boolean) => {
    this.setState({ showMenu: visible });
  };

  render() {
    const {
      value,
      onChange,
      goFull,
      isFull,
      serviceConfig,
      galleryConfig,
      menuToolbarOption
    } = this.props;
    const { showMenu } = this.state;

    const options = menuToolbarOption || [
      { type: Undo, title: "Undo" },
      { type: Redo, title: "Redo" },
      "seperator",
      { type: Header1, title: "Header One" },
      { type: Header2, title: "Header Two" },
      { type: Header3, title: "Header Three" },
      { type: Blockquote, title: "Blockquote" },
      { type: Hr, title: "Ruler" },
      "seperator",
      { type: AlignLeft, title: "Align Left" },
      { type: AlignCenter, title: "Align Center" },
      { type: AlignRight, title: "Align Right" },
      { type: Indent, title: "Indent" },
      { type: Outdent, title: "Outdent" },
      "seperator",
      { type: OlList, title: "Order List" },
      { type: UlList, title: "Unorder List" },
      "seperator",
      { type: Link, title: "Link" },
      { type: "image", title: "Image" },
      { type: Video, title: "Video" },
      { type: CodeBlock, title: "Code Bloack" },
      { type: Table, title: "Table" },
      "seperator",
      { type: FontColor, title: "Font Color" },
      { type: FontBgColor, title: "Font Background Color" },
      "seperator",
      { type: "fullScreen", title: "Full Screen" },
      { type: "help", title: "Help" }
    ];

    return (
      <Container>
        {options.map((option, i) => {
          let Type =
            typeof option === "string" ? option : option.type || option;
          let title = option.title;

          if (Type === "seperator") return <Seperator key={i} />;
          if (Type === "fullScreen") {
            return (
              <IconContainer key={i} title={title}>
                <FullScreenIcon
                  className="__canner-editor_topToolbarItem"
                  goFull={goFull}
                  isFull={isFull}
                />
              </IconContainer>
            );
          }

          if (Type === "help") {
            return (
              <IconContainer
                noHover
                style={{ height: "37px" }}
                key={i}
                title={title}
              >
                <Icon
                  type="question-circle"
                  theme="outlined"
                  className="__canner-editor_topToolbarItem"
                  onClick={() => this.changeVisibleMenu(true)}
                />
                <Modal
                  visible={showMenu}
                  style={{ width: "800px" }}
                  footer={null}
                  onCancel={() => this.changeVisibleMenu(false)}
                  title="Help Menu"
                >
                  <HelpMenu />
                </Modal>
              </IconContainer>
            );
          }

          // special plugin
          if (Type === "image") {
            Type = Image;
          }

          return (
            <IconContainer key={i} title={title}>
              <Type
                change={value.change()}
                onChange={onChange}
                className="__canner-editor_topToolbarItem"
                disableClassName="__canner-editor_topToolbarItemDisabled"
                strokeClassName="qlStroke"
                serviceConfig={Type === Image && serviceConfig}
                galleryConfig={Type === Image && galleryConfig}
                strokeMitterClassName="qlStrokeMitter"
                fillClassName="qlFill"
                evenClassName="qlEven"
                colorLabelClassName="qlColorLabel"
                thinClassName="qlThin"
                activeStrokeMitterClassName="qlStrokeMitterActive"
                activeClassName="__canner-editor_topToolbarItem __canner-editor_topToolbarItemActive"
                activeStrokeClassName="qlStrokeActive"
                activeFillClassName="qlFillActive"
                activeThinClassName="qlThinActive"
                activeEvenClassName="qlEvenActive"
              />
            </IconContainer>
          );
        })}
      </Container>
    );
  }
}
