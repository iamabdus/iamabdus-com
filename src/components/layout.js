import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import media from './utility/media'
import baseStyles from './utility/basestyle'

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

//Bas estyling for SidebarContainer and LayoutContainer
const LayoutContainerBase = styled.div`
  padding-top: 20px;
  padding-bottom: 40px;
  @media (min-width: ${media.md}) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  @media (min-width: ${media.md}) {
    padding-top: 120px;
    padding-bottom: 120px;
  }
`

const LayoutSidenav = styled(LayoutContainerBase)`
  position: relative;
  position: fixed;
  min-height: 100%;
  display: flex;
  ::before {
    content: ' ';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 2000px;
    background-color: #13151b;
    z-index: 1;
  }
`

const LayoutContainer = styled(LayoutContainerBase)`
  padding-left: 85px;
  display: flex;
  flex-direction: column;
  @media (min-width: ${media.md}) {
    padding-left: 180px;
  }
`

const Content = styled.div`
  display: flex;
  align-items: stretch;
  flex: 1 1 auto;
  flex-direction: column;
`

const Layout = props => (
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
            <LayoutSidenav>
              <Sidebar {...props} />
            </LayoutSidenav>
            <LayoutContainer>
              <Content>{props.children}</Content>
            </LayoutContainer>
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
