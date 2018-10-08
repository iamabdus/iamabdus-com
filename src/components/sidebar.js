import React, { Component } from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import media from './utility/media'
import Logo from './Logo'
import SideMenu from './Sidemenu'
import SidebarSocial from './SidebarSocial'

// const MyComponent = ({ hostRef }) => <div ref={hostRef}></div>

const PosedSidebar = posed.div({
  hidden: { opacity: 0, x: -25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: ({ timingOffset }) => {
      return {
        ease: 'easeOut',
        delay: timingOffset + 50,
      }
    },
  },
})

const StyledSidebar = styled(PosedSidebar)`
  width: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  position: relative;
  @media (min-width: ${media.md}) {
    width: 85px;
  }
`

class Sidebar extends Component {
  state = {
    pose: 'hidden',
  }

  componentDidMount() {
    if (this.props.visitedFirst) {
      this.setState({ pose: 'visible' })
    }
  }

  render() {
    const { isfirstLoad, timingOffset, ...rest } = this.props

    return (
      <StyledSidebar
        timingOffset={timingOffset}
        initialPose={isfirstLoad ? 'hidden' : 'visible'}
        pose="visible"
      >
        <Logo />
        <SideMenu {...rest} />
        <SidebarSocial />
      </StyledSidebar>
    )
  }
}

export default Sidebar
