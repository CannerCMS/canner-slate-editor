// @flow
import * as React from "react";
import type { Change } from "slate";
import type { nodeProps } from "./type";
import { getEventRange } from "slate-react";
import { Icon } from "antd";
import ImageLoading from "react-loading-image";
import { Alert } from "./components/image";
import ImageContainer from "./components/imageContainer";

import "react-resizable/css/styles.css";

export default function(options) {
  const NodeComponent = ({ ...props }: nodeProps) => {
    return <ImageNode {...props} {...options} />;
  };
  return NodeComponent;
}

type Props = nodeProps & {
  change: Change,
  editor: Object,
  readOnly: Boolean,
  getSrc: Function,
  getWidth: Function,
  getHeight: Function
};

type State = {
  isEditing: boolean
};

class ImageNode extends React.Component<Props, State> {
  state = {
    isEditing: false
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.isEditing && !(!nextState.isEditing && this.state.isEditing))
      return false;
    return true;
  }

  edit = e => {
    const { editor } = this.props;
    e.preventDefault();
    this.target = getEventRange(e, editor.state.value);
    this.setState({ isEditing: true });
  };

  hidePopover = () => {
    this.setState({ isEditing: false });
  };

  render() {
    const {
      node,
      getSrc,
      getWidth,
      getHeight,
      attributes,
      children,
      editor
    } = this.props;
    const src = getSrc(node);
    const nodeWidth = getWidth(node);
    const nodeHeight = getHeight(node);
    const that = this;

    return (
      <span {...attributes}>
        <ImageLoading
          src={src}
          image={imgProps => {
            let ratio;
            let width = nodeWidth || imgProps.width;
            let height = nodeHeight || imgProps.height;

            if (width > height && width > 700) {
              ratio = width / 700;
            } else if (height > 500) {
              ratio = height / 500;
            }

            width = Math.round(ratio ? width / ratio : width);
            height = Math.round(ratio ? height / ratio : height);

            return (
              <React.Fragment>
                <ImageContainer
                  {...that.props}
                  src={imgProps.src}
                  width={width}
                  height={height}
                  edit={that.edit}
                  hidePopover={this.hidePopover}
                  isEditing={this.state.isEditing}
                />
              </React.Fragment>
            );
          }} // change to your customized component
          loading={() => <Icon type="loading" style={{ fontSize: 24 }} spin />}
          error={() => <Alert>Image link is broken</Alert>}
        />
        {children}
      </span>
    );
  }
}
