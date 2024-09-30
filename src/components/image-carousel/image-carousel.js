import React from "react"
import styled from "@emotion/styled/macro"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Carousel } from "react-responsive-carousel"

const StyledCarousel = styled(Carousel)`
  background: transparent;
  /* min-height: 20vh; */
  /* width: 80%; */
  

  .carousel .slide {
    background: transparent;
    list-style-type: none;
    text-align: left;
  }
  margin-bottom: 2rem;
`

export const ImageCarousel = ({ images }) => {
  return (
    <StyledCarousel
      showThumbs={false}
      showArrows={false}
      showIndicators={false}
      showStatus={false}
      centerMode={false}
      swipeable={false}
      stopOnHover={true}
      dynamicHeight={false}
      infiniteLoop={true}
      autoPlay={true}
      width={"100%"}
    >
      {images.map((image, index) => {
        console.log("content", image)
        const img = getImage(image)
        
        return(
        <div key={index}>
            <GatsbyImage image={img} alt={image.filename} />
            {/* <p> {image.description} </p> */}
            <p> {image.filename} </p>
        </div>
      )})}
    </StyledCarousel>
  )
}
