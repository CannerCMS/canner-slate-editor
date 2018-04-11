// @flow
import * as React from 'react';
import type {IconProps} from 'shared/src/types';
import ToolbarIcon, {nodeAttrs} from '@canner/slate-icon-shared';
import ImageUpload from '@canner/image-upload';
import {IMAGE} from '@canner/slate-constant/lib/inlines';
import imageNode from '@canner/slate-editor-renderer/lib/imageNode';

export const ImagePlugin = (opt) => {
  const options = Object.assign({
    type: IMAGE,
    getSrc: (node) => node.data.get('src'),
    getWidth: (node) => node.data.get('width'),
    getHeight: (node) => node.data.get('height'),
    ...nodeAttrs
  }, opt);

  return {
    renderNode: (props) => {
      if (props.node.type === options.type) 
        return imageNode(options)(props);
    }
  }
}

export default class ImageInline extends React.Component<IconProps, {isShow: boolean}> {
  typeName: string
  constructor(props: IconProps) {
    super(props);
    this.state = {
      isShow: false
    };

    this.typeName = this.props.type || IMAGE
  }

  static defaultProps = {
    imageSrcKey: 'src',
    imageHeightKey: 'height',
    imageWidthKey: 'width'
  }

  onClick = (e: Event) => {
    e.preventDefault();
    this.setState({
      isShow: true
    });
  }

  hideModal = () => {
    this.setState({
      isShow: false
    });
  }

  onChange = (value: string | Array<string>) => {
    const {onChange, change, imageSrcKey, imageHeightKey, imageWidthKey} = this.props;
    const that = this;
    let image = new Image();

    image.onload = function() {
      const height = image.height;
      const width = image.width;
      let ratio;

      if (height > 400) {
        ratio = height / 400;
      }

      onChange(
        change.insertInline({
          type: 'image',
          isVoid: true,
          data: {
            [imageSrcKey]: value,
            [imageHeightKey]: ratio ? (height / ratio) : height,
            [imageWidthKey]: ratio ? (width / ratio) : width}
        })
      );

      that.hideModal();
    };

    image.src = value[0];
  }

  render() {
    const {icon, ...rest} = this.props;
    const onClick = e => this.onClick(e);

    return (
      <div style={{display: 'inline-block'}}>
        <ToolbarIcon
          type={this.typeName}
          icon={icon || 'Image'}
          onClick={onClick}
          isActive={false}
          {...rest}
        />
        <ImageUpload
          onChange={this.onChange}
          closeEditPopup={this.hideModal}
          editPopup={this.state.isShow}/>
      </div>
    );
  }
}
