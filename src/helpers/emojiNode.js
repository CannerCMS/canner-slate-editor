import React, {PropTypes} from 'react';
import StudpidEmoji from '@canner/emoji-mart/dist/studpid-emoji';

/* eslint-disable require-jsdoc */
export default function() {
  const EmojiComponent = ({attributes, node}) => {
    return (
      <div
        {...attributes}
        style={{display: 'inline-block'}}
        data-slate-type="emoji">
        <StudpidEmoji emojiData={node.data.get('emojiData')} size={18}/>
      </div>
    );
  };

  EmojiComponent.displayName = 'emoji-node';

  EmojiComponent.propTypes = {
    attributes: PropTypes.object,
    children: PropTypes.any,
    node: PropTypes.any
  };

  return EmojiComponent;
}
