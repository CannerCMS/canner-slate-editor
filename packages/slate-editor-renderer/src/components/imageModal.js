// @flow
import * as React from "react";
import inlineAddData from "@canner/slate-helper-inline-adddata";
import type { Change } from "slate";
import { Modal, Form, Button, Input } from "antd";

const FormItem = Form.Item;

type Props = {
  change: Change,
  onChange: (change: Change) => void,
  hideModal: () => void,
  node: any,
  form: any,
  isShow: boolean,
  width: number,
  height: number
};

@Form.create()
export default class ImageModal extends React.Component<Props> {
  handleCancel = () => {
    this.props.form.resetFields();
    this.props.hideModal();
  };

  handleOk = (e: Event) => {
    e.preventDefault();
    const { onChange, hideModal, form } = this.props;

    form.validateFields((err, values) => {
      if (!err) {
        const { width, height } = values;
        onChange(change =>
          change.call(inlineAddData, {
            data: { width, height }
          })
        );
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
                  type: "number",
                  message: "The input is not valid number!"
                },
                {
                  required: true,
                  message: "Please input your width"
                },
                {
                  validator: this.checkSource
                }
              ],
              initialValue: width
            })(<Input onClick={e => e.preventDefault()} />)}
          </FormItem>
          <FormItem label="Height:" hasFeedback>
            {getFieldDecorator("height", {
              rules: [
                {
                  type: "number",
                  message: "The input is not valid number!"
                },
                {
                  required: true,
                  message: "Please input your height"
                },
                {
                  validator: this.checkSource
                }
              ],
              initialValue: height
            })(<Input onClick={e => e.preventDefault()} />)}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}
