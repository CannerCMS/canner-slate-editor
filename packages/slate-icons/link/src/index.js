// @flow
import * as React from "react";
import type { IconProps } from "shared/src/types";
import { Popover, Button, Form, Input } from "antd";
import ToolbarIcon from "@canner/slate-icon-shared";
import links from "@canner/slate-helper-inline-links";
import { haveInlines } from "@canner/slate-util-have";
import { LINK } from "@canner/slate-constant/lib/inlines";
import linkNode from "@canner/slate-editor-renderer/lib/linkNode";

export const LinkPlugin = opt => {
  const options = Object.assign(
    {
      type: LINK,
      getHref: node => node.data.get("href")
    },
    opt
  );

  return {
    renderNode: props => {
      if (props.node.type === options.type) return linkNode(options)(props);
    }
  };
};

const FormItem = Form.Item;

type State = {
  showModal: boolean,
  addLinkText: boolean
};

type Props = IconProps & {
  form: any
};

@Form.create()
export default (class Link extends React.Component<Props, State> {
  typeName: string;
  constructor(props: Props) {
    super(props);

    this.state = {
      showModal: false,
      addLinkText: false
    };
    this.typeName = this.props.type || LINK;
  }

  static defaultProps = {
    hrefKey: "href",
    textKey: "text"
  };

  onClick = (e: Event) => {
    let { change, onChange } = this.props;
    let haveLinks = haveInlines(change, this.typeName);
    if (e) e.preventDefault();

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
  };

  handleClickChange = (visible: boolean) => {
    if (!visible) this.handleCancel();
  };

  handleCancel = () => {
    this.props.form.resetFields();
    this.setState({
      showModal: false,
      addLinkText: false
    });
  };

  handleOk = (e: Event) => {
    e.preventDefault();
    const { onChange, change, hrefKey, textKey } = this.props;
    const that = this;

    this.props.form.validateFields((err, values) => {
      if (!err) {
        const href = values.href;
        const text = values.text;
        if (href && text) {
          onChange(
            links(change, this.typeName, { [hrefKey]: href, [textKey]: text })
          );
        } else if (href) {
          onChange(links(change, this.typeName, { [hrefKey]: href }));
        }

        that.handleCancel();
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { change, icon, ...rest } = this.props;
    const { addLinkText, showModal } = this.state;
    const onClick = e => this.onClick(e);

    const content = (
      <Form horizontal="true">
        <FormItem label="Url" hasFeedback>
          {getFieldDecorator("href", {
            rules: [
              {
                type: "url",
                message: "The input is not valid url!"
              },
              {
                required: true,
                message: "Please input your url"
              }
            ]
          })(<Input onClick={e => e.preventDefault()} />)}
        </FormItem>
        {addLinkText ? (
          <FormItem label="Text" hasFeedback>
            {getFieldDecorator("text")(
              <Input onClick={e => e.preventDefault()} />
            )}
          </FormItem>
        ) : null}
        <Button key="back" type="ghost" onClick={this.handleCancel}>
          Cancel
        </Button>{" "}
        <Button key="submit" type="primary" onClick={this.handleOk}>
          Ok
        </Button>
      </Form>
    );

    return (
      <div style={{ display: "inline-block" }}>
        <Popover
          visible={showModal}
          title="Add Link"
          content={content}
          onVisibleChange={this.handleClickChange}
        >
          <ToolbarIcon
            type={this.typeName}
            icon={icon || "Link"}
            onClick={onClick}
            isActive={haveInlines(change, this.typeName)}
            {...rest}
          />
        </Popover>
      </div>
    );
  }
});
