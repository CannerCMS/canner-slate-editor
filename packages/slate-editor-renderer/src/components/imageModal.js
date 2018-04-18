// @flow
import * as React from "react";
import inlineAddData from "@canner/slate-helper-inline-adddata";
import type { Change, Range } from "slate";
import { Modal, Form, Button, InputNumber } from "antd";

const FormItem = Form.Item;

type Props = {
  change: Change,
  onChange: (change: Change) => void,
  hideModal: () => void,
  node: any,
  form: any,
  isShow: boolean,
  width: number,
  height: number,
  target: Range
};

@Form.create()
export default class ImageModal extends React.Component<Props> {
  handleCancel = () => {
    this.props.form.resetFields();
    this.props.hideModal();
  };

  handleOk = (e: Event) => {
    e.preventDefault();
    const { onChange, change, hideModal, form, target } = this.props;
    change.select(target)

    form.validateFields((err, values) => {
      if (!err) {
        const { width, height } = values;
        onChange(change => {
          change.call(inlineAddData, {
            data: { width, height }
          })
        });
        form.resetFields();
        hideModal();
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { isShow, width, height } = this.props;
    return (
      <Modal
        visible={isShow}
        title="Set image size"
        onCancel={this.handleCancel}
        footer={[
          <Button
            key="back"
            type="ghost"
            size="large"
            onClick={this.handleCancel}
          >
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            size="large"
            onClick={this.handleOk}
          >
            Ok
          </Button>
        ]}
      >
        <Form horizontal="true">
          <FormItem label="Width:" hasFeedback>
            {getFieldDecorator("width", {
              rules: [
                {
                  required: true,
                  message: "Please enter a width"
                }
              ],
              initialValue: width
            })(<InputNumber onClick={e => e.preventDefault()} />)}
          </FormItem>
          <FormItem label="Height:" hasFeedback>
            {getFieldDecorator("height", {
              rules: [
                {
                  required: true,
                  message: "Please enter a height"
                }
              ],
              initialValue: height
            })(<InputNumber onClick={e => e.preventDefault()} />)}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}
