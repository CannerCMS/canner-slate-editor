// @flow
import * as React from 'react';
import type {Change} from 'slate';
import type {nodeProps} from './type';

import {Tooltip} from 'antd';
// import {Resizable} from 'react-resizable';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import FaEdit from 'react-icons/lib/fa/edit';
import FaExternal from 'react-icons/lib/fa/external-link';
import VideoModal from './components/videoModal';
import {ImageNodeInActive, ImageNodeActive, Toolbar, ToolbarItem} from './components/image';

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

  remove = () => {
    const { editor, node } = this.props;
    editor.change(change => change.removeNodeByKey(node.key));
  }

  edit = (e) => {
    e.preventDefault()
    this.setState({
      isShow: true
    });
  }

  hideModal = () => {
    this.setState({
      isShow: false
    });
  }

  render() {
    const {node, type, attributes, children, editor,
      readOnly, isSelected, getId, getWidth, getHeight,
      youtubeType, dailymotionType, youkuType, vimeoType, idKey} = this.props;
    let link;
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

    return (
      <span {...attributes}>
        {
          !isSelected || readOnly ? (
            <ImageNodeInActive
              width={width}
              height={height}>
              <iframe
                style={{pointerEvents: 'none'}}
                src={link}/>
            </ImageNodeInActive>
          ) : (
            <ImageNodeActive
              width={width}
              height={height}>
              <Toolbar>
                <ToolbarItem>
                  <Tooltip title="Open in new window">
                    <FaExternal
                      onMouseDown={e => e.preventDefault()}
                      onClick={() => {
                        const win = window.open(link, '_blank');
                        win.focus();
                      }}/>
                  </Tooltip>
                </ToolbarItem>
                <ToolbarItem>
                  <Tooltip title="Edit">
                    <FaEdit
                      onMouseDown={e => e.preventDefault()}
                      onClick={this.edit}/>
                  </Tooltip>
                </ToolbarItem>
                <ToolbarItem>
                  <Tooltip title="Remove">
                    <FaTrashO
                      onMouseDown={e => e.preventDefault()}
                      onClick={this.remove}/>
                  </Tooltip>
                </ToolbarItem>
              </Toolbar>
              <iframe
                style={{pointerEvents: 'none'}}
                src={link}/>
            </ImageNodeActive>
          )
        }
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
        {children}
      </span>
    );
  }
}
