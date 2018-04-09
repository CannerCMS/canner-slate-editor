// @flow
import React from 'react';
import commonNode from '@canner/slate-editor-renderer/lib/commonNode';
import linkNode from '@canner/slate-editor-renderer/lib/linkNode';
import {codeBlockNode, codeLineNode} from '@canner/slate-editor-renderer/lib/codeBlockNode';

export default (opts: any) => {
  return (props: any) => {
    const { node } = props;
    switch (node.type) {
      case opts.HEADING_1:
        return commonNode('h1')(props);
      case opts.HEADING_2:
        return commonNode('h2')(props);
      case opts.HEADING_3:
        return commonNode('h3')(props);
      case opts.HEADING_4:
        return commonNode('h4')(props);
      case opts.HEADING_5:
        return commonNode('h5')(props);
      case opts.HEADING_6:
        return commonNode('h6')(props);
      case opts.PARAGRAPH:
        return commonNode('p')(props);
      case opts.BLOCKQUOTE:
        return commonNode('blockquote')(props);
      case opts.UL_LIST:
        return commonNode('ul')(props);
      case opts.OL_LIST:
        return commonNode('ol')(props);
      case opts.LIST_ITEM:
        return commonNode('li')(props);
      case opts.CODE:
        return codeBlockNode({
          getSyntax: node => node.data.get('syntax')
        })(props);
      case opts.CODE_LINE:
        return codeLineNode()(props);
      case opts.HR:
        return <hr/>;
      case opts.IMAGE:
        const src = node.data.get('src');
        return (
          <img
          {...props.attributes}
          src={src}/>
        );
      case opts.LINK:
        return linkNode({
          getHref: (node) => node.data.get('href')
        })(props);
    }
  }
}