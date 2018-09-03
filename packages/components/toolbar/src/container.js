// @flow
import styled from "styled-components";

export const ToolbarContainer = styled.div`
  position: absolute;
  z-index: 100000;
  margin-top: -6px;
  color: #bbb;
  cursor: auto;
  border-radius: 5px;
  background-image: linear-gradient(180deg, #464646, #151515);

  ${props =>
    props.position === "top"
      ? `
    &:after {
      top: 100%;
      left: 50%;
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-top-color: #151515;
      border-width: 5px;
      margin-left: -5px;
    }
  `
      : `
    &:after {
      bottom: 100%;
      left: 50%;
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-bottom-color: #151515;
      border-width: 5px;
      margin-left: -5px;
    }
  `};
`;

export const Item = styled.div`
  cursor: pointer;
  display: inline-block;
`;

export const Divider = styled.div`
  display: inline-block;
  height: 30px;
  width: 10px;
`;

export const IconContainer = styled.div`
  display: inline-block;

  .__slate-toolbar-slateToolbarItem {
    padding: 3px 5px;
  }

  .__slate-toolbar-slateToolbarItem,
  .__slate-toolbar-slateToolbarItemActive {
    height: 30px;
    width: 30px;
  }

  .qlStroke {
    stroke: #bbb;
    fill: transparent;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1px;
  }

  .qlStrokeActive {
    stroke: #fff;
    fill: transparent;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.5px;
  }

  .qlStrokeMitter {
    stroke: #bbb;
    fill: transparent;
  }

  .qlStrokeMitterActive {
    stroke: #fff;
    fill: transparent;
  }

  .qlFill {
    fill: #bbb;
  }

  .qlFillActive {
    fill: #fff;
  }

  .qlEven {
    stroke: #bbb;
    fill: #464646;
  }

  .qlEvenActive {
    stroke: #fff;
    fill: #464646;
  }

  .qlColorLabel {
    fill: #464646;
    opacity: 0.2;
  }

  .qlTransparent {
    opacity: 0.2;
  }

  .qlThin {
    stroke: #bbb;
    fill: transparent;
    stroke-width: 1;
  }

  .qlThinActive {
    stroke: #fff;
    fill: transparent;
    stroke-width: 1;
  }
`;
