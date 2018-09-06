// @flow
import * as React from "react";
import type { IconProps } from "shared/src/types";
import { Popover } from "antd";
import ToolbarIcon from "@canner/slate-icon-shared";
import { Container } from "@canner/image-upload";
import { IntlProvider, FormattedMessage, addLocaleData } from "react-intl";
import { IMAGE } from "@canner/slate-constant/lib/inlines";
import imageNode from "@canner/slate-editor-renderer/lib/imageNode";

import enLocale from "@canner/image-upload/lib/locale/en";
import en from "react-intl/locale-data/en";
import zh from "react-intl/locale-data/zh";

addLocaleData([...en, ...zh]);

export const ImagePlugin = opt => {
  const options = Object.assign(
    {
      type: IMAGE,
      getSrc: node => node.data.get("src"),
      getWidth: node => node.data.get("width"),
      getHeight: node => node.data.get("height")
    },
    opt
  );

  return {
    renderNode: props => {
      if (props.node.type === options.type) return imageNode(options)(props);
    }
  };
};

export default class ImageInline extends React.Component<
  IconProps,
  { isShow: boolean }
> {
  typeName: string;
  constructor(props: IconProps) {
    super(props);
    this.state = {
      isShow: false
    };

    this.typeName = this.props.type || IMAGE;
  }

  static defaultProps = {
    imageSrcKey: "src",
    imageHeightKey: "height",
    imageWidthKey: "width"
  };

  onClick = (e: Event) => {
    e.preventDefault();
    this.setState({
      isShow: true
    });
  };

  hidePopover = () => {
    this.setState({
      isShow: false
    });
  };

  handleClickChange = (visible: boolean) => {
    if (!visible) this.hidePopover();
  };

  onChange = (value: string | Array<string>) => {
    const {
      onChange,
      change,
      imageSrcKey,
      imageHeightKey,
      imageWidthKey
    } = this.props;
    const that = this;
    let image = new Image();

    image.onload = function() {
      const height = image.height;
      const width = image.width;
      let ratio;

      if (width > 500) {
        ratio = width / 500;
      }

      onChange(
        change
          .insertInline({
            type: "image",
            isVoid: true,
            data: {
              [imageSrcKey]: value,
              [imageHeightKey]: ratio ? height / ratio : height,
              [imageWidthKey]: ratio ? width / ratio : width
            }
          })
          .collapseToStartOfNextText()
          .focus()
      );

      that.hidePopover();
    };

    image.src = value[0];
  };

  render() {
    const {
      icon,
      serviceConfig,
      galleryConfig,
      multiple,
      ...rest
    } = this.props;
    const { isShow } = this.state;
    const onClick = e => this.onClick(e);
    const content = (
      <IntlProvider locale={"en"} defaultLocale="en" messages={enLocale}>
        <Container
          serviceConfig={serviceConfig}
          galleryConfig={galleryConfig}
          multiple={multiple}
          onChange={this.onChange}
          closeEditPopup={this.hidePopover}
          editPopup={isShow}
        />
      </IntlProvider>
    );

    return (
      <div style={{ display: "inline-block" }}>
        <Popover
          visible={isShow}
          title="Add Image"
          placement="bottom"
          content={content}
          onVisibleChange={this.handleClickChange}
        >
          <ToolbarIcon
            type={this.typeName}
            icon={icon || "Image"}
            onClick={onClick}
            isActive={false}
            {...rest}
          />
        </Popover>
      </div>
    );
  }
}
