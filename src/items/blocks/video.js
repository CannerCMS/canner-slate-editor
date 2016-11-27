/* eslint-disable no-alert */
import React, {Component, PropTypes} from 'react';
import ToolbarIcon from '../toolbarIcon';
import {blocks} from 'slate-plugins';
import videoParser from 'js-video-url-parser';
const insertBlock = blocks.insertBlock;

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  displayName = this.props.type || 'video';

  static propTypes = {
    state: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    icon: PropTypes.string,
    type: PropTypes.string
  };

  onClick(e) {
    let {state, onChange} = this.props;
    e.preventDefault();
    const href = window.prompt('Enter the video URL of the link (support Vimeo, Youtube, Dailymotion, Youku):'); // eslint-disable-line max-len
    if (href) {
      const videoObj = videoParser.parse(href);
      let slateObj;

      if (videoObj && videoObj.provider === 'youtube') {
        slateObj = {type: 'youtube', isVoid: true, data: {id: videoObj.id}};
      } else if (videoObj && videoObj.provider === 'dailymotion') {
        slateObj = {type: 'dailymotion', isVoid: true, data: {id: videoObj.id}};
      } else if (videoObj && videoObj.provider === 'vimeo') {
        slateObj = {type: 'vimeo', isVoid: true, data: {id: videoObj.id}};
      } else if (videoObj && videoObj.provider === 'youku') {
        slateObj = {type: 'youku', isVoid: true, data: {id: videoObj.id}};
      } else {
        alert('URL not support');
      }

      onChange(insertBlock(state, slateObj));
    }
  }

  render() {
    const {icon, ...rest} = this.props;
    const onClick = e => this.onClick(e);

    return (
      <ToolbarIcon
        type={this.displayName}
        icon={icon || 'Video'}
        onClick={onClick}
        isActive={false}
        {...rest}
      />
    );
  }
}
