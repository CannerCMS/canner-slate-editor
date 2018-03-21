// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import {Editor} from 'slate-react';
import {Value} from 'slate';
import rendererFn from 'packages/slate-icon-renderer';
import {AlignCenter, AlignLeft, AlignRight} from 'packages/slate-icon-align';
import Blockquote from 'packages/slate-icon-blockquote';
import Bold from 'packages/slate-icon-bold';
import Clean from 'packages/slate-icon-clean';
import Code from 'packages/slate-icon-code';
import Emoji from 'packages/slate-icon-emoji';
import FontBgColor from 'packages/slate-icon-fontBgColor';
import FontColor from 'packages/slate-icon-fontColor';
import {Header1, Header2} from 'packages/slate-icon-header';
import Image from 'packages/slate-icon-image';
import {Indent, Outdent} from 'packages/slate-icon-indent';
import Italic from 'packages/slate-icon-italic';
import Link from 'packages/slate-icon-link';
import {OlList, UlList} from 'packages/slate-icon-list';
import StrikeThrough from 'packages/slate-icon-strikethrough';
import Underline from 'packages/slate-icon-underline';
import Undo from 'packages/slate-icon-undo';
import Video from 'packages/slate-icon-video';

// select
import FontSize from 'packages/slate-select-fontsize';

import {DEFAULT as DEFAULTLIST} from '@canner/slate-helper-block-list';
import {DEFAULT as DEFAULTBLOCKQUOTE} from '@canner/slate-helper-block-quote';
import EditList from 'slate-edit-list';
import EditBlockquote from 'slate-edit-blockquote';


import "./style.css";
import "./github-markdown.css";

const {
  commonNode,
  commonMark,
  emojiNode,
  imageNode,
  linkNode,
  videoNode
} = rendererFn;

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

const selectors = [
  FontSize
]

const icons = [
  AlignCenter,
  AlignLeft,
  AlignRight,
  Blockquote,
  Bold,
  Clean,
  Code,
  Emoji,
  FontBgColor,
  FontColor,
  Header1,
  Header2,
  Image,
  Indent,
  Outdent,
  Italic,
  Link,
  OlList,
  UlList,
  StrikeThrough,
  Underline,
  Undo,
  Video
];

const plugins = [
  EditList(DEFAULTLIST),
  EditBlockquote(DEFAULTBLOCKQUOTE)
];

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
          {selectors.map((Type, i) => {
            return <Type
              change={value.change()}
              onChange={onChange}
              key={i}
              className="toolbar-select"
            />
          })}
          {icons.map((Type, i) => {
            return <Type
              change={value.change()}
              onChange={onChange}
              key={i}
              className="toolbar-item"
              activeClassName="toolbar-item-active"
              activeStrokeClassName="ql-stroke-active"
              activeFillClassName="ql-fill-active"
              activeThinClassName="ql-thin-active"
              activeEvenClassName="ql-even-active"
            />
          })}
        </div>
        <div className="editor markdown-body">
          <Editor
            value={value}
            onChange={onChange}
            plugins={plugins}
            renderNode={renderNode}
            renderMark={renderMark}
          />
        </div>
      </div>
    );
  }
}

function renderMark(props) {
  switch (props.mark.type) {
    case 'bold':
      return commonMark('strong')(props);
    case 'code':
      return commonMark('code')(props);
    case 'fontBgColor':
      return commonMark('span', 'fontBgColor')(props);
    case 'fontColor':
      return commonMark('span', 'fontColor')(props);
    case 'fontSize':
      return commonMark('span', 'fontSize')(props);
    case 'italic':
      return commonMark('i')(props);
    case 'strikethrough':
      return commonMark('s')(props);
    case 'underline':
      return commonMark('u')(props);
  }
}

function renderNode(props) {
  switch (props.node.type) {
    case 'paragraph':
      return commonNode('p')(props);
    case 'blockquote':
      return commonNode('blockquote')(props);
    case 'emoji':
      return emojiNode()(props);
    case 'heading1':
      return commonNode('h1')(props);
    case 'heading2':
      return commonNode('h2')(props);
    case 'list-ul':
      return commonNode('ul')(props);
    case 'list-ol':
      return commonNode('ol')(props);
    case 'list-item':
      return commonNode('li')(props);
    case 'image':
      return imageNode()(props);
    case 'link':
      return linkNode()(props);
    case 'youtube':
      return videoNode('youtube')(props);
    case 'dailymotion':
      return videoNode('dailymotion')(props);
    case 'youku':
      return videoNode('youku')(props);
    case 'vimeo':
      return videoNode('vimeo')(props);
  }
}

ReactDOM.render(
  <App/>
, document.getElementById('root'));
