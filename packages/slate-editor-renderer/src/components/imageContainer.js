// @flow

import * as React from "react";
import type { Change } from "slate";
import type { nodeProps } from "./type";

import { Tooltip } from "antd";
import FaTrashO from "react-icons/lib/fa/trash-o";
import FaEdit from 'react-icons/lib/fa/edit';
import {
  ImageNodeInActive,
  ImageNodeActive,
  Toolbar,
  ToolbarItem
} from "./image";

type Props = nodeProps & {
  change: Change,
  readOnly: Boolean,
  edit: (Event) => void
};

export default class ImageContainer extends React.Component<
  Props
> {

  remove = () => {
    const { editor, node } = this.props;
    editor.change(change => change.removeNodeByKey(node.key));
  };

  render() {
    const { node, readOnly, isSelected, getSrc, edit, width, height } = this.props;
    const src = getSrc(node);

    return (
      <span>
        {
          !isSelected || readOnly ? (
            <ImageNodeInActive width={width} height={height}>
              <img src={src} />
            </ImageNodeInActive>
          ) : (
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
                <ToolbarItem>
                  <Tooltip title="Edit size">
                    <FaEdit
                      onMouseDown={e => e.preventDefault()}
                      onClick={edit}/>
                  </Tooltip>
                </ToolbarItem>
              </Toolbar>
              <img src={src} />
            </ImageNodeActive>
          )
        }
      </span>
    );
  }
}
