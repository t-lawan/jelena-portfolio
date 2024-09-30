import React from "react"
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';

export const richTextOptions = {
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => <a href={node.data.uri} target="__blank">{children}</a>
    },
  };