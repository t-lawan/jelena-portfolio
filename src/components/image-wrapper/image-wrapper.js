import styled from "@emotion/styled/macro"
import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { richTextFromMarkdown } from "@contentful/rich-text-from-markdown"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { richTextOptions } from "../../utils/richtext"
const StyledImageWrapper = styled.div``

const Caption = styled.p`
  margin-top: 0.5rem;
  text-align: center;
`

export const ImageWrapper = props => {
  const document = richTextFromMarkdown("# Hello World")
  console.log(document)

  console.log(props.content)
  return (
    <StyledImageWrapper>
      <GatsbyImage
        width={"100%"}
        image={props.image}
        alt={props.content.image.description ?? "image"}
        quality={100}
      />

      <Caption>
        {" "}
        {documentToReactComponents(
          JSON.parse(props.content.description.raw),
          richTextOptions
        )}{" "}
      </Caption>
    </StyledImageWrapper>
  )
}
