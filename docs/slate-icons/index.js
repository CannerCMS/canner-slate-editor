// @flow
/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import type {Value} from 'slate';
import {Editor} from 'slate-react';
import beautify from 'js-beautify';
import {Row, Col, Tabs} from 'antd';
import {AlignCenter, AlignLeft, AlignRight, AlignCenterPlugin, AlignLeftPlugin, AlignRightPlugin} from 'packages/slate-icon-align';
import Blockquote, {BlockquotePlugin} from 'packages/slate-icon-blockquote';
import Bold, {BoldPlugin} from 'packages/slate-icon-bold';
import Clean, {CleanPlugin} from 'packages/slate-icon-clean';
import Code, {CodePlugin} from 'packages/slate-icon-code';
import CodeBlock, {CodeBlockPlugin} from 'packages/slate-icon-codeblock';
// import Emoji, {EmojiPlugin} from 'packages/slate-icon-emoji';
import FontBgColor, {FontBgColorPlugin} from 'packages/slate-icon-fontBgColor';
import FontColor, {FontColorPlugin} from 'packages/slate-icon-fontColor';
import {Header1, Header2, HeaderOnePlugin, HeaderTwoPlugin, HeaderThreePlugin} from 'packages/slate-icon-header';
import Hr, {HrPlugin} from 'packages/slate-icon-hr';
import Image, {ImagePlugin} from 'packages/slate-icon-image';
import {Indent, Outdent} from 'packages/slate-icon-indent';
import Italic, {ItalicPlugin} from 'packages/slate-icon-italic';
import Table, {TablePlugin} from 'packages/slate-icon-table';
import Link, {LinkPlugin} from 'packages/slate-icon-link';
import {OlList, UlList, ListPlugin} from 'packages/slate-icon-list';
import StrikeThrough, {StrikeThroughPlugin} from 'packages/slate-icon-strikethrough';
import Underline, {UnderlinePlugin} from 'packages/slate-icon-underline';
import Undo from 'packages/slate-icon-undo';
import Redo, {RedoPlugin} from 'packages/slate-icon-redo';
import Video, {VideoPlugin} from 'packages/slate-icon-video';

// select
import FontSize, {FontSizePlugin} from 'packages/slate-select-fontsize';
import LetterSpacing, {LetterSpacingPlugin} from 'packages/slate-select-letterspacing';
import LineHeight from 'packages/slate-select-lineheight';

// plugins
import {DEFAULT as DEFAULTLIST} from '@canner/slate-helper-block-list';
import {DEFAULT as DEFAULTBLOCKQUOTE} from '@canner/slate-helper-block-quote';
import EditList from 'slate-edit-list';
import EditBlockquote from 'slate-edit-blockquote';
import {ParagraphPlugin} from 'packages/slate-icon-shared';

import EditPrism from 'slate-prism'
import EditCode from 'slate-edit-code'
import TrailingBlock from 'slate-trailing-block'
import EditTable from 'slate-edit-table'

import Prism from 'prismjs';
import "prismjs/themes/prism.css"

import initialValue from './initialValue';

// rules
import Html from 'slate-html-serializer';
import {DEFAULT_RULES} from 'packages/slate-editor-html';

const html = new Html({ rules: DEFAULT_RULES})
const TabPane = Tabs.TabPane;

import "./style.css";
import "./github-markdown.css";

const selectors = [
  FontSize,
  LineHeight,
  LetterSpacing
]

const icons = [
  AlignLeft,
  AlignCenter,
  AlignRight,
  Blockquote,
  Bold,
  Clean,
  Code,
  CodeBlock,
  // Emoji,
  FontBgColor,
  FontColor,
  Hr,
  Header1,
  Header2,
  Image,
  Video,
  Indent,
  Outdent,
  Italic,
  Link,
  OlList,
  UlList,
  Table,
  StrikeThrough,
  Underline, 
  Undo,
  Redo
];

const plugins = [
  EditPrism({
    onlyIn: node => node.type === 'code_block',
    getSyntax: node => node.data.get('syntax')
  }),
  EditCode({
    onlyIn: node => node.type === 'code_block'
  }),
  TrailingBlock(),
  EditTable(),
  EditList(DEFAULTLIST),
  EditBlockquote(DEFAULTBLOCKQUOTE),
  AlignCenterPlugin(),
  AlignRightPlugin(),
  AlignLeftPlugin(),
  ParagraphPlugin(),
  BlockquotePlugin(),
  BoldPlugin(),
  CleanPlugin(),
  CodePlugin(),
  CodeBlockPlugin(),
  FontBgColorPlugin(),
  FontColorPlugin(),
  ItalicPlugin(),
  StrikeThroughPlugin(),
  UnderlinePlugin(),
  FontSizePlugin(),
  LetterSpacingPlugin(),
  TablePlugin(),
  // EmojiPlugin(),
  HeaderOnePlugin(),
  HeaderTwoPlugin(),
  HeaderThreePlugin(),
  RedoPlugin(),
  HrPlugin(),
  ImagePlugin(),
  LinkPlugin(),
  ListPlugin(),
  VideoPlugin()
];

class SerializeHTML extends React.Component<{value: Value}> {
  componentDidMount() {
    Prism.highlightAllUnder(document.getElementById('root'));
  }

  render() {
    const {value} = this.props;
    const htmlValue = html.serialize(value);
    const dataObj = html.deserialize(htmlValue);
    const beautyHTML = beautify.html(htmlValue, { indent_size: 2, space_in_empty_paren: true })
    console.log('--------------Deserialize from HTML--------------')
    console.log(dataObj.toJSON())

    return (
      <Col style={{padding: '5px 0 5px 10px'}}>
        <h3>Serialized HTML</h3>
        <pre>
          <code className="language-markup">
            {beautyHTML}
          </code>
        </pre>
      </Col>
    )
  }
}

class App extends React.Component {
  // Set the initial state when the app is first constructed.
  state = {
    value: initialValue
  }

  render() {
    const {value} = this.state;
    const onChange = ({value}) => this.setState({value});

    console.log('--------------Current Value----------------')
    console.log(value.toJSON())

    return (
      <Tabs>
        <TabPane tab="editor" key="editor">
          <Row>
            <Col style={{minHeight: '100vh'}}>
              <div className="toolbar">
                <div>
                  {selectors.map((Type, i) => {
                    return <Type
                      change={value.change()}
                      onChange={onChange}
                      key={i}
                      className="toolbar-select"
                    />
                  })}
                </div>
                <div>
                  {icons.map((Type, i) => {
                    return <Type
                      change={value.change()}
                      onChange={onChange}
                      key={i}
                      className="toolbar-item"
                      activeClassName="toolbar-item-active"
                      disableClassName="toolbar-item-disable"
                      activeStrokeClassName="ql-stroke-active"
                      activeFillClassName="ql-fill-active"
                      activeThinClassName="ql-thin-active"
                      activeEvenClassName="ql-even-active"
                    />
                  })}
                </div>
              </div>
              <div className="editor markdown-body">
                <Editor
                  value={value}
                  onChange={onChange}
                  plugins={plugins}
                />
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="HTML" key="html">
          <Row>
            <SerializeHTML value={value}/>
          </Row>
        </TabPane>
      </Tabs>
    );
  }
}

ReactDOM.render(
  <App/>
, document.getElementById('root'));
