// @flow
import * as React from 'react';
import type {Change} from 'slate';
import type {nodeProps} from './type';
import inlineAddData from '@canner/slate-helper-inline-adddata';

import {Resizable} from 'react-resizable';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import FaEdit from 'react-icons/lib/fa/edit';
import FaExternal from 'react-icons/lib/fa/external-link';
import VideoModal from './components/videoModal';
import {ImageNodeInActive, ImageNodeActive, ImageContiner,
  Toolbar, ToolbarItem} from './components/image';

import 'react-resizable/css/styles.css';

export const DEFAULT = {
  youtube: 'youtube',
  dailymotion: 'dailymotion',
  youku: 'youku',
  vimeo: 'vimeo'
}

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
    this.remove = this.remove.bind(this);
    this.edit = this.edit.bind(this);
    this.hideModal = this.hideModal.bind(this);

    this.state = {
      width: null,
      height: null,
      isShow: false
    };
  }

  static defaultProps = {
    youtubeType: DEFAULT.youtube,
    dailymotionType: DEFAULT.dailymotion,
    youkuType: DEFAULT.youku,
    vimeoType: DEFAULT.vimeo,
    idKey: 'id'
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
    const {node, type, attributes, children, editor,
      readOnly, isSelected, getId, getWidth, getHeight,
      textAlign, paddingLeft, youtubeType, dailymotionType, youkuType, vimeoType, idKey} = this.props;
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
          </ImageNodeInActive>
        </ImageContiner>
      );
    }

    return (
      <ImageContiner
        align={align}
        data-slate-type="video">
        <Resizable
          handleSize={[20, 20]}
          lockAspectRatio
          minConstraints={[256, 182]}
          maxConstraints={[700, 500]}
          onResize={this.onResize}
          onResizeStop={this.onResizeStop}
          width={width + 10}
          height={height + 10}>
          {isSelected ? (
            <ImageNodeActive
              width={width + 10}
              height={height + 10}
              align={align}
              indent={indent}>
              <Toolbar>
                <ToolbarItem>
                  <FaExternal onClick={() => {
                    const win = window.open(link, '_blank');
                    win.focus();
                  }}/>
                </ToolbarItem>
                <ToolbarItem>
                  <FaEdit onClick={this.edit}/>
                </ToolbarItem>
                <ToolbarItem>
                  <FaTrashO onClick={this.remove}/>
                </ToolbarItem>
              </Toolbar>
              <iframe
                {...attributes}
                style={{pointerEvents: 'none'}}
                src={link}/>
              {children}
            </ImageNodeActive>
          ) : (
            <ImageNodeInActive
              width={width + 10}
              height={height + 10}
              align={align}
              indent={indent}>
              <iframe
                {...attributes}
                width={width}
                height={height}
                style={{pointerEvents: 'none'}}
                src={link}/>
              {children}
            </ImageNodeInActive>
          )}
        </Resizable>
        <VideoModal
          youkuType={youkuType}
          youtubeType={youtubeType}
          vimeoType={vimeoType}
          dailymotionType={dailymotionType}
          idKey={idKey}
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
