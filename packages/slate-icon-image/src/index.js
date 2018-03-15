// @flow
import * as React from 'react';
import type {IconProps} from 'shared/src/types';
import ToolbarIcon from '@canner/slate-icon-shared';
import ImageUpload from '@canner/image-upload';

export default class ImageBlock extends React.Component<IconProps, {isShow: boolean}> {
  typeName: string
  constructor(props: IconProps) {
    super(props);
    this.state = {
      isShow: false
    };

    this.typeName = "image"
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
    const {onChange, change} = this.props;
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
        change.insertBlock({
          type: 'image',
          isVoid: true,
          data: {
            src: value,
            height: ratio ? (height / ratio) : height,
            width: ratio ? (width / ratio) : width}
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
