// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import {Value} from 'slate';
import initialValue from './initialValue';
import CannerEditor from '../src';

class DemoEditor extends React.Component<*, {value: Value}> {
  // Set the initial state when the app is first constructed.
  state = {
    value: initialValue
  }


  render() {
    const {value} = this.state;
    const onChange = ({value}) => this.setState({value});

    return (
      <div style={{margin: '20px'}}>
        <h1>Canner-slate-editor demo</h1>
        <CannerEditor
          value={value}
          onChange={onChange}
          serviceConfig={{
            name: 'image',
            accept: 'image/*',
            action: 'https://api.imgur.com/3/image',
            headers: {
              'Authorization': 'Client-ID a214c4836559c77',
              'X-Requested-With': null
            }
          }}
          galleryConfig={null}
          />
      </div>
    );
  }
}

ReactDOM.render(
  <DemoEditor/>
, (document: any).getElementById('root'));
