/* eslint-disable max-len */
import React, {Component, PropTypes} from 'react';
import ToolbarIcon from '../toolbarIcon';
import ImageUplaod from '@canner/image-upload';
import {blocks} from 'slate-plugins';

const insertBlock = blocks.insertBlock;

export default class ImageBlock extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      isShow: false
    };
  }

  displayName = 'image';

  static propTypes = {
    icon: PropTypes.string,
    onChange: PropTypes.func,
    state: PropTypes.object
  };

  onClick(e) {
    e.preventDefault();
    this.setState({
      isShow: true
    });
  }

  hideModal() {
    this.setState({
      isShow: false
    });
  }

  onChange(value) {
    const {onChange, state} = this.props;
    const that = this;
    let image = new Image();

    image.onload = function() {
      const height = image.height;
      const width = image.width;
      let ratio;

      if (height > 400) {
        ratio = height / 400;
      }

      onChange(insertBlock(state, {
        type: 'image',
        isVoid: true,
        data: {
          src: value,
          height: ratio ? (height / ratio) : height,
          width: ratio ? (width / ratio) : width}
      }));

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
          type={this.displayName}
          icon={icon || 'Image'}
          onClick={onClick}
          isActive={false}
          {...rest}
        />
        <ImageUplaod
          onChange={this.onChange}
          closeEditPopup={this.hideModal}
          editPopup={this.state.isShow}/>
      </div>
    );
  }
}
