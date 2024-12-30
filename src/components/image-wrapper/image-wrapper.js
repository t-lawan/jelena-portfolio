import styled from "@emotion/styled/macro"
import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const StyledImageWrapper = styled.div``

const Caption = styled.p`
  margin-top: 0.5rem;
  text-align: center;
`

export const ImageWrapper = props => {
  return (
    <StyledImageWrapper>
      <GatsbyImage
        width={"100%"}
        image={props.image}
        alt={props.content.image.description ?? ""}
        quality={100}
      />
      <Caption> {props.content.image.description} </Caption>
    </StyledImageWrapper>
  )
}
