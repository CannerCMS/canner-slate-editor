// @flow
import * as React from 'react';
import type {Change} from 'slate';
import type {nodeProps} from './type';
import blockAddData from '@canner/slate-helper-block-adddata';

import {Resizable} from 'react-resizable';
import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import {ImageNodeInActive, ImageNodeActive} from './imageNodeComponents/imageComponents';

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

    this.onResizeEnd = this.onResizeEnd.bind(this);
    this.onResize = this.onResize.bind(this);
    this.moveUp = this.moveUp.bind(this);
    this.moveDown = this.moveDown.bind(this);
    this.remove = this.remove.bind(this);

    this.state = {
      width: null,
      height: null
    };
  }

  onResizeEnd(e, data) {
    const {onChange} = this.props.editor;
    const {width, height} = data.size;
    onChange(blockAddData(this.props.state, {
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
    const {state, node, editor} = this.props;
    const {document} = state;
    const parent = document.getParent(node);
    const index = parent.nodes.indexOf(node) - 1;
    let newState = state
      .transform()
      .moveNodeByKey(node, parent, index === -1 ? 0 : index)
      .apply();
    editor.onChange(newState);
  }

  moveDown() {
    const {state, node, editor} = this.props;
    const {document} = state;
    const parent = document.getParent(node);
    const index = parent.nodes.indexOf(node) + 1;
    let newState = state
      .transform()
      .moveNodeByKey(node, parent, index > parent.nodes.count() ? parent.nodes.count() : index) // eslint-disable-line max-len
      .apply();
    editor.onChange(newState);
  }

  remove() {
    const {state, node, editor} = this.props;
    const newState = state.transform()
      .unsetSelection()
      .removeNodeByKey(node.key)
      .apply();

    editor.onChange(newState);
  }

  render() {
    const {node, change, attributes, children, readOnly} = this.props;
    const align = node.data.get('align');
    const indent = node.data.get('indent');
    const src = node.data.get('src');
    const width = this.change.width || node.data.get('width');
    const height = this.change.height || node.data.get('height');
    const isFocused = change.selection.hasEdgeIn(node);

    if (readOnly) {
      // if editor is readOnly
      return (
        <div style={{
          textAlign: align,
          paddingLeft: `${3 * indent}em`
        }} data-slate-type="image">
          <ImageNodeInActive
            style={{
              width,
              height
            }}>
            <img
              {...attributes}
              src={src}/>
            {children}
          </ImageNodeInActive>
        </div>
      );
    }

    return (
      <div style={{
        textAlign: align,
        paddingLeft: `${3 * indent}em`
      }} data-slate-type="image">
        <Resizable
          lockAspectRatio
          minConstraints={[200, 200]}
          maxConstraints={[700, 700]}
          onResize={this.onResize}
          onResizeEnd={this.onResizeEnd}
          width={width}
          height={height}>
          {isFocused ? (
            <ImageNodeActive
              style={{
                width,
                height
              }}>
              <div className="overlay"/>
              <div className="imageToolbar">
                <div className="imageToolbarItem">
                  <FaArrowUp onClick={this.moveUp}/>
                </div>
                <div className="imageToolbarItem">
                  <FaArrowDown onClick={this.moveDown}/>
                </div>
                <div className="imageToolbarItem">
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
              style={{
                width,
                height
              }}>
              <div className="overlay"/>
              <img
                {...attributes}
                src={src}/>
              {children}
            </ImageNodeInActive>
          )}
        </Resizable>
      </div>
    );
  }
}
