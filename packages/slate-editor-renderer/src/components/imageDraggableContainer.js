// @flow

import * as React from "react";
import type { Change } from "slate";
import type { nodeProps } from "./type";

import { Tooltip } from "antd";
// import { Resizable } from "react-resizable";
import FaTrashO from "react-icons/lib/fa/trash-o";
// import FaEdit from 'react-icons/lib/fa/edit';
import {
  ImageNodeInActive,
  ImageNodeActive,
  Toolbar,
  ToolbarItem
} from "./image";
import ImageModal from "./imageModal";

type Props = nodeProps & {
  change: Change,
  editor: Object,
  readOnly: Boolean
};

type State = {
  width: ?number,
  height: ?number,
  isShow: boolean
};
export default class ImageDraggableContainer extends React.Component<
  Props,
  State
> {
  constructor(props) {
    super(props);

    // this.onResizeStop = this.onResizeStop.bind(this);
    // this.onResize = this.onResize.bind(this);

    this.state = {
      width: null,
      height: null,
      isShow: false
    };
  }

  // onResizeStop(e, data) {
  //   const { editor } = this.props;
  //   const { width, height } = data.size;

  // editor.change(change =>
  //   change.call(inlineAddData, {
  //     data: { width, height }
  //   })
  // );
  // }

  // onResize(e, data) {
  //   const { width, height } = data.size;
  //   this.setState({
  //     width,
  //     height
  //   });
  // }

  remove = () => {
    const { editor, node } = this.props;
    editor.change(change => change.removeNodeByKey(node.key));
  };

  edit = e => {
    e.preventDefault();
    this.setState({
      isShow: true
    });
  };

  hideModal = () => {
    this.setState({
      isShow: false
    });
  };

  render() {
    const { node, readOnly, isSelected, getSrc, editor } = this.props;
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
        <ImageNodeInActive width={width} height={height}>
          <img src={src} />
        </ImageNodeInActive>
      );
    }

    return (
      <span>
        <ImageNodeActive width={width} height={height}>
          <Toolbar>
            <ToolbarItem>
              <Tooltip title="Remove">
                <FaTrashO
                  onMouseDown={e => e.preventDefault()}
                  onClick={this.remove}
                />
              </Tooltip>
            </ToolbarItem>
            {/* <ToolbarItem>
              <Tooltip title="Edit size">
                <FaEdit
                  onMouseDown={e => e.preventDefault()}
                  onClick={this.edit}/>
              </Tooltip>
            </ToolbarItem> */}
          </Toolbar>
          <img src={src} />
        </ImageNodeActive>
        <ImageModal
          onChange={editor.onChange}
          node={node}
          width={width}
          height={height}
          hideModal={this.hideModal}
          isShow={this.state.isShow}
        />
      </span>
    );
  }
}
