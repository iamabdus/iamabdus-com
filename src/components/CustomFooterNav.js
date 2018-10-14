import React, { Component } from 'react'
import styled from 'styled-components'
import NavButton from './NavButton'

const FooterNav = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
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
            text: item.text,
            onClick: startPageChangingHandler
          }

          return <NavButton key={i} {...obj} />
        })}
      </FooterNav>
    )
  }
}

export default CustomFooterNav
