// @flow
/**
 * Most of this was stolen from https://github.com/ianstormtaylor/slate/blob/460498b5ddfcecee7439eafe4f4d31cacde69f41/examples/markdown-preview/index.js
 */
import React from 'react';
import decorateNode from './decorator';
import Prism from 'prismjs'

import {
  Title,
  Bold,
  Italic,
  Underline,
  Punctuation,
  Code,
  List,
  Hr,
  Url,
} from './components';

// eslint-disable-next-line
;Prism.languages.markdown=Prism.languages.extend("markup",{}),Prism.languages.insertBefore("markdown","prolog",{blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},code:[{pattern:/^(?: {4}|\t).+/m,alias:"keyword"},{pattern:/``.+?``|`[^`\n]+`/,alias:"keyword"}],title:[{pattern:/\w+.*(?:\r?\n|\r)(?:==+|--+)/,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#+.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:/(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,lookbehind:!0,inside:{punctuation:/^\*\*|^__|\*\*$|__$/}},italic:{pattern:/(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,lookbehind:!0,inside:{punctuation:/^[*_]|[*_]$/}},url:{pattern:/!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,inside:{variable:{pattern:/(!?\[)[^\]]+(?=\]$)/,lookbehind:!0},string:{pattern:/"(?:\\.|[^"\\])*"(?=\)$)/}}}}),Prism.languages.markdown.bold.inside.url=Prism.util.clone(Prism.languages.markdown.url),Prism.languages.markdown.italic.inside.url=Prism.util.clone(Prism.languages.markdown.url),Prism.languages.markdown.bold.inside.italic=Prism.util.clone(Prism.languages.markdown.italic),Prism.languages.markdown.italic.inside.bold=Prism.util.clone(Prism.languages.markdown.bold); // prettier-ignore

type Classnames =
  | 'title'
  | 'bold'
  | 'italic'
  | 'punctuation'
  | 'underline'
  | 'code'
  | 'list'
  | 'hr'
  | 'url';

type Options = {
  sizes?: Array<string>,
  classnames?: {
    [key: Classnames]: string,
  },
  strict?: boolean,
};

const MarkdownPlugin = (options: Options = {}) => {
  const sizes = options.sizes || [
    '2.441em',
    '1.953em',
    '1.563em',
    '1.25em',
    '1em',
  ];

  const classnames = options.classnames || {};

  const strict = options.strict;

  return {
    renderMark: (props) => {
      const { mark } = props;
      switch (mark.type) {
        case 'bold':
          return (
            <Bold
              {...props.attributes}
              className={classnames.bold}
            >
              {props.children}
            </Bold>
          );
        case 'code':
          return (
            <Code
              {...props.attributes}
              className={classnames.code}
            >
              {props.children}
            </Code>
          );
        case 'italic':
          return (
            <Italic
              {...props.attributes}
              className={classnames.italic}
            >
              {props.children}
            </Italic>
          );
        case 'underlined':
          return (
            <Underline
              {...props.attributes}
              className={classnames.underline}
            >
              {props.children}
            </Underline>
          );
        case 'title': {
          const { attributes, children, mark: { data } } = props;
          const level = data.get('level');
          const fontSize =
            (level && sizes[level - 1]) || sizes[sizes.length - 1];
          return (
            <Title
              {...attributes}
              className={classnames.title}
              fontSize={fontSize}
            >
              {children}
            </Title>
          );
        }
        case 'punctuation': {
          return (
            <Punctuation
              {...props.attributes}
              className={classnames.punctuation}
            >
              {props.children}
            </Punctuation>
          );
        }
        case 'list': {
          return (
            <List
              {...props.attributes}
              className={classnames.list}
            >
              {props.children}
            </List>
          );
        }
        case 'hr': {
          return (
            <Hr
              {...props.attributes}
              className={classnames.hr}
            >
              {props.children}
            </Hr>
          );
        }
        case 'url': {
          return (
            <Url
              {...props.attributes}
              className={classnames.url}
            >
              {props.children}
            </Url>
          );
        }
      }
    },
    decorateNode: decorateNode({strict})
  };
};

export default MarkdownPlugin;
