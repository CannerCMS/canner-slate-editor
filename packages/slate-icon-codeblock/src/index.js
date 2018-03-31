// @flow
import * as React from 'react';
import {Data} from 'slate';
import type {IconProps} from 'shared/src/types';
import {Modal, Button, Form, Input} from 'antd';
import ToolbarIcon from '@canner/slate-icon-shared';
import PluginEditCode from 'slate-edit-code';

export const CodeBlockPlugin = {
  renderNode: (props) => {
    if (props.node.type === 'code_block') {
      return (
        <pre>
          <code {...props.attributes}>
            {props.children}
          </code>
        </pre>
      );
    }
  }
}

const codePlugin = PluginEditCode({
  onlyIn: node => node.type === 'code_block'
});
const FormItem = Form.Item;

type State = {
  showModal: boolean
}

type Props = IconProps & {
  form: any
}

@Form.create()
export default class CodeBlock extends React.Component<Props, State> {
  typeName: string
  constructor(props: Props) {
    super(props);

    this.state = {
      showModal: false
    };
    this.typeName = this.props.type || 'code_block';
  }

  onClick = (e: Event) => {
    let {change, onChange} = this.props;
    let haveCodeBlock = codePlugin.utils.isInCodeBlock(change.value);
    e.preventDefault();

    if (haveCodeBlock) {
      onChange(codePlugin.changes.unwrapCodeBlock(change, 'paragraph'));
    } else {
      // open popup
      this.setState({
        showModal: true
      });
    }
  }

  handleCancel = () => {
    this.props.form.resetFields();
    this.setState({
      showModal: false
    });
  }

  handleOk = (e: Event) => {
    e.preventDefault();
    const {onChange, change} = this.props;
    const that = this;

    this.props.form.validateFields((err, values) => {
      if (!err) {
        const {lang} = values;
        let newChange = change;

        if (lang) {
          newChange = change
            .setBlocks({data: Data.create({syntax: lang})});
        }

        onChange(codePlugin.changes.wrapCodeBlock(newChange));
        that.handleCancel();
      }
    });
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    const {change, icon, ...rest} = this.props;
    const {showModal} = this.state;
    const onClick = e => this.onClick(e)

    return (
      <div style={{display: 'inline-block'}}>
        <ToolbarIcon
          type={this.typeName}
          icon={icon || 'CodeBlock'}
          onClick={onClick}
          isActive={codePlugin.utils.isInCodeBlock(change.value)}
          {...rest}
        />
        <Modal
          visible={showModal}
          title="Add code block"
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" type="ghost" size="large" onClick={this.handleCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" size="large" onClick={this.handleOk}>
              Ok
            </Button>
          ]}
        >
          <Form horizontal="true">
            <FormItem
              label="Code language"
              hasFeedback
            >
              {getFieldDecorator('lang')(
                <Input onClick={e => e.preventDefault()}/>
              )}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}
