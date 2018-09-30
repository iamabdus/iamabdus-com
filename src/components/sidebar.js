import React from 'react'
import styled from 'styled-components'
import media from './utility/media'
import Logo from './logo'
import SideMenu from './sidemenu'

const StyledSidebar = styled.div`
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

const Sidebar = props => (
  <StyledSidebar>
    <Logo />
    <SideMenu {...props} />
  </StyledSidebar>
)

export default Sidebar
