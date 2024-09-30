/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const allContentfulProjects = await graphql(`
    {
      allContentfulProjects {
        edges {
          node {
            id
            slug
            seoDescriptions {
              seoDescriptions
            }
            title
            contentList {
              content {
                ... on ContentfulImage {
                  id
                  image {
                    gatsbyImageData
                    filename
                    description
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
              }
            }
          }
        }
      }
    }
  `)

  allContentfulProjects.data.allContentfulProjects.edges.forEach(({ node }) => {
    createPage({
      component: require.resolve("./src/templates/project.js"),
      context: {
        page: {
          id: node.id,
          title: node.title,
          slug: node.slug,
          description: node.seoDescriptions.seoDescriptions,
          content: node.contentList.map(item => item.content),
        },
      },
      path: node.slug,
    })
  })
}
