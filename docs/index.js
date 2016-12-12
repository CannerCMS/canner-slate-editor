/* eslint-disable new-cap */
import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, Raw} from 'slate';
import Icons from '../src';
import EditList from 'slate-edit-list';
import EditBlockquote from 'slate-edit-blockquote';
import TrailingBlock from 'slate-trailing-block';

import "./style.css";
import "./github-markdown.css";

const {
  commonNode,
  commonMark,
  videoNode,
  imageNode,
  emojiNode,
  linkNode
} = Icons.helpers;
const initialState = Raw.deserialize({
  nodes: [
    {
      kind: 'block',
      type: 'paragraph',
      nodes: [
        {
          kind: 'text',
          text: 'A line of text in a paragraph.'
        }
      ]
    }
  ]
}, {terse: true});

const icons = [
  Icons.history.Undo,
  Icons.marks.Bold,
  Icons.marks.Italic,
  Icons.marks.Underline,
  Icons.marks.Code,
  Icons.marks.StrikeThrough,
  Icons.marks.Clean,
  Icons.marks.FontColor,
  Icons.marks.FontBgColor,
  Icons.inlines.Link,
  Icons.inlines.Emoji,
  Icons.blocks.Header1,
  Icons.blocks.Header2,
  Icons.blocks.AlignCenter,
  Icons.blocks.AlignLeft,
  Icons.blocks.AlignRight,
  Icons.blocks.Indent,
  Icons.blocks.Outdent,
  Icons.blocks.Video,
  Icons.blocks.Image,
  Icons.blocks.Blockquote,
  Icons.blocks.OlList,
  Icons.blocks.UlList
];

const LIST_DEFAULT = {
  typeUL: 'list-ul',
  typeOL: 'list-ol',
  typeItem: 'list-item',
  typeDefault: 'paragraph',
  ordered: true
};

const BLOCKQUOTE_DEFAULT = {
  type: 'blockquote',
  typeDefault: 'paragraph'
};

/* eslint-disable react/prop-types, react/display-name */
const schema = {
  nodes: {
    'blockquote': commonNode('blockquote'),
    'list-ul': commonNode('ul'),
    'list-ol': commonNode('ol'),
    'list-item': commonNode('li'),
    'heading1': commonNode('h1'),
    'heading2': commonNode('h2'),
    'heading3': commonNode('h3'),
    'heading4': commonNode('h4'),
    'heading5': commonNode('h5'),
    'heading6': commonNode('h6'),
    'paragraph': commonNode('p'),
    'youtube': videoNode('youtube'),
    'dailymotion': videoNode('dailymotion'),
    'vimeo': videoNode('vimeo'),
    'youku': videoNode('youku'),
    'image': imageNode(),
    'link': linkNode(),
    'emoji': emojiNode()
  },
  marks: {
    bold: commonMark('strong'),
    code: commonMark('code'),
    italic: commonMark('em'),
    underline: commonMark('u'),
    fontColor: commonMark('span', 'fontColor'),
    fontBgColor: commonMark('span', 'fontBgColor'),
    strikethrough: commonMark('s')
  }
};

/* eslint-enable */
class App extends React.Component {
  // Set the initial state when the app is first constructed.
  state = {
    state: initialState
  }

  render() {
    const {state} = this.state;
    const onChange = state => this.setState({state});

    return (
      <div style={{margin: '50px'}}>
        <div className="toolbar">
        {icons.map((Type, i) => {
          return React.createElement(Type, {
            key: i,
            state: state,
            onChange: onChange,
            className: "toolbar-item",
            activeClassName: "toolbar-item-active",
            activeStrokeClassName: "ql-stroke-active",
            activeFillClassName: "ql-fill-active",
            activeThinClassName: "ql-thin-active",
            activeEvenClassName: "ql-even-active"
          });
        })}
        </div>
        <div className="editor markdown-body">
          <Editor
            state={state}
            schema={schema}
            onChange={onChange}
            plugins={[
              EditList(LIST_DEFAULT),
              EditBlockquote(BLOCKQUOTE_DEFAULT),
              TrailingBlock({type: 'paragraph'})
            ]}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>
, document.getElementById('root'));
