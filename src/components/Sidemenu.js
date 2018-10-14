import React, { Component } from 'react'
import styled from 'styled-components'
import theme from './utility/theme'
import media from './utility/media'
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
  background-color: ${theme.secondary};
  &.active {
    background-color: ${theme.primary};
  }
`

const LinkItem = styled.a`
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
  transition: opacity 300ms linear 300ms;

  &::before {
    content: '';
    position: absolute;
    left: -15%;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    display: inline-block;
    height: 25px;
  }

  &:hover {
    color: #fff;
  }

  ${StyledSideMenu}:hover & {
    visibility: visible;
    opacity: 1;
    @media (max-width: ${media.md}) {
      visibility: 'hidden';
      opacity: 0;
    }
  }
`

const menuItems = [
  {
    path: '/',
    text: 'about me',
  },
  {
    path: '/portfolio/',
    text: 'portfolio',
  },
  {
    path: '/blog/',
    text: 'blog',
  },
  {
    path: '/contact/',
    text: 'contact',
  },
]

class SideMenu extends Component {
  state = {
    hover: true,
    isMobileMenuClickable: false,
  }

  componentDidMount() {
    var width = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    )
    if (width <= 768) {
      this.setState({ isMobileMenuClickable: true })
    }
  }

  clicked = (e, nextPageLocation, currentPageLocation) => {
    e.preventDefault()

    // For small screen call clickedMobile
    if (this.state.isMobileMenuClickable) {
      this.clickedMobile(nextPageLocation, currentPageLocation)
      return
    }

    //Not mobile
    if (nextPageLocation === currentPageLocation) return

    //Pass handller back to Layout.js for page transition function
    this.props.startPageChangingHandler(nextPageLocation)

    this.setState({ hover: false })
    this.timerHideLink = setTimeout(() => {
      this.setState({ hover: true })
    }, 1000)
  }

  clickedMobile = (nextPageLocation, currentPageLocation) => {
    if (this.props.showMobileMenu) {
      if (nextPageLocation === currentPageLocation) return
      //Pass handller back to Layout.js for page transition function
      this.props.startPageChangingHandler(nextPageLocation)

      this.setState({ hover: false })
      this.timerHideLink = setTimeout(() => {
        this.setState({ hover: true })
      }, 1000)

      this.props.toggleMobileMenuHandler()
    } else {
      this.props.toggleMobileMenuHandler()
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timerHideLink)
  }

  render() {
    const { hover } = this.state
    const { currentPagePath, showMobileMenu } = this.props
    return (
      <Location>
        {({ location }) => {
          //location.pathname is set to currentPage when first page load but after clicking currentPage change by props.currentPagePath provide by Layout
          const currentPageLocation = currentPagePath || location.pathname

          return (
            <StyledSideMenu
              style={{
                pointerEvents: hover ? 'auto' : 'none',
                overflow: showMobileMenu ? 'initial' : null,
              }}
            >
              {menuItems.map(({ path, text }) => (
                <ListItem key={path}>
                  <BarItem
                    className={currentPageLocation === path ? 'active' : null}
                  />
                  <LinkItem
                    href={path}
                    style={
                      showMobileMenu
                        ? {
                            visibility: 'visible',
                            opacity: 1,
                          }
                        : null
                    }
                    onClick={e => this.clicked(e, path, currentPageLocation)}
                  >
                    {text}
                  </LinkItem>
                </ListItem>
              ))}
            </StyledSideMenu>
          )
        }}
      </Location>
    )
  }
}

export default SideMenu
