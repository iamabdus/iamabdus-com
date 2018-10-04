import React, { Component } from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import media from './utility/media'
import Logo from './Logo'
import SideMenu from './Sidemenu'
import SidebarSocial from './SidebarSocial'

// const MyComponent = ({ hostRef }) => <div ref={hostRef}></div>

const PosedSidebar = posed.div({
  hidden: { opacity: 0, scale: 0.99 },
  visible: { opacity: 1, scale: 1, delay: 900 },
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
    const { visitedFirst } = this.props
    if (visitedFirst) {
      return (
        <StyledSidebar pose={this.state.pose}>
          <Logo />
          <SideMenu />
          <SidebarSocial />
        </StyledSidebar>
      )
    } else {
      return (
        <StyledSidebar pose="visible">
          <Logo />
          <SideMenu />
          <SidebarSocial />
        </StyledSidebar>
      )
    }
  }
}

export default Sidebar
