import React from "react"
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import styled from "@emotion/styled";



const PARAGRAPH = styled.p`
  margin-bottom: 1rem;
`
export const richTextOptions = {
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <PARAGRAPH>{children}</PARAGRAPH>,
      [INLINES.HYPERLINK]: (node, children) => <a href={node.data.uri} target="__blank">{children}</a>
    },
  };