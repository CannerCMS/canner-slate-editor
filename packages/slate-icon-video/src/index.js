// @flow
import * as React from 'react';
import type {IconProps} from 'shared/src/types';
import ToolbarIcon from '@canner/slate-icon-shared';
import VideoModal from './videoModal';

export default class Video extends React.Component<IconProps, {isShow: boolean}> {
  typeName: string
  constructor(props: IconProps) {
    super(props);
    this.typeName = this.props.type || 'video';
    this.state = {
      isShow: false
    };
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

  render() {
    const {icon, ...rest} = this.props;
    const onClick = e => this.onClick(e);

    return (
      <div style={{display: 'inline-block'}}>
        <ToolbarIcon
          type={this.typeName}
          icon={icon || 'Video'}
          onClick={onClick}
          isActive={false}
          {...rest}
        />
        {/* $FlowFixMe */}
        <VideoModal {...this.props} hideModal={this.hideModal} isShow={this.state.isShow}/>
      </div>
    );
  }
}
