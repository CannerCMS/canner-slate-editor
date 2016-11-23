/* eslint-disable new-cap */
import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, Raw} from 'slate';
import Icons from '../src';
import EditList from 'slate-edit-list';
import EditBlockquote from 'slate-edit-blockquote';

import "./style.css";

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
  Icons.inlines.Link,
  Icons.blocks.Header1,
  Icons.blocks.Header2,
  Icons.blocks.AlignCenter,
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
    'blockquote': ({children}) => <blockquote>{children}</blockquote>,
    'list-ul': ({children}) => <ul>{children}</ul>,
    'list-ol': ({children, attributes}) => <ol {...attributes}>{children}</ol>,
    'list-item': ({children}) => <li>{children}</li>,
    'heading1': ({children}) => <h1>{children}</h1>,
    'heading2': ({children}) => <h2>{children}</h2>,
    'heading3': ({children}) => <h3>{children}</h3>,
    'heading4': ({children}) => <h4>{children}</h4>,
    'heading5': ({children}) => <h5>{children}</h5>,
    'heading6': ({children}) => <h6>{children}</h6>,
    'paragraph': ({children}) => <p>{children}</p>,
    'align': props => {
      return (
        <p {...props.attributes}
          style={{textAlign: props.node.data.get('align')}}>
          {props.children}
        </p>
      );
    },
    'link': props => {
      return (
        <a {...props.attributes} href={props.node.data.get('url')}>
          {props.children}
        </a>
      );
    },
    // 'table': props => <table><tbody {...props.attributes}>{props.children}</tbody></table>,
    'table_row': props => <tr {...props.attributes}>{props.children}</tr>,
    'table_cell': props => <td {...props.attributes}>{props.children}</td>
  },
  marks: {
    bold: ({children}) => <strong>{children}</strong>,
    code: ({children}) => <code>{children}</code>,
    italic: ({children}) => <em>{children}</em>,
    underline: ({children}) => <u>{children}</u>,
    strikethrough: ({children}) => <s>{children}</s>
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
        <div className="editor">
          <Editor
            state={state}
            schema={schema}
            onChange={onChange}
            plugins={[
              EditList(LIST_DEFAULT),
              EditBlockquote(BLOCKQUOTE_DEFAULT)
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
