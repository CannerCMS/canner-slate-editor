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
        return <Tag>{children}</Tag>;
      }
    }
  }
}
