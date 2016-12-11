import React, {PropTypes, Component} from 'react';
import {blocks} from 'slate-plugins';
import {Resizable} from 'react-resizable';
import styles from './videoNode.scss';
import './react-resizable.lib.scss';

/* eslint-disable require-jsdoc */
export default function(type) {
  const NodeComponent = ({...props}) => {
    return (
      <VideoNode {...props} type={type}/>
    );
  };
  return NodeComponent;
}

class VideoNode extends Component {

  constructor(props) {
    super(props);

    this.onResizeEnd = this.onResizeEnd.bind(this);
    this.onResize = this.onResize.bind(this);

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
    editor: PropTypes.object,
    type: PropTypes.string
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

  render() {
    const {node, state, type, attributes, children} = this.props;
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

    return (
      <Resizable
        lockAspectRatio
        onResize={this.onResize}
        onResizeEnd={this.onResizeEnd}
        width={width}
        height={height}>
        <div
          className={isFocused ? styles.videoNodeActive : styles.videoNode}
          style={{
            textAlign: align,
            paddingLeft: `${3 * indent}em`,
            width,
            height
          }}>
          <div className={styles.overlay}/>
          <div className={styles.videoToolbar}>
            <div className={styles.videoToolbarItem}>
            </div>
          </div>
          <iframe
            {...attributes}
            src={link}/>
          {children}
        </div>
      </Resizable>
    );
  }
}
