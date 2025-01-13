import React from "react"
import Layout from "../components/layout/layout"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styled from "@emotion/styled/macro"
import { renderContent } from "../utils/models/Content"
import { size } from "../index.styles"

const ContentWrapper = styled.div`
  padding: 0 0 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 80%;
  @media only screen and (max-width: ${size.tablet}) {
    width: 100%;
  }
`

const ProjectPage = context => {

  let page = context.pageContext.page
  return (
    <Layout title={page.title} description={page.description}>
      {page.content.map((content, index) => (
        <ContentWrapper key={index}>{renderContent(content)}</ContentWrapper>
      ))}
    </Layout>
  )
}

export default ProjectPage
