import React, {PropTypes} from 'react';
import {Emoji} from '@canner/emoji-mart';

/* eslint-disable require-jsdoc */
export default function() {
  const EmojiComponent = ({attributes, node}) => {
    return (
      <div
        {...attributes}
        style={{display: 'inline-block'}}
        data-slate-type="emoji">
        <Emoji emoji={node.data.get('code').colons} size={18}/>
      </div>
    );
  };

  EmojiComponent.displayName = `emoji-node`;

  EmojiComponent.propTypes = {
    attributes: PropTypes.object,
    children: PropTypes.any,
    node: PropTypes.any
  };

  return EmojiComponent;
}
