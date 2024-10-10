import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
// import { GlobalStyles, size } from "../../styles/global"
import Navbar from "../navbar/navbar"
import { GlobalStyles, size } from "../../index.styles"

const MainWrapper = styled.main`
  padding: 1rem;
  overflow-y: scroll;
`

const LayoutWrapper = styled.div`
  max-height: 100vh;
`

const TwoColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr;
  height: 100vh;

  @media only screen and (max-width: ${size.tablet}) {
    grid-template-columns: 1fr;
    align-content: baseline;
  }
`

const Layout = props => {

  return (
    <LayoutWrapper>
      <GlobalStyles />

      <TwoColumnWrapper>
        <Navbar />
        <MainWrapper>{props.children}</MainWrapper>
      </TwoColumnWrapper>

      {/* <Marquee /> */}
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired, 
}

export default Layout
