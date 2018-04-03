// @flow
import * as React from 'react';
import type {Change} from 'slate';
import type {nodeProps} from './type';
import blockAddData from '@canner/slate-helper-block-adddata';

import {ResizableBox} from 'react-resizable';
import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import FaEdit from 'react-icons/lib/fa/edit';
import VideoModal from './components/videoModal';
import {ImageNodeInActive, ImageNodeActive, ImageContiner,
  Toolbar, ToolbarItem, Overlay} from './components/image';

import 'react-resizable/css/styles.css';

export default function(type, options) {
  const NodeComponent = ({...props}) => {
    return (
      <VideoNode {...props} {...options} type={type}/>
    );
  };
  return NodeComponent;
}

type Props = nodeProps & {
  change: Change,
  editor: Object,
  readOnly: Boolean
};

class VideoNode extends React.Component<Props> {

  constructor(props) {
    super(props);

    this.onResizeStop = this.onResizeStop.bind(this);
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
      .removeNodeByKey(node.key);

    editor.onChange(newChange);
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
    const {node, type, attributes, children, editor, readOnly, isSelected, getId, getWidth, getHeight, textAlign, paddingLeft} = this.props;
    let link;
    const align = textAlign(node);
    const indent = paddingLeft(node);
    const id = getId(node);
    const width = this.state.width || getWidth(node) || 560;
    const height = this.state.height || getHeight(node) || 315;

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
      // if editor is readOnly
      return (
        <ImageContiner
          align={align}
          data-slate-type="video">
          <ImageNodeInActive
            width={width}
            height={height}
            indent={indent}>
            <iframe
              {...attributes}
              src={link}/>
            {children}
            {children}
          </ImageNodeInActive>
        </ImageContiner>
      );
    }

    return (
      <ImageContiner
        align={align}
        data-slate-type="video">
        <ResizableBox
          lockAspectRatio
          minConstraints={[256, 182]}
          maxConstraints={[700, 500]}
          onResize={this.onResize}
          onResizeStop={this.onResizeStop}
          width={width + 20}
          height={height + 20}>
          {isSelected ? (
            <ImageNodeActive
              width={width}
              height={height}
              align={align}
              indent={indent}>
              <Overlay/>
              <Toolbar>
                <ToolbarItem>
                  <FaArrowUp onClick={this.moveUp}/>
                </ToolbarItem>
                <ToolbarItem>
                  <FaArrowDown onClick={this.moveDown}/>
                </ToolbarItem>
                <ToolbarItem>
                  <FaTrashO onClick={this.remove}/>
                </ToolbarItem>
                <ToolbarItem>
                  <FaEdit onClick={this.edit}/>
                </ToolbarItem>
              </Toolbar>
              
              <iframe
                {...attributes}
                src={link}/>
              {children}
            </ImageNodeActive>
          ) : (
            <ImageNodeInActive
              width={width}
              height={height}
              align={align}
              indent={indent}>
              <Overlay/>
              <iframe
                {...attributes}
                src={link}/>
              {children}
            </ImageNodeInActive>
          )}
        </ResizableBox>
        <VideoModal
          onChange={editor.onChange}
          change={editor.state.value.change()}
          initialValue={link}
          node={node}
          width={width}
          height={height}
          hideModal={this.hideModal}
          isShow={this.state.isShow}/>
      </ImageContiner>
    );
  }
}
