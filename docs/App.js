import * as React from 'react';
import {Row, Col} from 'antd';
import beautify from 'js-beautify';
import {Value} from 'slate';
import {State} from 'markup-it';
import Prism from 'prismjs';
import markdown from 'markup-it/lib/markdown';
import html from 'markup-it/lib/html';
import Editor from '../src';
import readme from '../README.md';

import 'antd/dist/antd.css';

const mdParser = State.create(markdown);
const htmlSerializer = State.create(html);
const MdEditor = Editor();

class App extends React.Component {
  constructor(props) {
    super(props);
    const document = mdParser.deserializeToDocument(readme)
    
    this.state = {
      value: Value.create({document})
    };
  }

  componentDidUpdate() {
    Prism.highlightAllUnder(document.getElementById('root'));
  }

  onChange = ({value}) => {
    this.setState({
      value,
    });
  };

  render() {
    const { value } = this.state;
    const htmlStr = htmlSerializer.serializeDocument(value.document)
    const beautyHTML = beautify.html(htmlStr, { indent_size: 2, space_in_empty_paren: true })
    return (
      <Row>
        <Col span={12} style={{borderRight: '1px solid #DDD', minHeight: '100vh'}}>
          <MdEditor
            value={value}
            onChange={this.onChange}
            style={{margin: '20px'}}
          />
        </Col>
        <Col span={12} style={{padding: '10px'}}>
          <h3>Serialized HTML</h3>
          <pre>
            <code className="language-markup">
              {beautyHTML}
            </code>
          </pre>
        </Col>
      </Row>
    );
  }
}

export default App;
