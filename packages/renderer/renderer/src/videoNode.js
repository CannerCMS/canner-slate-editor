// @flow
import * as React from "react";
import type { Change } from "slate";
import type { nodeProps } from "./type";

import { Tooltip } from "antd";
// import {Resizable} from 'react-resizable';
import FaTrashO from "react-icons/lib/fa/trash-o";
import FaEdit from "react-icons/lib/fa/edit";
import FaExternal from "react-icons/lib/fa/external-link";
import VideoPopover from "./components/videoPopover";
import { ImageNodeComponent, Toolbar, ToolbarItem } from "./components/image";

import "react-resizable/css/styles.css";

export const DEFAULT = {
  youtube: "youtube",
  dailymotion: "dailymotion",
  youku: "youku",
  vimeo: "vimeo"
};

export default function(type, options) {
  const NodeComponent = ({ ...props }) => {
    return <VideoNode {...props} {...options} type={type} />;
  };
  return NodeComponent;
}

type Props = nodeProps & {
  change: Change,
  editor: Object,
  readOnly: Boolean
};

type State = {
  width: ?number,
  height: ?number,
  isEditing: boolean
};

class VideoNode extends React.Component<Props, State> {
  state = {
    width: null,
    height: null,
    isEditing: false
  };

  static defaultProps = {
    youtubeType: DEFAULT.youtube,
    dailymotionType: DEFAULT.dailymotion,
    youkuType: DEFAULT.youku,
    vimeoType: DEFAULT.vimeo,
    idKey: "id"
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.isEditing && !(!nextState.isEditing && this.state.isEditing))
      return false;
    return true;
  }

  remove = () => {
    const { editor, node } = this.props;
    editor.change(change => change.removeNodeByKey(node.key));
  };

  edit = e => {
    e.preventDefault();
    this.setState({
      isEditing: true
    });
  };

  hidePopover = () => {
    this.setState({
      isEditing: false
    });
  };

  render() {
    const {
      node,
      type,
      attributes,
      children,
      editor,
      readOnly,
      isSelected,
      getId,
      getWidth,
      getHeight,
      youtubeType,
      dailymotionType,
      youkuType,
      vimeoType,
      idKey
    } = this.props;
    let link = "";
    const id = getId(node);
    const width = this.state.width || getWidth(node) || 560;
    const height = this.state.height || getHeight(node) || 315;
    const active = isSelected || readOnly;
    if (type === "youtube") {
      link = `https://www.youtube.com/embed/${id}`;
    } else if (type === "dailymotion") {
      link = `https://www.dailymotion.com/embed/video/${id}`;
    } else if (type === "vimeo") {
      link = `https://player.vimeo.com/video/${id}`;
    } else if (type === "youku") {
      link = `https://player.youku.com/embed/${id}`;
    }

    return (
      <span {...attributes}>
        <ImageNodeComponent width={width} height={height} active={active}>
          <Toolbar active={active}>
            <ToolbarItem>
              <Tooltip title="Open in new window">
                <FaExternal
                  onMouseDown={e => e.preventDefault()}
                  onClick={() => {
                    const win = window.open(link, "_blank");
                    win.focus();
                  }}
                />
              </Tooltip>
            </ToolbarItem>
            <ToolbarItem>
              <Tooltip title="Edit">
                <VideoPopover
                  youkuType={youkuType}
                  youtubeType={youtubeType}
                  vimeoType={vimeoType}
                  dailymotionType={dailymotionType}
                  idKey={idKey}
                  onChange={editor.onChange}
                  change={editor.state.value.change()}
                  initialValue={link}
                  node={node}
                  width={width}
                  height={height}
                  hidePopover={this.hidePopover}
                  isEditing={this.state.isEditing}
                >
                  <FaEdit
                    onMouseDown={e => e.preventDefault()}
                    onClick={this.edit}
                  />
                </VideoPopover>
              </Tooltip>
            </ToolbarItem>
            <ToolbarItem>
              <Tooltip title="Remove">
                <FaTrashO
                  onMouseDown={e => e.preventDefault()}
                  onClick={this.remove}
                />
              </Tooltip>
            </ToolbarItem>
          </Toolbar>
          <VideoLink link={link} />
        </ImageNodeComponent>
        {children}
      </span>
    );
  }
}

class VideoLink extends React.Component<{ link: ?string }> {
  shouldComponentUpdate(nextProps: { link: ?string }) {
    if (this.props.link === nextProps.link) return false;
    return true;
  }

  render() {
    const { link } = this.props;
    return <iframe style={{ pointerEvents: "none" }} src={link} />;
  }
}
