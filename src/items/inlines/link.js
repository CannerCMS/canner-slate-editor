/* eslint-disable max-len */
import React, {Component, PropTypes} from 'react';
import {Modal, Button, Form, Input} from 'antd';
import ToolbarIcon from '../toolbarIcon';
import {inlines, utils} from 'slate-plugins';
const {links} = inlines;
const {haveInlines} = utils.have;
const FormItem = Form.Item;

@Form.create()
export default class Link extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleOk = this.handleOk.bind(this);

    this.state = {
      showModal: false,
      addLinkText: false
    };
  }

  displayName = this.props.type || 'link';

  static propTypes = {
    state: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    icon: PropTypes.string,
    type: PropTypes.string,
    form: PropTypes.object
  };

  onClick(e) {
    let {state, onChange} = this.props;
    let haveLinks = haveInlines(state, this.displayName);
    e.preventDefault();

    if (haveLinks) {
      onChange(links(state, this.displayName));
    } else if (state.isExpanded) {
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

  handleCancel() {
    this.props.form.resetFields();
    this.setState({
      showModal: false,
      addLinkText: false
    });
  }

  handleOk(e) {
    e.preventDefault();
    const {onChange, state} = this.props;
    const that = this;

    this.props.form.validateFields((err, values) => {
      if (!err) {
        const href = values.href;
        const text = values.text;
        if (href && text) {
          onChange(links(state, this.displayName, {href, text}));
        } else if (href) {
          onChange(links(state, this.displayName, {href}));
        }

        that.handleCancel();
      }
    });
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    const {state, icon, ...rest} = this.props;
    const {addLinkText, showModal} = this.state;
    const onClick = e => this.onClick(e);

    return (
      <div style={{display: 'inline-block'}}>
        <ToolbarIcon
          type={this.displayName}
          icon={icon || 'Link'}
          onClick={onClick}
          isActive={haveInlines(state, this.displayName)}
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
          <Form horizontal>
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
