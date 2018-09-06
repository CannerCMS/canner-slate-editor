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

export const ImageNodeShared = styled.span`
  width: ${props => props.width + 20}px;
  height: ${props => props.height + 20}px;

  display: inline-block;
  position: relative;

  img,
  iframe {
    position: absolute;
    border: 0px;
    top: 5px;
    left: 5px;
    max-width: calc(100% - 10px) !important;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
  }
`;

export const ImageNodeComponent = ImageNodeShared.extend`
  border: 2px solid ${props => (props.active ? "#ef6942" : "#FFF")};
`;

export const Toolbar = styled.span`
  z-index: 5;
  display: ${props => (props.active ? "block" : "none")};
  position: absolute;
  right: 10px;
  top: -40px;
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
