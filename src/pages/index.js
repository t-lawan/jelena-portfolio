import * as React from "react"
import Seo from "../components/seo/seo"
import Layout from "../components/layout/layout"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { richTextOptions } from "../utils/richtext"
import styled from "@emotion/styled/macro"
import { size } from "../index.styles"
import { renderContent } from "../utils/models/Content"

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

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      {
        contentfulSite {
          title
          description
          contentList {
            content {
              ... on ContentfulImage {
                id
                image {
                  gatsbyImageData
                  filename
                  description
                }
                caption {
                  caption
                }
              }
              ... on ContentfulImageCarousel {
                id
                imageCarousel {
                  gatsbyImageData
                  filename
                  description
                }
              }
              ... on ContentfulText {
                id
                text {
                  raw
                }
              }
              ... on ContentfulVideo {
                id
                url
              }
            }
          }
        }
      }
    `
  )

  const { contentfulSite } = data

  return (
    <Layout>
      <Seo
        title={contentfulSite.title}
        description={contentfulSite.description}
      />
      {contentfulSite.contentList.map((obj, index) => (
        <ContentWrapper key={index}>{renderContent(obj.content)}</ContentWrapper>
      ))}
    </Layout>
  )
}

export default IndexPage

// export const Head = () => <Seo title="Jelena" description="Jelan" />
