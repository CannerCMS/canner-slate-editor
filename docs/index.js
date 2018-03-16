// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import {Editor} from 'slate-react';
import {Value} from 'slate';
import renderNodesFn from 'packages/slate-icon-rendernodes';
import {AlignCenter, AlignLeft, AlignRight} from 'packages/slate-icon-align';
import Blockquote from 'packages/slate-icon-blockquote';
import EditList from 'slate-edit-list';
import EditBlockquote from 'slate-edit-blockquote';
import TrailingBlock from 'slate-trailing-block';

import "./style.css";
import "./github-markdown.css";

const {
  commonNode
} = renderNodesFn;

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'A line of text in a paragraph.',
              },
            ],
          },
        ],
      },
    ],
  },
});

const icons = [
  AlignCenter,
  AlignLeft,
  AlignRight,
  Blockquote
];

// const LIST_DEFAULT = {
//   typeUL: 'list-ul',
//   typeOL: 'list-ol',
//   typeItem: 'list-item',
//   typeDefault: 'paragraph',
//   ordered: true
// };

// const BLOCKQUOTE_DEFAULT = {
//   type: 'blockquote',
//   typeDefault: 'paragraph'
// };

// const schema = {
//   nodes: {
//     'blockquote': commonNode('blockquote'),
//     'list-ul': commonNode('ul'),
//     'list-ol': commonNode('ol'),
//     'list-item': commonNode('li'),
//     'heading1': commonNode('h1'),
//     'heading2': commonNode('h2'),
//     'heading3': commonNode('h3'),
//     'heading4': commonNode('h4'),
//     'heading5': commonNode('h5'),
//     'heading6': commonNode('h6'),
//     'paragraph': commonNode('p'),
//     'youtube': videoNode('youtube'),
//     'dailymotion': videoNode('dailymotion'),
//     'vimeo': videoNode('vimeo'),
//     'youku': videoNode('youku'),
//     'image': imageNode(),
//     'link': linkNode(),
//     'emoji': emojiNode()
//   },
//   marks: {
//     bold: commonMark('strong'),
//     code: commonMark('code'),
//     italic: commonMark('em'),
//     underline: commonMark('u'),
//     fontColor: commonMark('span', 'fontColor'),
//     fontBgColor: commonMark('span', 'fontBgColor'),
//     strikethrough: commonMark('s')
//   }
// };

/* eslint-enable */
class App extends React.Component {
  // Set the initial state when the app is first constructed.
  state = {
    value: initialValue
  }

  render() {
    const {value} = this.state;
    const onChange = ({value}) => this.setState({value});

    return (
      <div style={{margin: '50px'}}>
        <div className="toolbar">
          {icons.map((Type, i) => {
            return React.createElement(Type, {
              key: i,
              change: value.change(),
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
            value={value}
            onChange={onChange}
            renderNode={renderNode}
          />
        </div>
      </div>
    );
  }
}

function renderNode(props) {
  switch (props.node.type) {
    case 'paragraph':
      return commonNode('p')(props);
    case 'blockquote':
      return commonNode('blockquote')(props)
    default:
      return commonNode('p')(props);
  }
}

ReactDOM.render(
  <App/>
, document.getElementById('root'));
