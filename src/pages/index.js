import * as React from "react"
import Seo from "../components/seo/seo"
import Layout from "../components/layout/layout"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { richTextOptions } from "../utils/richtext"

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      {
        contentfulSite {
          title
          homePageText {
            raw
          }
          description
        }
      }
    `
  )

  const { contentfulSite } = data;
  return (
    <Layout>
      <Seo
        title={contentfulSite.title}
        description={contentfulSite.description}
      />
      {documentToReactComponents(
        JSON.parse(contentfulSite.homePageText.raw),
        richTextOptions
      )}
    </Layout>
  )
}

export default IndexPage

// export const Head = () => <Seo title="Jelena" description="Jelan" />
