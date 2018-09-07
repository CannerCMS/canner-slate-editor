// @flow
import * as React from "react";
import inlineAddData from "@canner/slate-helper-inline-adddata";
import type { Change, Range } from "slate";
import { Popover, Form, Button, InputNumber, Checkbox } from "antd";

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
    const {
      getFieldDecorator,
      getFieldValue,
      setFieldsValue
    } = this.props.form;
    const { isEditing, width, height, children } = this.props;
    const content = (
      <Form horizontal="true" layout="inline">
        <FormItem label="Width:" hasFeedback>
          {getFieldDecorator("width", {
            rules: [
              {
                required: true,
                message: "Please enter a width"
              }
            ],
            initialValue: width
          })(
            <InputNumber
              onChange={newWidth => {
                if (getFieldValue("lock")) {
                  const height = getFieldValue("height");
                  const oldWidth = getFieldValue("width");
                  const ratio = height / oldWidth;
                  setFieldsValue({ height: (ratio * newWidth).toFixed(2) });
                }
              }}
              onClick={e => e.preventDefault()}
            />
          )}
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
          })(
            <InputNumber
              onChange={newHeight => {
                if (getFieldValue("lock")) {
                  const width = getFieldValue("width");
                  const oldHeight = getFieldValue("height");
                  const ratio = width / oldHeight;
                  setFieldsValue({ width: (ratio * newHeight).toFixed(2) });
                }
              }}
              onClick={e => e.preventDefault()}
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("lock", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Lock Original Ratio</Checkbox>)}
        </FormItem>
        <div>
          <Button key="back" type="ghost" onClick={this.handleCancel}>
            Cancel
          </Button>{" "}
          <Button key="submit" type="primary" onClick={this.handleOk}>
            Ok
          </Button>
        </div>
      </Form>
    );

    return (
      <Popover
        visible={isEditing}
        trigger="click"
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
