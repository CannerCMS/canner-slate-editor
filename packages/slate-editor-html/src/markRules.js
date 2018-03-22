// @flow
export default function(Tag, markType) {
  return {
    deserialize(el, next) {
      if (markType) {
        return {
          object: 'mark',
          type: markType,
          nodes: next(el.childNodes),
        }
      }
    },
    serialize(obj, children) {
      if (obj.object == 'mark' && obj.type === markType) {
        return <Tag>{children}</Tag>;
      }
    }
  }
}
