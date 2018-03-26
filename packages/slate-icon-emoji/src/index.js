// @flow
import * as React from 'react';
import type {IconProps} from 'shared/src/types';
import EmojiMartPicker from 'emoji-mart-picker';
import ToolbarIcon from '@canner/slate-icon-shared';
import emojiNode from '@canner/slate-editor-renderer/lib/emojiNode';

export const EmojiPlugin = {
  renderNode: (props) => {
    if (props.node.type === 'emoji') 
      return emojiNode()(props);
  }
}

export default class Emoji extends React.Component<IconProps> {
  typeName: string
  constructor(props: IconProps) {
    super(props);
    this.typeName = this.props.type || 'emoji';
  }

  onChange = (emoji: Object) => {
    let {change, onChange} = this.props;
    onChange(
      change
        .insertInline({
          type: this.typeName,
          isVoid: true,
          data: {emoji}
        })
        .collapseToStartOfNextText()
        .focus()
    );
  }

  render() {
    const {icon, ...rest} = this.props;

    return (
      <EmojiMartPicker
        onChange={this.onChange}>
        <ToolbarIcon
          type={this.typeName}
          icon={icon || 'Emoji'}
          isActive={false}
          {...rest}
        />
      </EmojiMartPicker>
    );
  }
}
