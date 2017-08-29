/* eslint-disable no-alert */
import React, {Component, PropTypes} from 'react';
import EmojiMartPicker from 'emoji-mart-picker';
import {getData} from '@canner/emoji-mart';
import ToolbarIcon from '../toolbarIcon';

export default class Emoji extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  displayName = this.props.type || 'emoji';

  static propTypes = {
    state: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    icon: PropTypes.string,
    type: PropTypes.string
  };

  onChange(code) {
    let {state, onChange} = this.props;
    let newState = state.transform();
    const emojiData = getData(code);
    onChange(
      newState
        .insertInline({
          type: this.displayName,
          isVoid: true,
          data: {code, emojiData}
        })
        .apply()
    );
  }

  render() {
    const {icon, ...rest} = this.props;

    return (
      <EmojiMartPicker
        onChange={this.onChange}>
        <ToolbarIcon
          type={this.displayName}
          icon={icon || 'Emoji'}
          isActive={false}
          {...rest}
        />
      </EmojiMartPicker>
    );
  }
}
