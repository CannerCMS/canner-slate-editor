// @flow
import * as React from 'react';
import type {Change} from 'slate';
import type {nodeProps} from './type';
import {Icon} from 'antd';
import ImageLoading from 'react-loading-image';
import {Alert} from './components/image';
import ImageDraggableContainer from './components/imageDraggableContainer';

import 'react-resizable/css/styles.css';

export default function(options) {
  const NodeComponent = ({...props}: nodeProps) => {
    return (
      <ImageNode {...props} {...options}/>
    );
  };
  return NodeComponent;
}


type Props = nodeProps & {
  change: Change,
  editor: Object,
  readOnly: Boolean
};

class ImageNode extends React.Component<Props> {

  render() {
    const {node, getSrc, getWidth, getHeight, attributes, children} = this.props;
    const src = getSrc(node);
    const nodeWidth = getWidth(node);
    const nodeHeight = getHeight(node);

    return (
      <span {...attributes}>
        <ImageLoading
          src={src}
          image={imgProps => (
            <ImageDraggableContainer
              {...this.props}
              src={imgProps.src}
              width={nodeWidth || imgProps.width}
              height={nodeHeight || imgProps.height}
              />
          )} // change to your customized component
          loading={() => <Icon type="loading" style={{ fontSize: 24 }} spin />}
          error={() => <Alert>Image link is broken</Alert>}
          />
        {children}
      </span>
    );
  }
}

