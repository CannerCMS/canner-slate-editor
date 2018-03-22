// @flow
export default function(Tag, blockType) {
  return {
    deserialize(el, next) {
      if (blockType) {
        return {
          object: 'block',
          type: blockType,
          nodes: next(el.childNodes),
        }
      }
    },
    serialize(obj, children) {
      if (obj.object == 'block' && obj.type === blockType) {
        const align = obj.data.get('align');
        const indent = obj.data.get('indent') || 0;
        const lineHeight = obj.data.get('lineHeight');
        let style;
        
        if (Tag === 'ul' || Tag === 'ol') {
          style = {textAlign: align, lineHeight};
        } else {
          style = {textAlign: align, lineHeight, paddingLeft: `${3 * indent}em`};
        }

        return (
          <Tag style={style}>
            {children}
          </Tag>
        );
      }
    }
  }
}
