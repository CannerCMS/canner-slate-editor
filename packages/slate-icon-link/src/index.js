// @flow
import * as React from 'react';
import type {IconProps} from 'shared/src/types';
import {Modal, Button, Form, Input} from 'antd';
import ToolbarIcon from '@canner/slate-icon-shared';
import links from '@canner/slate-helper-inline-links';
import {haveInlines} from '@canner/slate-util-have';
import linkNode from '@canner/slate-editor-renderer/lib/linkNode';

export const LinkPlugin = {
  renderNode: (props) => {
    if (props.node.type === 'link') 
      return linkNode()(props);
  }
}

const FormItem = Form.Item;

type State = {
  showModal: boolean,
  addLinkText: boolean
}

type Props = IconProps & {
  form: any
}

@Form.create()
export default class Link extends React.Component<Props, State> {
  typeName: string
  constructor(props: Props) {
    super(props);

    this.state = {
      showModal: false,
      addLinkText: false
    };
    this.typeName = this.props.type || 'link';
  }

  onClick = (e: Event) => {
    let {change, onChange} = this.props;
    let haveLinks = haveInlines(change, this.typeName);
    e.preventDefault();

    if (haveLinks) {
      onChange(links(change, this.typeName));
    } else if (change.value.isExpanded) {
      // prompt for ask url
      this.setState({
        showModal: true,
        addLinkText: false
      });
    } else {
      // prompt for url and text
      this.setState({
        showModal: true,
        addLinkText: true
      });
    }
  }

  handleCancel = () => {
    this.props.form.resetFields();
    this.setState({
      showModal: false,
      addLinkText: false
    });
  }

  handleOk = (e: Event) => {
    e.preventDefault();
    const {onChange, change} = this.props;
    const that = this;

    this.props.form.validateFields((err, values) => {
      if (!err) {
        const href = values.href;
        const text = values.text;
        if (href && text) {
          onChange(links(change, this.typeName, {href, text}));
        } else if (href) {
          onChange(links(change, this.typeName, {href}));
        }

        that.handleCancel();
      }
    });
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    const {change, icon, ...rest} = this.props;
    const {addLinkText, showModal} = this.state;
    const onClick = e => this.onClick(e);

    return (
      <div style={{display: 'inline-block'}}>
        <ToolbarIcon
          type={this.typeName}
          icon={icon || 'Link'}
          onClick={onClick}
          isActive={haveInlines(change, this.typeName)}
          {...rest}
        />
        <Modal
          visible={showModal}
          title="Add Link"
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
              label="Url"
              hasFeedback
            >
              {getFieldDecorator('href', {
                rules: [{
                  type: 'url', message: 'The input is not valid url!'
                }, {
                  required: true, message: 'Please input your url'
                }]
              })(
                <Input onClick={e => e.preventDefault()}/>
              )}
            </FormItem>
            {
              addLinkText ? (
                <FormItem
                  label="Text"
                  hasFeedback
                >
                  {getFieldDecorator('text')(
                    <Input onClick={e => e.preventDefault()}/>
                  )}
                </FormItem>
              ) : null
            }
          </Form>
        </Modal>
      </div>
    );
  }
}
