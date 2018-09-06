// @flow
import * as React from "react";
import inlineAddData from "@canner/slate-helper-inline-adddata";
import type { Change, Range } from "slate";
import { Popover, Form, Button, InputNumber } from "antd";

const FormItem = Form.Item;

type Props = {
  change: Change,
  onChange: (change: Change) => void,
  hidePopover: () => void,
  children: any,
  node: any,
  form: any,
  isEditing: boolean,
  width: number,
  height: number,
  target: Range
};

@Form.create()
export default (class ImageModal extends React.Component<Props> {
  handleCancel = () => {
    this.props.form.resetFields();
    this.props.hidePopover();
  };

  handleClickChange = (visible: boolean) => {
    if (!visible) this.handleCancel();
  };

  handleOk = (e: Event) => {
    e.preventDefault();
    const { onChange, change, hidePopover, form, target } = this.props;
    change.select(target);

    form.validateFields((err, values) => {
      if (!err) {
        const { width, height } = values;
        onChange(change => {
          change.call(inlineAddData, {
            data: {
              width: Math.round(width),
              height: Math.round(height)
            }
          });
        });
        form.resetFields();
        hidePopover();
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { isEditing, width, height, children } = this.props;
    const content = (
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
        <Button key="back" type="ghost" onClick={this.handleCancel}>
          Cancel
        </Button>{" "}
        <Button key="submit" type="primary" onClick={this.handleOk}>
          Ok
        </Button>
      </Form>
    );

    return (
      <Popover
        visible={isEditing}
        title="Set Image Size"
        content={content}
        onVisibleChange={this.handleClickChange}
        placement="bottom"
      >
        {children}
      </Popover>
    );
  }
});
