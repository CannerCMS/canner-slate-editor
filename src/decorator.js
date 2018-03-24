// @flow
import Prism from 'prismjs';
import 'prismjs/components/prism-markdown';

type Options = {
  strict?: boolean,
};
const defaultOptions = {
  strict: true,
};
function decorateNode({ strict = true }: Options) {
  if (strict) {
    // Delete all highlighting inherited from HTML
    Prism.languages.markdown = Object.assign({}, Prism.languages.markdown, {
      doctype: undefined,
      comment: undefined,
      prolog: undefined,
      script: undefined,
      style: undefined,
      entity: undefined,
      cdata: undefined,
      tag: undefined,
    });
  }
  // Prism.languages.markdown.code[0].pattern = /^\`{3}(?:\r?\n|\r)(?:(?:\r?\n|\r)|.*)*^\`{3}/m;
  return decorateMdNode;
}

/**
 * Define a decorator for markdown styles.
 *
 * @param {Text} text
 * @param {Block} block
 */

function decorateMdNode(node) {
  if (node.object != 'block') return

  const string = node.text
  const texts = node.getTexts().toArray()
  const grammar = Prism.languages.markdown
  const tokens = Prism.tokenize(string, grammar)
  const decorations = []
  let startText = texts.shift()
  let endText = startText
  let startOffset = 0
  let endOffset = 0
  let start = 0

  function getLength(token) {
    if (typeof token == 'string') {
      return token.length
    } else if (typeof token.content == 'string') {
      return token.content.length
    } else {
      return token.content.reduce((l, t) => l + getLength(t), 0)
    }
  }

  for (const token of tokens) {
    startText = endText
    startOffset = endOffset

    const length = getLength(token)
    const end = start + length

    let available = startText.text.length - startOffset
    let remaining = length

    endOffset = startOffset + remaining

    while (available < remaining) {
      endText = texts.shift()
      remaining = length - available
      available = endText.text.length
      endOffset = remaining
    }


    if (typeof token != 'string') {
      let data = {};
      if (token.type === 'title') {
        const hashes = token.content.find(
          innerToken => innerToken.type === 'punctuation'
        );
        data.level = hashes.length;
      }
      const range = {
        anchorKey: startText.key,
        anchorOffset: startOffset,
        focusKey: endText.key,
        focusOffset: endOffset,
        marks: [{ type: token.type, data }],
      }

      decorations.push(range)
    }

    start = end
  }

  return decorations
}

export default decorateNode;
