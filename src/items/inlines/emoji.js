/* eslint-disable no-alert */
import React, {Component, PropTypes} from 'react';
import EmojiMartPicker from 'emoji-mart-picker';
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
    const {selection} = state;
    let newState = state.transform();

    if (
      selection.get('anchorKey') === '1' && selection.get('anchorOffset') === 0 && // eslint-disable-line
      selection.get('focusKey') === '1' && selection.get('focusOffset') === 0) {
      // prevent when emoji in the first char will additional set <br/> bug.
      newState = newState.insertText(' ');
    }

    onChange(
      newState
        .insertInline({
          type: this.displayName,
          isVoid: true,
          data: {code}
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
