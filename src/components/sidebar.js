import React from 'react'
import styled from 'styled-components'
import media from './utility/media'
import Logo from './logo'
import SideMenu from './sidemenu'
import SidebarSocial from './sidebar-social';

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
    <SideMenu />
    <SidebarSocial/>
  </StyledSidebar>
)

export default Sidebar
