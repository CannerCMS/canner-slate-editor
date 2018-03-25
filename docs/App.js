import * as React from 'react';
import { Editor as $Editor } from 'slate-react'
import styled from 'styled-components';
import {Value} from 'slate';
import {State} from 'markup-it';
import markdown from 'markup-it/lib/markdown';
import MarkdownPlugin from '../src';

import "github-markdown-css";
import "prismjs/themes/prism.css"

const Wrapper = styled.div`
  max-width: 35em;
  margin: 0 auto;
`;

const Editor = styled($Editor)`
  background-color: #FFF;
  padding: 1em;
  width: 100%;
  height: 100%;
  line-height: 1.5em;
`;

const plugins = [MarkdownPlugin()];

class App extends React.Component {
  constructor(props) {
    super(props);
    const parser = State.create(markdown);
    const document = parser.deserializeToDocument(
      '# __slate-markdown__\nAdd **live markdown preview** to your Slate editor.\n## Usage\n### Installation\n`npm install slate-markdown`\n### Demo\nThis is a [Slate editor](https://slatejs.org) with the plugin enabled, try typing some markdown in here!\n## Links\n- Contribute on [GitHub](https://github.com/withspectrum/slate-markdown)\n- Made by the folks at [Spectrum](https://spectrum.chat)\n```js\nconst test = wow()\n```'
    )
    
    this.state = {
      value: Value.create({document})
    };
  }

  onChange = ({value}) => {
    this.setState({
      value,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <Wrapper className="markdown-body">
        <Editor
          value={value}
          plugins={plugins}
          onChange={this.onChange}
          sizes={['2em', '1.5874em', '1.2599em', '1em', '1em']}
          placeholder={'You can write markdown here! (try "## Hello")'}
          autoFocus
        />
      </Wrapper>
    );
  }
}

export default App;
