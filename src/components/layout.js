import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import media from './utility/media'
import baseStyles from './utility/basestyle'

import Header from './header'
import Sidebar from './sidebar'

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(19, 21, 27, 0.8);
  @media (min-width: ${media.md}) {
    display: none;
  }
`
const LayoutInner = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  height: 100vh;
  @media (min-width: ${media.md}) {
    width: 720px;
  }
  @media (min-width: ${media.lg}) {
    width: 922px;
  }
  @media (min-width: ${media.xl}) {
    width: 1200px;
  }
`

const Layout = ({ children }) => (
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
        </Helmet>
        {baseStyles()}
        <div className="layout-wrapper">
          <Overlay />
          <LayoutInner>
            <Sidebar />
            <Header siteTitle={data.site.siteMetadata.title} />
            <div
              style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '0px 1.0875rem 1.45rem',
                paddingTop: 0,
              }}
            >
              {children}
            </div>
          </LayoutInner>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
