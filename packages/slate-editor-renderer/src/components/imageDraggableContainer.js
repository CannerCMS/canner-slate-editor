// @flow

import * as React from "react";
import type { Change } from "slate";
import type { nodeProps } from "./type";

import {Tooltip} from 'antd';
import inlineAddData from "@canner/slate-helper-inline-adddata";
import { Resizable } from "react-resizable";
import FaTrashO from "react-icons/lib/fa/trash-o";
import {
  ImageNodeInActive,
  ImageNodeActive,
  ImageContiner,
  Toolbar,
  ToolbarItem
} from "./image";

type Props = nodeProps & {
  change: Change,
  editor: Object,
  readOnly: Boolean
};

type State = {
  width: ?number,
  height: ?number
};
export default class ImageDraggableContainer extends React.Component<
  Props,
  State
> {
  constructor(props) {
    super(props);

    this.onResizeStop = this.onResizeStop.bind(this);
    this.onResize = this.onResize.bind(this);
    this.remove = this.remove.bind(this);

    this.state = {
      width: null,
      height: null
    };
  }

  onResizeStop(e, data) {
    const { editor } = this.props;
    const { width, height } = data.size;

    editor.change(change =>
      change.call(inlineAddData, {
        data: { width, height }
      })
    );
  }

  onResize(e, data) {
    const { width, height } = data.size;
    this.setState({
      width,
      height
    });
  }

  remove() {
    const { editor, node } = this.props;
    editor.change(change => change.removeNodeByKey(node.key));
  }

  render() {
    const {
      node,
      attributes,
      children,
      readOnly,
      isSelected,
      getSrc,
      textAlign,
      paddingLeft
    } = this.props;
    const align = textAlign(node);
    const indent = paddingLeft(node);
    const src = getSrc(node);
    let ratio;
    let width = this.state.width || this.props.width;
    let height = this.state.height || this.props.height;

    if (width > 500) {
      ratio = width / 500;
    }

    width = ratio ? width / ratio : width;
    height = ratio ? height / ratio : height;

    if (!isSelected || readOnly) {
      // if editor is readOnly
      return (
        <ImageContiner align={align} indent={indent} data-slate-type="image">
          <ImageNodeInActive width={width} height={height}>
            <img {...attributes} src={src} />
            {children}
          </ImageNodeInActive>
        </ImageContiner>
      );
    }

    return (
      <ImageContiner align={align} indent={indent} data-slate-type="image">
        <Resizable
          handleSize={[20, 20]}
          lockAspectRatio
          minConstraints={[200, 200]}
          maxConstraints={[700, 700]}
          onResize={this.onResize}
          onResizeStop={this.onResizeStop}
          width={width + 10}
          height={height + 10}
        >
          <ImageNodeActive
            width={width + 10}
            height={height + 10}
            align={align}
          >
            <Toolbar>
              <ToolbarItem>
                <Tooltip title="Remove">
                  <FaTrashO
                    onMouseDown={e => e.preventDefault()}
                    onClick={this.remove}
                  />
                </Tooltip>
              </ToolbarItem>
            </Toolbar>
            <img {...attributes} src={src} />
            {children}
          </ImageNodeActive>
        </Resizable>
      </ImageContiner>
    );
  }
}
