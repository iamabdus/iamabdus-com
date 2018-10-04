import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import posed from 'react-pose'
import { GlobalContext } from '../contexts/GlobalContext'
import media from './utility/media'
import theme from './utility/theme'
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

const PosedLayoutSidenav = posed(LayoutContainerBase)({
  closed: { x: '-115vw' },
  open: {
    x: 0,
    transition: {
      duration: 500,
      ease: 'easeOut',
    },
  },
})

const LayoutSidenav = styled(PosedLayoutSidenav)`
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

class Layout extends Component {
  constructor() {
    super()

    if (!window.isVisited) {
      this.state = {
        openSidebar: false,
        visitedFirst: true,
      }
      //Set global variable checker isVisited
      window.isVisited = true
    } else {
      this.state = {
        openSidebar: false,
      }
    }
  }

  componentDidMount() {
    this.openSidebar = setTimeout(() => {
      this.setState({ openSidebar: !this.state.openSidebar })
    }, 100)
  }

  componentWillUnmount() {
    clearTimeout(this.openSidebar)
  }

  render() {
    const { children } = this.props
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
                href="https://fonts.googleapis.com/css?family=Abril+Fatface|Montserrat:400,500"
                rel="stylesheet"
              />
              <style type="text/css">{`
                  html,body {
                      background-color: ${theme.bodyBg};
                      margin: 0;
                      padding: 0;
                      overflow: hidden
                  }
              `}</style>
            </Helmet>
            {baseStyles()}

            <div className="layout-wrapper">
              <Overlay />
              <LayoutInner>
                {this.state.visitedFirst ? (
                  <LayoutSidenav
                    pose={this.state.openSidebar ? 'open' : 'closed'}
                  >
                    <Sidebar visitedFirst />
                  </LayoutSidenav>
                ) : (
                  <LayoutSidenav pose="open">
                    <Sidebar />
                  </LayoutSidenav>
                )}
                <LayoutContainer>{children}</LayoutContainer>
              </LayoutInner>
            </div>
          </>
        )}
      />
    )
  }
}


class LayoutWrapper extends Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {({isfirstLoad}) => (
          <Layout {...this.props} isfirstLoad={isfirstLoad}/>
        )}
      </GlobalContext.Consumer>
    )
  }
}

export default LayoutWrapper
