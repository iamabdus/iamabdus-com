import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Layout from './Layout'
import theme from '../utility/theme'
import baseStyles from '../utility/basestyle'
import 'react-perfect-scrollbar/dist/css/styles.css'
import PerfectScrollbar from 'react-perfect-scrollbar'

//timingOffset for initial sidebar transition duration
const timingOffset = 500

class PageWrapper extends Component {
  state = {
    loadPage: false,
  }

  componentDidMount() {
    this.setState(state => {
      return {
        loadPage: true,
      }
    })
  }

  render() {
    const { children, ...rest } = this.props
    const { loadPage } = this.state

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'I am Abdus Salam' },
                {
                  name: 'keywords',
                  content:
                    'iamabdus, wordpress, design, sketch, photoshop, illustrator, adobe xd',
                },
              ]}
            >
              <html lang="en" />
              <link
                href="https://fonts.googleapis.com/css?family=Abril+Fatface|Montserrat:300,400,500,700"
                rel="stylesheet"
              />
              <style type="text/css">{`
                  html,body {
                      background-color: ${theme.bodyBg};
                      margin: 0;
                      padding: 0;
                  }
              `}</style>
            </Helmet>

            {baseStyles()}

            {loadPage ? (
              <PerfectScrollbar>
                <Layout {...rest} timingOffset={timingOffset}>
                  {children}
                </Layout>
              </PerfectScrollbar>
            ) : null}
          </>
        )}
      />
    )
  }
}

export default PageWrapper
