import React from 'react'
import styled from 'styled-components'
import theme from './utility/theme'
import media from './utility/media'
import { Link } from 'gatsby'
import { Location } from '@reach/router'

const StyledSideMenu = styled.ul`
  width: 50px;
  margin: 0;
  margin-left: 0px;
  padding-left: 24px;
  list-style: none;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (min-width: ${media.md}) {
    width: 80px;
    padding-left: 40px;
  }
  &:hover {
    overflow: visible;
  }
`
const ListItem = styled.li`
  position: relative;
  width: 130px;
  z-index: 10;
`
const BarItem = styled.span`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  display: inline-block;
  width: 2px;
  height: 25px;
  background-color: #707070;
  ${ListItem}.active & {
    background-color: ${theme.primary};
  }
`

const LinkItem = styled(Link)`
  font-size: 12px;
  text-decoration: none;
  letter-spacing: 2px;
  font-weight: 500;
  color: ${theme.secondary};
  line-height: 2;
  text-transform: uppercase;
  padding-left: 18px;
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 250ms linear 250ms;

  ${StyledSideMenu}:hover & {
    visibility: visible;
    opacity: 1;
  }
`

const SideMenu = props => {
  return (
    <Location>
      {({ location }) => (
        <StyledSideMenu>
          <ListItem className={location.pathname === '/' ? 'active' : null}>
            <BarItem />
            <LinkItem to="/">about me</LinkItem>
          </ListItem>
          <ListItem
            className={location.pathname === '/portfolio/' ? 'active' : null}
          >
            <BarItem />
            <LinkItem to="/portfolio/">portfolio</LinkItem>
          </ListItem>
          <ListItem
            className={location.pathname === '/blog/' ? 'active' : null}
          >
            <BarItem />
            <LinkItem to="/blog/">blog</LinkItem>
          </ListItem>
          <ListItem
            className={location.pathname === '/contact/' ? 'active' : null}
          >
            <BarItem />
            <LinkItem to="/contact/">contact</LinkItem>
          </ListItem>
        </StyledSideMenu>
      )}
    </Location>
  )
}

export default SideMenu
