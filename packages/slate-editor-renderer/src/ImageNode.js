// @flow
import * as React from 'react';
import type {Change} from 'slate';
import type {nodeProps} from './type';
import inlineAddData from '@canner/slate-helper-inline-adddata';

import {Resizable} from 'react-resizable';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import {ImageNodeInActive, ImageNodeActive, ImageContiner,
  Toolbar, ToolbarItem} from './components/image';

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

  constructor(props) {
    super(props);

    this.onResizeStop = this.onResizeStop.bind(this);
    this.onResize = this.onResize.bind(this);
    this.remove = this.remove.bind(this);

    this.state = {
      width: null,
      height: null
    };
  }

  onResizeStop(e, data) {
    const {onChange, state} = this.props.editor;
    const {value} = state;
    const {width, height} = data.size

    onChange(inlineAddData(value.change(), {
      data: {width, height}
    }));
  }

  onResize(e, data) {
    const {width, height} = data.size;
    this.setState({
      width,
      height
    });
  }

  remove() {
    const {editor, node} = this.props;
    const {value} = editor.state;
    const newChange = value.change()
      .removeNodeByKey(node.key);

    editor.onChange(newChange);
  }

  render() {
    const {node, attributes, children, readOnly, isSelected, getSrc, getWidth, getHeight, textAlign, paddingLeft} = this.props;
    const align = textAlign(node);
    const indent = paddingLeft(node);
    const src = getSrc(node);
    const width = this.state.width || getWidth(node);
    const height = this.state.height || getHeight(node);

    if (readOnly) {
      // if editor is readOnly
      return (
        <ImageContiner
          align={align}
          indent={indent}
          data-slate-type="image">
          <ImageNodeInActive
            width={width}
            height={height}>
            <img
              {...attributes}
              src={src}/>
            {children}
          </ImageNodeInActive>
        </ImageContiner>
      );
    }

    return (
      <ImageContiner
        align={align}
        indent={indent}
        data-slate-type="image">
        <Resizable
          handleSize={[20, 20]}
          lockAspectRatio
          minConstraints={[200, 200]}
          maxConstraints={[700, 700]}
          onResize={this.onResize}
          onResizeStop={this.onResizeStop}
          width={width + 10}
          height={height + 10}>
          {isSelected ? (
            <ImageNodeActive
              width={width + 10}
              height={height + 10}
              align={align}>
              <Toolbar>
                <ToolbarItem>
                  <FaTrashO onClick={this.remove}/>
                </ToolbarItem>
              </Toolbar>
              <img
                {...attributes}
                src={src}/>
              {children}
            </ImageNodeActive>
          ) : (
            <ImageNodeInActive
              width={width + 10}
              height={height + 10}
              align={align}>
              <img
                {...attributes}
                src={src}/>
              {children}
            </ImageNodeInActive>
          )}
        </Resizable>
      </ImageContiner>
    );
  }
}
