// @flow
import * as React from 'react';
import type {nodeProps} from './type';
import {Emoji} from 'emoji-mart';

export default function() {
  const EmojiComponent = ({attributes, node}: nodeProps) => {
    return (
      <span
        {...attributes}
        style={{display: 'inline-block'}}
        data-slate-type="emoji">
        <Emoji emoji={node.data.get('emoji')} size={18}/>
      </span>
    );
  };

  EmojiComponent.displayName = 'emoji-node';

  return EmojiComponent;
}
