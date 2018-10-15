const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const portfolioSingleTemplate = path.resolve('src/templates/portfolio-single.js')
    resolve(
      graphql(`
        {
          allContentfulProjectSingle {
            edges {
              node {
                projectTitle
                slug
                thumbnail {
                  file {
                    url
                  }
                }
                description {
                  description
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulProjectSingle.edges.forEach(edge => {
          createPage({
            path: "/portfolio/" + edge.node.slug,
            component: portfolioSingleTemplate,
            context: {
              slug: "/portfolio/" + edge.node.slug,
            },
          })
        })
        return
      })
    )
  })
}
