/* eslint-disable max-len */
import React, {Component, PropTypes} from 'react';
import ToolbarIcon from '../toolbarIcon';
import VideoModal from '../../helpers/videoModal';

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.state = {
      isShow: false
    };
  }

  displayName = this.props.type || 'video';

  static propTypes = {
    icon: PropTypes.string,
    type: PropTypes.string
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

  render() {
    const {icon, ...rest} = this.props;
    const onClick = e => this.onClick(e);

    return (
      <div style={{display: 'inline-block'}}>
        <ToolbarIcon
          type={this.displayName}
          icon={icon || 'Video'}
          onClick={onClick}
          isActive={false}
          {...rest}
        />
        <VideoModal {...this.props} hideModal={this.hideModal} isShow={this.state.isShow}/>
      </div>
    );
  }
}
