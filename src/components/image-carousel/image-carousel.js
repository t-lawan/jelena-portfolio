import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import Img from "gatsby-image"
import styled from "styled-components"
import ArrowLeft from "../../images/arrow_left.png"
import ArrowRight from "../../images/arrow_right.png"
import { size } from "../../index.styles"
import { connect } from "react-redux"
import { showMobileModal } from "../../store/actions"
import { ModalTypes } from "../../utility/richtext"

const StyledCarousel = styled(Carousel)``

const StyledCarouselWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 9fr 0.5fr;
  @media (max-width: ${size.tablet}) {
    grid-template-columns: 1fr;
  }
  /* flex-direction: row; */
`

const NavigationButtons = styled.img`
  margin: auto;
  padding: 0 0.2rem;
  cursor: pointer;
  @media (max-width: ${size.tablet}) {
    padding: 0;
    display: none;
  }
`

const Image = styled(Img)`
  img {
    object-fit: ${props =>
      props.isLandscape ? "cover !important" : "contain !important"};
    max-height: 400px !important;
    display: block;
    margin: 0 auto;
  }
  > picture > img {
    object-fit: ${props =>
      props.isLandscape ? "cover !important" : "contain !important"};
    max-height: 400px !important;
    display: block;
    margin: 0 auto;
    /* position: relative; */
  }
`
class ImageCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSlide: 0,
    }
  }

  previousSlide = () => {
    if (this.state.currentSlide >= 0) {
      this.setState({
        currentSlide: this.state.currentSlide - 1,
      })
    }
  }

  nextSlide = () => {
    this.setState({
      currentSlide: this.state.currentSlide + 1,
    })
  }

  onChange(slideNumber) {
    this.setState({
      currentSlide: slideNumber,
    })
  }

  showOnModal = (image_fluid) => {
    console.log("OPEN")
    this.props.showMobileModal(ModalTypes.IMAGE, image_fluid)
  }

  render() {
    return (
      <StyledCarouselWrapper>
        <NavigationButtons
          src={ArrowLeft}
          onClick={this.previousSlide.bind(this)}
        />
        <StyledCarousel
          centerMode={false}
          swipeable={true}
          dynamicHeight={true}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          showArrows={false}
          autoPlay={true}
          stopOnHover={true}
          infiniteLoop={true}
          onChange={this.onChange.bind(this)}
          selectedItem={this.state.currentSlide}
          onClick={this.showOnModal.bind(this)}
        >
          {this.props.images.map((im, index) => (
            <div onClick={this.showOnModal.bind(this, JSON.stringify(im.fluid))} key={index}>
              <Image
                isLandscape={im.fluid.aspectRatio > 1}
                fluid={im.fluid}
                
              />
            </div>
          ))}
        </StyledCarousel>
        <NavigationButtons
          src={ArrowRight}
          onClick={this.nextSlide.bind(this)}
        />
      </StyledCarouselWrapper>
    )
  }
}
const mapStateToProps = state => {
  return {
    show_mobile_modal: state.show_mobile_modal,
    modal_content: state.modal_content,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showMobileModal: (modal_content, image_fluid) => dispatch(showMobileModal(modal_content, image_fluid)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageCarousel)
