# @canner/slate-editor-renderer

[![npm version](https://badge.fury.io/js/%40canner%2Fslate-editor-renderer.svg)](https://badge.fury.io/js/%40canner%2Fslate-editor-renderer)

**NOTE: You should directly use it's plugin instead of writing render function.**

```js
import renderer from '@canner/slate-editor-renderer';
```

Renderers that define corresponding nodes and marks while rendering your editor. 

methods:

### commonNode(TagName) => React.Element<TagName>

If you want to render general tag names for nodes such as `p`, `blockquote`, `h1`, `h2`, etc...

### commonMark(TagName, styleKey?, styleValue?)

If you want to render general tag names for nodes such as `span`, `strong`, `code`, `i`, etc...

### emojiNode()
rendering emoji

### imageNode()
rendering video

### linkNode()
renderling inline links

### videoNode(source: 'youtube' | 'dailymotion' | 'youku' | 'vimeo')
rendering video

Supported video sources:
  * youtube
  * dailymotion
  * youku
  * vimeo

### Complete example:

```js

// all cases
function renderMark(props) { // pass this function to your editor's renderMark prop
  switch (props.mark.type) {
    case 'bold':
      return commonMark('strong')(props);
    case 'code':
      return commonMark('code')(props);
    case 'fontBgColor':
      return commonMark('span', 'backgroundColor', 'color')(props);
    case 'fontColor':
      return commonMark('span', 'color', 'color')(props);
    case 'fontSize':
      return commonMark('span', 'fontSize')(props);
    case 'letterSpacing':
      return commonMark('span', 'letterSpacing')(props);
    case 'italic':
      return commonMark('i')(props);
    case 'strikethrough':
      return commonMark('s')(props);
    case 'underline':
      return commonMark('u')(props);
  }
}

function renderNode(props) { // pass this function to your editor's renderNode prop
  switch (props.node.type) {
    case 'paragraph':
      return commonNode('p')(props);
    case 'blockquote':
      return commonNode('blockquote')(props);
    case 'emoji':
      return emojiNode()(props);
    case 'heading1':
      return commonNode('h1')(props);
    case 'heading2':
      return commonNode('h2')(props);
    case 'list-ul':
      return commonNode('ul')(props);
    case 'list-ol':
      return commonNode('ol')(props);
    case 'list-item':
      return commonNode('li')(props);
    case 'image':
      return imageNode()(props);
    case 'link':
      return linkNode()(props);
    case 'youtube':
      return videoNode('youtube')(props);
    case 'dailymotion':
      return videoNode('dailymotion')(props);
    case 'youku':
      return videoNode('youku')(props);
    case 'vimeo':
      return videoNode('vimeo')(props);
  }
}
```
