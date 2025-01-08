import styled from "@emotion/styled/macro"
import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const StyledImageWrapper = styled.div``

const Caption = styled.p`
  margin-top: 0.5rem;
  text-align: center;
`

export const ImageWrapper = props => {

  console.log(props.content)
  return (
    <StyledImageWrapper>
      <GatsbyImage
        width={"100%"}
        image={props.image}
        alt={props.content.image.description ?? "image"}
        quality={100}
      />
      <Caption> {props.content.caption?.caption} </Caption>
    </StyledImageWrapper>
  )
}
