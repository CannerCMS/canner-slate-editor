import React, {PropTypes, Component} from 'react';
import {blocks} from 'slate-plugins';
import {Resizable} from 'react-resizable';
import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';
import FaTrashO from 'react-icons/lib/fa/trash-o';

import styles from './style/imageNode.scss';
import './style/react-resizable.lib.scss';

/* eslint-disable require-jsdoc */
export default function() {
  const NodeComponent = ({...props}) => {
    return (
      <ImageNode {...props}/>
    );
  };
  return NodeComponent;
}

class ImageNode extends Component {

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

  static propTypes = {
    attributes: PropTypes.object,
    children: PropTypes.any,
    node: PropTypes.any,
    state: PropTypes.object,
    editor: PropTypes.object
  };

  onResizeEnd(e, data) {
    const {onChange} = this.props.editor;
    const {width, height} = data.size;
    onChange(blocks.addDataToCurrent(this.props.state, {
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
    const {node, state, attributes, children} = this.props;
    const align = node.data.get('align');
    const indent = node.data.get('indent');
    const src = node.data.get('src');
    const width = this.state.width || node.data.get('width');
    const height = this.state.height || node.data.get('height');
    const isFocused = state.selection.hasEdgeIn(node);

    return (
      <div>
        <Resizable
          lockAspectRatio
          minConstraints={[200, 200]}
          maxConstraints={[700, 700]}
          onResize={this.onResize}
          onResizeEnd={this.onResizeEnd}
          width={width}
          height={height}>
          <div
            className={isFocused ? styles.imageNodeActive : styles.imageNode}
            style={{
              textAlign: align,
              paddingLeft: `${3 * indent}em`,
              width,
              height
            }}>
            <div className={styles.overlay}/>
            <div className={styles.imageToolbar}>
              <div className={styles.imageToolbarItem}>
                <FaArrowUp onClick={this.moveUp}/>
              </div>
              <div className={styles.imageToolbarItem}>
                <FaArrowDown onClick={this.moveDown}/>
              </div>
              <div className={styles.imageToolbarItem}>
                <FaTrashO onClick={this.remove}/>
              </div>
            </div>
            <img
              {...attributes}
              src={src}/>
            {children}
          </div>
        </Resizable>
      </div>
    );
  }
}
