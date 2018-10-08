import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import posed from 'react-pose'
import { navigate } from '@reach/router'
import media from './utility/media'
import theme from './utility/theme'
import baseStyles from './utility/basestyle'
import Sidebar from './Sidebar'

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
    transition: ({ timingOffset }) => {
      return {
        duration: timingOffset,
        ease: 'easeOut',
      }
    },
  },
})

const LayoutSidenav = styled(PosedLayoutSidenav)`
  position: fixed;
  z-index: 100;
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

const PosedLayoutContainer = posed(LayoutContainer)({
  enter: {
    opacity: 1,
    delayChildren: ({ isfirstLoad }) => (isfirstLoad ? 700 : 100),
    staggerChildren: 0,
    transition: {
      ease: 'easeOut',
    },
  },
  exit: { opacity: 0, delay: 0 },
})

const PosedPageChanger = posed.div({
  enter: {
    x: '0vw',
    // transition: {
    //   x: {
    //     ease: 'easeInOut',
    //     duration: 1000,
    //   },
    // },
    transition: ({ from, to }) => ({
      type: 'keyframes',
      values: ['100vw', '0vw', '0vw', '-100vw'],
      times: [0, 0.33, 0.66, 1],
      duration: 1000
    })
  },
  exit: {
    x: '100vw',
    transition: {
      x: {
        ease: 'easeIn',
        duration: 1000,
      },
    },
  },
})

const PageChanger = styled(PosedPageChanger)`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  background: ${theme.primary};
`

class Layout extends Component {
  state = {
    pageChanging: false,
    contentLoader: false,
  }

  startPageChanging = nextPagePath => {
    this.setState(prevState => {
      return {
        pageChanging: true,
        nextPagePath,
      }
    })

    this.timerContentLoader = setTimeout(() => {
      this.setState({
        contentLoader: true,
      })
    }, 350)
  }

  stopPageChanging = () => {
    navigate(this.state.nextPagePath)
    this.setState({
      pageChanging: false,
      contentLoader: false,
    })
  }

  componentWillUnmount() {
    clearTimeout(this.timerContentLoader)
  }

  render() {
    const { children, isfirstLoad, timingOffset } = this.props
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
              {this.state.pageChanging ? (
                <PageChanger
                  onPoseComplete={() => this.stopPageChanging()}
                  initialPose="exit"
                  pose="enter"
                />
              ) : null}
              <Overlay />
              <LayoutInner>
                <LayoutSidenav
                  timingOffset={timingOffset}
                  initialPose={isfirstLoad ? 'closed' : 'open'}
                  pose="open"
                >
                  <Sidebar
                    isfirstLoad={isfirstLoad}
                    timingOffset={timingOffset}
                    startPageChangingHandler={this.startPageChanging}
                  />
                </LayoutSidenav>

                <PosedLayoutContainer
                  isfirstLoad={isfirstLoad}
                  initialPose="exit"
                  pose="enter"
                >
                  {this.state.contentLoader ? null : children}
                </PosedLayoutContainer>
              </LayoutInner>
            </div>
          </>
        )}
      />
    )
  }
}

export default Layout
