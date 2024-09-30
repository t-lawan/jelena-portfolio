import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ImageCarousel } from "../../components/image-carousel/image-carousel"
import { VideoPlayer } from "../../components/video-player/video-player"
import { richTextOptions } from "../richtext"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export class Content {
  id
  type
  content
  constructor(id, type, content) {
    this.id = id
    this.type = type
    this.content = content
  }
}

export const renderContent = content => {
  // console.log("content", content)

  if (content.image) {
    const image = getImage(content.image)
    return (
      <>
        <GatsbyImage width={"100%"} image={image} alt={image.filename} />
        {/* <p> {content.image.description} </p> */}
        <p> {content.image.filename} </p>
      </>
    )
  }

  if (content.imageCarousel) {
    return <ImageCarousel images={content.imageCarousel} />
  }

  if (content.video) {
    return <VideoPlayer url={content.video} />
  }

  if (content.text) {
    return documentToReactComponents(
      JSON.parse(content.text.raw),
      richTextOptions
    )
  }

  return ""
}
