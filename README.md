# slate-editor-icons [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> icons ([font-awesome](http://fontawesome.io/icons/)) for slate editors

## Installation

```sh
$ npm install --save slate-editor-icons
```

## Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, Raw} from 'slate';
import Icons from 'slate-editor-icons';

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
  // load marks icons
  Icons.marks.Bold,
  Icons.marks.Italic,
  Icons.marks.Underline,
  Icons.marks.Code,
  Icons.marks.StrikeThrough,
  // load inlines icons
  Icons.inlines.Link,
  // load blocks icons
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

```

## Start example server

```
node devServer.js
```

## Maintainer

[chilijung](https://github.com/chilijung)

## License

MIT © [Canner](https://github.com/Canner)


[npm-image]: https://badge.fury.io/js/slate-editor-icons.svg
[npm-url]: https://npmjs.org/package/slate-editor-icons
[travis-image]: https://travis-ci.org/Canner/slate-editor-icons.svg?branch=master
[travis-url]: https://travis-ci.org/Canner/slate-editor-icons
[daviddm-image]: https://david-dm.org/Canner/slate-editor-icons.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Canner/slate-editor-icons
