// @flow
import * as React from 'react';
import {Data} from 'slate';
import type {IconProps} from 'shared/src/types';
import {Modal, Button, Form, Select} from 'antd';
import ToolbarIcon from '@canner/slate-icon-shared';
import PluginEditCode from 'slate-edit-code';
import {CODE, PARAGRAPH} from '@canner/slate-constant/lib/blocks';
import codeBlockNode from '@canner/slate-editor-renderer/lib/codeBlockNode';
import {languages} from 'prismjs/components.json';
const Option = Select.Option;

export const CodeBlockPlugin = (type = CODE) => {
  return {
    renderNode: (props) => {
      if (props.node.type === type) {
        return codeBlockNode()(props);
      }
    }
  }
}
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
    this.typeName = this.props.type || CODE;
    this.codePlugin = PluginEditCode({
      onlyIn: node => node.type === this.typeName
    });
  }

  onClick = (e: Event) => {
    let {change, onChange} = this.props;
    let haveCodeBlock = this.codePlugin.utils.isInCodeBlock(change.value);
    e.preventDefault();

    if (haveCodeBlock) {
      onChange(this.codePlugin.changes.unwrapCodeBlock(change, PARAGRAPH));
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

        onChange(this.codePlugin.changes.wrapCodeBlock(newChange));
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
          isActive={this.codePlugin.utils.isInCodeBlock(change.value)}
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
                <Select>
                  {Object.keys(languages)
                    .filter(lang => {
                      return languages[lang].title;
                    })
                    .map(lang => {
                      return (
                        <Option value={lang} key={lang}>
                          {languages[lang].title}
                        </Option>
                      )
                    })
                  }
                </Select>
              )}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}
