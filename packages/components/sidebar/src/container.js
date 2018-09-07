// @flow
import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: absolute;
  z-index: 5;

  i {
    color: #ccc;
    -webkit-animation: fadeIn 1s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadeIn 1s; /* Firefox < 16 */
    -ms-animation: fadeIn 1s; /* Internet Explorer */
    -o-animation: fadeIn 1s; /* Opera < 12.1 */
    animation: fadeIn 1s;
  }

  i.open {
    -webkit-animation: spin 1s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: spin 1s; /* Firefox < 16 */
    -ms-animation: spin 1s; /* Internet Explorer */
    -o-animation: spin 1s; /* Opera < 12.1 */
    animation: spin 1s;
    -webkit-animation-fill-mode: forwards; /* Safari 4.0 - 8.0 */
    animation-fill-mode: forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes spin {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(45deg);
    }
  }
  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(45deg);
    }
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(45deg);
    }
  }
`;

export const PopupContainer = styled.div`
  width: 320px;
  display: ${props => (props.isOpen ? "block" : "none")};
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  position: relative;
  padding: 10px;
  left: 20px;
  top: -140px;
`;

export const IconContainer = styled.div`
  display: inline-block;
  padding: 3px 5px;
  width: 100px;
  text-align: center;

  .__slate-sidebar_slateToolbarItem {
    height: 40px;
    width: 40px;
  }
  .qlStroke {
    stroke: #bbb;
    fill: transparent;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1px;
  }
  .qlStrokeActive {
    stroke: #333;
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
    stroke: #333;
    fill: transparent;
  }
  .qlFill {
    fill: #bbb;
  }
  .qlFillActive {
    fill: #333;
  }
  .qlEven {
    stroke: #bbb;
    fill: transparent;
  }
  .qlEvenActive {
    stroke: #333;
    fill: transparent;
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
    stroke: #333;
    fill: transparent;
    stroke-width: 1;
  }
`;

export const IconWrapper = styled.div`
  svg {
    cursor: pointer;
  }
`;
