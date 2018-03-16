// @flow
import * as React from 'react';
import type {Change} from 'slate';
import type {nodeProps} from './type';
import blockAddData from '@canner/slate-helper-block-adddata';

import {Resizable} from 'react-resizable';
import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import FaEdit from 'react-icons/lib/fa/edit';
import VideoModal from './videoModal';

import styles from './style/videoNode.scss';
import './style/react-resizable.lib.scss';

export default function(type, readOnly) {
  const NodeComponent = ({...props}) => {
    return (
      <VideoNode {...props} type={type} readOnly={readOnly}/>
    );
  };
  return NodeComponent;
}

class VideoNode extends Component {

  constructor(props) {
    super(props);

    this.onResizeEnd = this.onResizeEnd.bind(this);
    this.onResize = this.onResize.bind(this);
    this.moveUp = this.moveUp.bind(this);
    this.moveDown = this.moveDown.bind(this);
    this.remove = this.remove.bind(this);
    this.edit = this.edit.bind(this);
    this.hideModal = this.hideModal.bind(this);

    this.state = {
      width: null,
      height: null,
      isShow: false
    };
  }

  static propTypes = {
    attributes: PropTypes.object,
    children: PropTypes.any,
    node: PropTypes.any,
    state: PropTypes.object,
    editor: PropTypes.object,
    type: PropTypes.string,
    readOnly: PropTypes.bool
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

  edit(e) {
    e.preventDefault();
    this.setState({
      isShow: true
    });
  }

  hideModal() {
    this.setState({
      isShow: false
    });
  }

  render() {
    const {node, state, type, attributes, children, editor, readOnly} = this.props;
    let link;
    const align = node.data.get('align');
    const indent = node.data.get('indent');
    const id = node.data.get('id');
    const width = this.state.width || node.data.get('width') || 560;
    const height = this.state.height || node.data.get('height') || 315;
    const isFocused = state.selection.hasEdgeIn(node);

    if (type === 'youtube') {
      link = `https://www.youtube.com/embed/${id}`;
    } else if (type === 'dailymotion') {
      link = `https://www.dailymotion.com/embed/video/${id}`;
    } else if (type === 'vimeo') {
      link = `https://player.vimeo.com/video/${id}`;
    } else if (type === 'youku') {
      link = `https://player.youku.com/embed/${id}`;
    }

    if (readOnly) {
      return (
        <div style={{
          textAlign: align,
          paddingLeft: `${3 * indent}em`
        }} data-slate-type="video">
          <div
            className={styles.videoNode}
            style={{
              width,
              height
            }}>
            <iframe
              {...attributes}
              src={link}/>
            {children}
          </div>
        </div>
      );
    }

    return (
      <div style={{
        textAlign: align,
        paddingLeft: `${3 * indent}em`
      }} data-slate-type="video">
        <Resizable
          lockAspectRatio
          minConstraints={[256, 182]}
          maxConstraints={[700, 500]}
          onResize={this.onResize}
          onResizeEnd={this.onResizeEnd}
          width={width}
          height={height}>
          <div
            className={isFocused ? styles.videoNodeActive : styles.videoNode}
            style={{
              width,
              height
            }}>
            <div className={styles.overlay}/>
            <div className={styles.videoToolbar}>
              <div className={styles.videoToolbarItem}>
                <FaArrowUp onClick={this.moveUp}/>
              </div>
              <div className={styles.videoToolbarItem}>
                <FaArrowDown onClick={this.moveDown}/>
              </div>
              <div className={styles.videoToolbarItem}>
                <FaTrashO onClick={this.remove}/>
              </div>
              <div className={styles.videoToolbarItem}>
                <FaEdit onClick={this.edit}/>
              </div>
            </div>
            <iframe
              {...attributes}
              src={link}/>
            {children}
          </div>
        </Resizable>
        <VideoModal
          onChange={editor.onChange}
          state={state}
          initialValue={link}
          node={node}
          width={width}
          height={height}
          hideModal={this.hideModal}
          isShow={this.state.isShow}/>
      </div>
    );
  }
}
