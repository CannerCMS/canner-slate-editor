/* eslint-disable max-len */
import React, {Component, PropTypes} from 'react';
import ToolbarIcon from '../toolbarIcon';
import {blocks} from 'slate-plugins';
import videoParser from 'js-video-url-parser';
import {Modal, Form, Button, Input} from 'antd';

const insertBlock = blocks.insertBlock;
const FormItem = Form.Item;

@Form.create()
export default class Video extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);

    this.state = {
      showModal: false
    };
  }

  displayName = this.props.type || 'video';

  static propTypes = {
    state: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    icon: PropTypes.string,
    type: PropTypes.string,
    form: PropTypes.object
  };

  onClick(e) {
    e.preventDefault();
    this.setState({
      showModal: true
    });
  }

  handleCancel() {
    this.props.form.resetFields();
    this.setState({
      showModal: false
    });
  }

  handleOk(e) {
    e.preventDefault();
    const {onChange, state} = this.props;
    const that = this;

    this.props.form.validateFields((err, values) => {
      if (!err) {
        const href = values.href;
        if (href) {
          const videoObj = videoParser.parse(href);
          let slateObj;

          if (videoObj && videoObj.provider === 'youtube') {
            slateObj = {type: 'youtube', isVoid: true, data: {id: videoObj.id}};
          } else if (videoObj && videoObj.provider === 'dailymotion') {
            slateObj = {type: 'dailymotion', isVoid: true, data: {id: videoObj.id}};
          } else if (videoObj && videoObj.provider === 'vimeo') {
            slateObj = {type: 'vimeo', isVoid: true, data: {id: videoObj.id}};
          } else if (videoObj && videoObj.provider === 'youku') {
            slateObj = {type: 'youku', isVoid: true, data: {id: videoObj.id}};
          }

          onChange(insertBlock(state, slateObj));
        }

        that.handleCancel();
      }
    });
  }

  checkSource(rule, value, callback) {
    try {
      const videoObj = videoParser.parse(value);

      if (videoObj && videoObj.provider === 'youtube' ||
        videoObj.provider === 'dailymotion' ||
        videoObj.provider === 'vimeo' ||
        videoObj.provider === 'youku') {
        callback();
        return;
      }

      return callback('URL not support');
    } catch (e) {
      return callback('URL not support');
    }
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    const {icon, ...rest} = this.props;
    const {showModal} = this.state;
    const onClick = e => this.onClick(e);

    return (
      <div style={{display: 'inline-block'}}>
        <ToolbarIcon
          type={this.displayName}
          icon={icon || 'Video'}
          onClick={onClick}
          isActive={false}
          {...rest}
        />
        <Modal
          visible={showModal}
          title="Add Video"
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
              label="Enter the video URL of the link (support Vimeo, Youtube, Dailymotion, Youku):"
              hasFeedback
            >
              {getFieldDecorator('href', {
                rules: [{
                  type: 'url', message: 'The input is not valid url!'
                }, {
                  required: true, message: 'Please input your url'
                }, {
                  validator: this.checkSource
                }]
              })(
                <Input onClick={e => e.preventDefault()}/>
              )}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}
