import React, { Component } from 'react';
import { Editor as $Editor } from 'slate-react'
import styled from 'styled-components';
import Plain from 'slate-plain-serializer';
import MarkdownPlugin from '../src';

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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: Plain.deserialize(
        '# slate-markdown\nAdd **live markdown preview** to your Slate editor.\n## Usage\n### Installation\n`npm install slate-markdown`\n### Demo\nThis is a [Slate editor](https://slatejs.org) with the plugin enabled, try typing some markdown in here!\n## Links\n- Contribute on [GitHub](https://github.com/withspectrum/slate-markdown)\n- Made by the folks at [Spectrum](https://spectrum.chat)'
      )
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
      <Wrapper>
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
