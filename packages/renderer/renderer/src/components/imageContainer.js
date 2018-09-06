// @flow

import * as React from "react";
import type { Change } from "slate";
import type { nodeProps } from "../type";

import { Tooltip } from "antd";
import FaTrashO from "react-icons/lib/fa/trash-o";
import FaEdit from "react-icons/lib/fa/edit";
import ImagePopover from "./imagePopover";
import { ImageNodeComponent, Toolbar, ToolbarItem } from "./image";

type Props = nodeProps & {
  change: Change,
  readOnly: Boolean,
  edit: Event => void,
  isEditing: boolean
};

type State = {};

export default class ImageContainer extends React.Component<Props, State> {
  remove = () => {
    const { editor, node } = this.props;
    editor.change(change => change.removeNodeByKey(node.key));
  };

  render() {
    const {
      node,
      readOnly,
      isSelected,
      getSrc,
      edit,
      editor,
      width,
      height,
      hidePopover,
      isEditing
    } = this.props;
    const src = getSrc(node);
    const active = isSelected || readOnly;

    return (
      <span>
        <ImageNodeComponent width={width} height={height} active={active}>
          <Toolbar active={active}>
            <ToolbarItem>
              <Tooltip title="Remove">
                <FaTrashO
                  onMouseDown={e => e.preventDefault()}
                  onClick={this.remove}
                />
              </Tooltip>
            </ToolbarItem>
            <ToolbarItem>
              <Tooltip title="Edit size">
                <ImagePopover
                  change={editor.state.value.change()}
                  onChange={editor.change}
                  target={this.target}
                  width={width}
                  height={height}
                  hidePopover={hidePopover}
                  isEditing={isEditing}
                >
                  <FaEdit
                    onMouseDown={e => e.preventDefault()}
                    onClick={edit}
                  />
                </ImagePopover>
              </Tooltip>
            </ToolbarItem>
          </Toolbar>
          <img src={src} />
        </ImageNodeComponent>
      </span>
    );
  }
}
