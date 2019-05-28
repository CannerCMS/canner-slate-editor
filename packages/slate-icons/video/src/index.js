// @flow
import * as React from "react";
import type { IconProps } from "shared/src/types";
import ToolbarIcon from "@canner/slate-icon-shared";
import VideoPopover from "@keethealth/slate-editor-renderer/lib/components/videoPopover";
import videoNode, {
  DEFAULT as DEFAULT_VIDEO
} from "@keethealth/slate-editor-renderer/lib/videoNode";

export const DEFAULT = DEFAULT_VIDEO;
export const VideoPlugin = opt => {
  const options = Object.assign(
    {
      youtubeType: DEFAULT.youtube,
      dailymotionType: DEFAULT.dailymotion,
      youkuType: DEFAULT.youku,
      vimeoType: DEFAULT.vimeo,
      getId: node => node.data.get("id"),
      getWidth: node => node.data.get("width"),
      getHeight: node => node.data.get("height")
    },
    opt
  );

  return {
    renderNode: props => {
      if (props.node.type === options.youtubeType)
        return videoNode("youtube", options)(props);
      else if (props.node.type === options.dailymotionType)
        return videoNode("dailymotion", options)(props);
      else if (props.node.type === options.youkuType)
        return videoNode("youku", options)(props);
      else if (props.node.type === options.vimeoType)
        return videoNode("vimeo", options)(props);
    }
  };
};

export default class Video extends React.Component<
  IconProps,
  { isEditing: boolean }
> {
  typeName: string;
  constructor(props: IconProps) {
    super(props);
    this.typeName = this.props.type || "video";
    this.state = {
      isEditing: false
    };
  }

  static defaultProps = {
    youtubeType: DEFAULT.youtube,
    dailymotionType: DEFAULT.dailymotion,
    youkuType: DEFAULT.youku,
    vimeoType: DEFAULT.vimeo,
    idKey: "id"
  };

  onClick = (e: Event) => {
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
    const { icon, ...rest } = this.props;
    const onClick = e => this.onClick(e);

    return (
      <div style={{ display: "inline-block" }}>
        <VideoPopover
          {...this.props}
          hidePopover={this.hidePopover}
          isEditing={this.state.isEditing}
        >
          <ToolbarIcon
            type={this.typeName}
            icon={icon || "Video"}
            onClick={onClick}
            isActive={false}
            {...rest}
          />
        </VideoPopover>
      </div>
    );
  }
}
