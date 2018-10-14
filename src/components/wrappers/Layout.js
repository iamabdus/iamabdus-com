import React, { Component } from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import { navigate } from '@reach/router'
import media from '../utility/media'
import theme from '../utility/theme'
import Sidebar from '../Sidebar'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  opacity: 0.9;
  background-color: ${theme.bodyBg};
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
  width: 100%;
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
    delayChildren: ({ isFirstLoad }) => (isFirstLoad ? 700 : 100),
    staggerChildren: 0,
    transition: {
      ease: 'easeOut',
    },
  },
  exit: { opacity: 0, delay: 0 },
})

const PosedPageChanger = posed.div({
  enter: {
    x: '100vw',
    transition: ({ from, to }) => ({
      type: 'keyframes',
      values: ['100vw', '0vw', '0vw', '-100vw'],
      times: [0, 0.33, 0.66, 1],
      duration: 800,
    }),
  },
  exit: {
    x: '100vw',
    transition: {
      x: {
        ease: 'easeIn',
        duration: 800,
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
    currentPagePath: null,
    overlay: false,
  }

  /**
   *  To make page transition effect
   *  args: nextPagePath
   */
  startPageChanging = currentPagePath => {
    this.setState({
      pageChanging: true,
      currentPagePath,
    })

    //Place loader for nextPage content after some time
    this.timerContentLoader = setTimeout(() => {
      this.setState({
        contentLoader: true,
      })
    }, 350)
  }

  /**
   * Navigate to the `nextPagePath` after page transition
   */
  stopPageChanging = () => {
    navigate(this.state.currentPagePath)
    this.setState({
      pageChanging: false,
      contentLoader: false,
    })
  }

  toggleOverlay = () => {
    this.setState(state => {
      return {
        overlay: !state.overlay,
      }
    })
  }

  componentWillUnmount() {
    clearTimeout(this.timerContentLoader)
  }

  render() {
    const { children, isFirstLoad, timingOffset, ...rest } = this.props
    const { pageChanging, contentLoader, currentPagePath, overlay } = this.state

    const pageChildren = React.cloneElement(children, {
      isFirstLoad: isFirstLoad,
      timingOffset: timingOffset,
      startPageChangingHandler: this.startPageChanging,
    })

    return (
      <div className="layout-wrapper">
        {pageChanging ? (
          <PageChanger
            onPoseComplete={() => this.stopPageChanging()}
            initialPose="exit"
            pose="enter"
          />
        ) : null}
        {overlay ? <Overlay /> : null}
        <LayoutInner>
          <LayoutSidenav
            timingOffset={timingOffset}
            initialPose={isFirstLoad ? 'closed' : 'open'}
            pose="open"
          >
            <Sidebar
              isFirstLoad={isFirstLoad}
              timingOffset={timingOffset}
              currentPagePath={currentPagePath}
              startPageChangingHandler={this.startPageChanging}
              toggleOverlayHandler={this.toggleOverlay}
              {...rest}
            />
          </LayoutSidenav>

          <PosedLayoutContainer
            isFirstLoad={isFirstLoad}
            initialPose="exit"
            pose="enter"
          >
            {contentLoader ? null : pageChildren}
          </PosedLayoutContainer>
        </LayoutInner>
      </div>
    )
  }
}

export default Layout
