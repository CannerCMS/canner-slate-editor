// @flow
import React from 'react';
import {EMOJI} from '@canner/slate-constant/lib/inlines';

export default function(opt) {
  const options = Object.assign({
    type: EMOJI
  }, opt)
  
  return {
    deserialize(el) {
      // TODO deserialize emoji
    },
    serialize(obj) {
      if (obj.object == 'inline' && obj.type === options.EMOJI) {
        return <span>{obj.data.getIn(['emoji', 'native']).trim()}</span>;
      }
    }
  }
}
