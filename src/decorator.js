// @flow
// $FlowFixMe
import { Mark, Data } from 'slate';
// $FlowFixMe
import Prism from 'prismjs';
import 'prismjs/components/prism-markdown';

type Options = {
  strict?: boolean,
};
const defaultOptions = {
  strict: true,
};
function getDecorator({ strict = true }: Options) {
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
  return markdownDecorator;
}

/**
 * Define a decorator for markdown styles.
 *
 * @param {Text} text
 * @param {Block} block
 */

function markdownDecorator(text: any, block: any) {
  const characters = text.characters.asMutable();
  const language = 'markdown';
  const string = text.text;
  const grammar = Prism.languages[language];
  const tokens = Prism.tokenize(string, grammar);
  addMarks(characters, tokens);
  return characters.asImmutable();
}

function addMarks(characters, tokens, offset = 0) {
  for (const token of tokens) {
    if (typeof token == 'string') {
      offset += token.length;
      continue;
    }

    const { content, length, type } = token;
    let level;
    if (type === 'title') {
      const hashes = content.find(
        innerToken => innerToken.type === 'punctuation'
      );
      level = hashes.length;
    }
    const mark = Mark.create({ type, data: Data.create({ level }) });

    for (let i = offset; i < offset + length; i++) {
      let char = characters.get(i);
      let { marks } = char;
      marks = marks.add(mark);
      char = char.set('marks', marks);
      characters.set(i, char);
    }

    if (Array.isArray(content)) {
      addMarks(characters, content, offset);
    }

    offset += length;
  }
}

export default getDecorator;
