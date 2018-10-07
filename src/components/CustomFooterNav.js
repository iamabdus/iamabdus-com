import React from 'react'
import styled, { keyframes } from 'styled-components'
import posed from 'react-pose'
import { Link } from 'gatsby'
import theme from '../components/utility/theme'
import media from '../components/utility/media'

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

const linkHover = keyframes`
    5%  {width: 100%; right:0; left: auto}
    50%  {width: 0%;}
    100% {width: 70%; right:auto; left: 0}
`

const NavLink = styled(Link)`
  display: inline-block;
  font-family: ${theme.fontFamily};
  font-size: 12px;
  font-weight: 500;
  line-height: 2.96;
  letter-spacing: 2.4px;
  color: #ffffff;
  text-decoration: none;
  position: relative;
  line-height: 1.2;
  padding-bottom: 13px;
  @media (min-width: ${media.xl}) {
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: 2.8px;
  }
  &:before {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 70%;
    height: 5px;
    content: '';
    background-color: ${theme.primary};

  }
  &:hover {
    &:before {
    animation: ${linkHover} 0.3s ease-in-out;
      animation-iteration-count: 1;
      animation-delay: 0.2s;

    }
  }
}
`

const navItems = [
  {
    to: '/portfolio/',
    text: 'Portfolio',
  },
  {
    to: '/blog/',
    text: 'My Blog',
  },
  {
    to: '/contact/',
    text: 'Contact',
  },
]

class CustomFooterNav extends React.PureComponent {
  render() {
    return (
      <FooterNav>
        {navItems.map((item, i) => {
          return (
            <NavItem key={i}>
              <NavLink to={item.to}>{item.text}</NavLink>
            </NavItem>
          )
        })}
      </FooterNav>
    )
  }
}

export default CustomFooterNav
