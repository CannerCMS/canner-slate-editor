import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, Raw} from 'slate';
import Icons from '../src';

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
  Icons.marks.Bold,
  Icons.marks.Italic,
  Icons.marks.Underline,
  Icons.marks.Code,
  Icons.marks.StrikeThrough,
  Icons.inlines.Link,
  Icons.blocks.Heading,
  Icons.blocks.Blockquote,
  Icons.blocks.OlList,
  Icons.blocks.UlList
];

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
        {icons.map((Type, i) => {
          return React.createElement(Type, {
            key: i,
            state: state,
            onChange: onChange
          });
        })}
        <Editor
          state={state}
          onChange={onChange}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App/>
, document.getElementById('root'));
