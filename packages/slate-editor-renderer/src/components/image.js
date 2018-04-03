// @flow
import styled from "styled-components";

export const ImageContiner = styled.div`
  display: flex;
  margin-left: ${props => 3 * (props.indent || 0)}em;
  justify-content: ${props => {
    if (props.align === "center") return "center";
    else if (props.align === "right") return "flex-end";
    return "flex-start";
  }};
`;

export const ImageNodeShared = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;

  display: inline-block;
  position: relative;
  margin: 10px;

  .overlay {
    z-index: 10;
  }

  img,
  iframe {
    position: absolute;
    border: 0px;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
`;

export const ImageNodeInActive = ImageNodeShared.extend`
  border: 2px solid #fff;
`;

export const ImageNodeActive = ImageNodeShared.extend`
  border: 2px solid #ef6942;
`;

export const Overlay = styled.div`
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  position: absolute;
  border: 0px;
  top: 0px;
  left: 0px;
`

export const Toolbar = styled.div`
  z-index: 1000;
  display: block;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0 0 3px 0;
`

export const ToolbarItem = styled.div`
  display: inline-block;
  color: #333;
  padding: 3px;
  font-size: 20px;
`
