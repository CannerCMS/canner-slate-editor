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
    background-color: rgba(0, 0, 0, 0.5);
  }

  img,
  iframe,
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 0px;
    top: 0px;
    left: 0px;
  }
`;

export const ImageNodeInActive = ImageNodeShared.extend`
  border: 2px solid #fff;

  .toolbar {
    display: none;
  }
`;

export const ImageNodeActive = ImageNodeShared.extend`
  border: 2px solid #ef6942;

  .toolbar {
    display: block;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 100;

    .toolbarItem {
      display: inline-block;
      color: #fff;
      padding: 5px;
      margin: 2px;
      border-radius: 2px;
      background-color: #333;
    }
  }
`;
