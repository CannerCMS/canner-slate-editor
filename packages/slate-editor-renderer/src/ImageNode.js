// @flow
import * as React from 'react';
import type {Change} from 'slate';
import type {nodeProps} from './type';
import blockAddData from '@canner/slate-helper-block-adddata';

import {ResizableBox} from 'react-resizable';
import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import {ImageNodeInActive, ImageNodeActive, ImageContiner} from './imageNodeComponents/imageComponents';

import 'react-resizable/css/styles.css';

export default function(readOnly) {
  const NodeComponent = ({...props}: nodeProps) => {
    return (
      <ImageNode {...props} readOnly={readOnly}/>
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
    this.moveUp = this.moveUp.bind(this);
    this.moveDown = this.moveDown.bind(this);
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

    onChange(blockAddData(value.change(), {
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

  moveUp() {
    const {node, editor, parent} = this.props;
    const {value} = editor.state;
    const index = parent.nodes.indexOf(node) - 1;
    let newChange = value.change()
      .moveNodeByKey(node.key, parent.key, index === -1 ? 0 : index);

    editor.onChange(newChange);
  }

  moveDown() {
    const {node, editor, parent} = this.props;
    const {value} = editor.state;
    const index = parent.nodes.indexOf(node) + 1;
    let newChange = value.change()
      .moveNodeByKey(node.key, parent.key, index > parent.nodes.count() ? parent.nodes.count() : index)

    editor.onChange(newChange);
  }

  remove() {
    const {editor, node} = this.props;
    const {value} = editor.state;
    const newChange = value.change()
      .deselect()
      .removeNodeByKey(node.key);

    editor.onChange(newChange);
  }

  render() {
    const {node, attributes, children, readOnly, isSelected} = this.props;
    const align = node.data.get('align');
    const indent = node.data.get('indent');
    const src = node.data.get('src');
    const width = this.state.width || node.data.get('width');
    const height = this.state.height || node.data.get('height');

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
        <ResizableBox
          lockAspectRatio
          minConstraints={[200, 200]}
          maxConstraints={[700, 700]}
          onResize={this.onResize}
          onResizeStop={this.onResizeStop}
          width={width + 20}
          height={height + 20}>
          {isSelected ? (
            <ImageNodeActive
              width={width}
              height={height}
              align={align}>
              <div className="overlay"/>
              <div className="toolbar">
                <div className="toolbarItem">
                  <FaArrowUp onClick={this.moveUp}/>
                </div>
                <div className="toolbarItem">
                  <FaArrowDown onClick={this.moveDown}/>
                </div>
                <div className="toolbarItem">
                  <FaTrashO onClick={this.remove}/>
                </div>
              </div>
              <img
                {...attributes}
                src={src}/>
              {children}
            </ImageNodeActive>
          ) : (
            <ImageNodeInActive
              width={width}
              height={height}
              align={align}>
              <div className="overlay"/>
              <img
                {...attributes}
                src={src}/>
              {children}
            </ImageNodeInActive>
          )}
        </ResizableBox>
      </ImageContiner>
    );
  }
}
