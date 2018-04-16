// @flow
import styled from "styled-components";

export const Alert = styled.span`
  border: 1px solid #ffa39e;
  background-color: #fff1f0;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  border-radius: 4px;
  padding: 8px 15px;
`;

export const ImageContiner = styled.span`
  display: flex;
  margin-left: ${props => 3 * (props.indent || 0)}em;
  justify-content: ${props => {
    if (props.align === "center") return "center";
    else if (props.align === "right") return "flex-end";
    return "flex-start";
  }};
`;

export const ImageNodeShared = styled.span`
  width: ${props => props.width}px;
  height: ${props => props.height}px;

  display: inline-block;
  position: relative;
  margin: 10px;

  img,
  iframe {
    position: absolute;
    border: 0px;
    top: 5px;
    left: 5px;
    max-width: calc(100% - 10px) !important;
    width: ${props => (props.width > 300 ? props.width : props.width - 14)}px;
    height: ${props =>
      props.height > 300 ? props.width : props.height - 17}px;
  }
`;

export const ImageNodeInActive = ImageNodeShared.extend`
  border: 2px solid #fff;
`;

export const ImageNodeActive = ImageNodeShared.extend`
  border: 2px solid #ef6942;
`;

export const Toolbar = styled.span`
  z-index: 1000;
  display: block;
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 100;
`;

export const ToolbarItem = styled.span`
  display: inline-flex;
  color: #fff;
  padding: 6px;
  margin: 3px;
  background-image: linear-gradient(180deg, #464646, #151515);
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
`;
