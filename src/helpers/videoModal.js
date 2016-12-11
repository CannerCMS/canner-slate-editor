/* eslint-disable max-len */
import React, {Component, PropTypes} from 'react';
import videoParser from 'js-video-url-parser';
import {Modal, Form, Button, Input} from 'antd';
import {blocks} from 'slate-plugins';

const insertBlock = blocks.insertBlock;
const FormItem = Form.Item;

@Form.create()
export default class VideoModal extends Component {
  constructor(props) {
    super(props);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  static propTypes = {
    state: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired,
    node: PropTypes.object,
    form: PropTypes.object,
    isShow: PropTypes.bool,
    initialValue: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
  };

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

  handleCancel() {
    this.props.form.resetFields();
    this.props.hideModal();
  }

  handleOk(e) {
    e.preventDefault();
    const {onChange, state, hideModal, form, initialValue, node, width, height} = this.props;

    form.validateFields((err, values) => {
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

          if (width) {
            slateObj.data.width = width;
          }

          if (height) {
            slateObj.data.height = height;
          }

          if (initialValue) {
            // update link
            const newState = state.transform()
              .insertBlock(slateObj)
              .unsetSelection()
              .removeNodeByKey(node.key)
              .apply();
            onChange(newState);
          } else {
            onChange(insertBlock(state, slateObj));
          }
          form.resetFields();
        }

        hideModal();
      }
    });
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    const {isShow, initialValue} = this.props;
    return (
      <Modal
        visible={isShow}
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
              }],
              initialValue: initialValue
            })(
              <Input onClick={e => e.preventDefault()}/>
            )}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}
