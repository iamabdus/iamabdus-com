import React, { Component } from 'react'
import styled from 'styled-components'
import media from './utility/media'
import NavButton from './NavButton'

const FooterNav = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const NavItem = styled.li`
  margin-right: 70px;
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: ${media.md}) {
    margin-bottom: 0;
  }
`

const navItems = [
  {
    path: '/portfolio/',
    text: 'Portfolio',
  },
  {
    path: '/blog/',
    text: 'My Blog',
  },
  {
    path: '/contact/',
    text: 'Contact',
  },
]

class CustomFooterNav extends Component {
  render() {
    const { startPageChangingHandler } = this.props
    return (
      <FooterNav>
        {navItems.map((item, i) => {
          const obj = {
            path: item.path,
            onClick: startPageChangingHandler,
          }

          return (
            <NavItem key={i}>
              <NavButton {...obj}>{item.text}</NavButton>
            </NavItem>
          )
        })}
      </FooterNav>
    )
  }
}

export default CustomFooterNav
