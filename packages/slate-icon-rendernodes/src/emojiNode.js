// @flow
import * as React from 'react';
import type {nodeProps} from './type';
import {Emoji} from 'emoji-mart';

export default function() {
  const EmojiComponent = ({attributes, node}: nodeProps) => {
    return (
      <div
        {...attributes}
        style={{display: 'inline-block'}}
        data-slate-type="emoji">
        <Emoji emoji={node.data.get('emojiData')} size={18}/>
      </div>
    );
  };

  EmojiComponent.displayName = 'emoji-node';

  return EmojiComponent;
}
