import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faDribbble,
  faBehance,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

/* Side Social Menu */
const SidebaSocialMenu = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Follow = styled.span`
  color: #8f92a0;
  font-size: 9px;
  font-weight: 500;
  padding-bottom: 13px;
  text-align: center;
  text-transform: uppercase;
`

const ListItem = styled.li`
  padding-top: 7px;
  padding-bottom: 7px;
`

const LinkItem = styled.a``

const StyledFa = styled(FontAwesomeIcon)`
  color: #8f92a0;
  font-size: 16px;
  ${LinkItem}:hover & {
    color: #fefefe;
  }
`

const IconsSquareBulet = styled.div`
  height: 41px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`

const IconItem = styled.div`
  width: 4px;
  height: 4px;
  background-color: rgba(255,255,255, 0.3);
`

const SidebarSocial = props => (
  <div className="sidebar-social">
    <SidebaSocialMenu>
      <Follow>Follow</Follow>

      <ListItem>
        <LinkItem href="https://github.com" target="_blank">
          <StyledFa icon={faGithub} />
        </LinkItem>
      </ListItem>
      <ListItem>
        <LinkItem href="https://dribble.com" target="_blank">
          <StyledFa icon={faDribbble} />
        </LinkItem>
      </ListItem>
      <ListItem>
        <LinkItem href="https://behance.com" target="_blank">
          <StyledFa icon={faBehance} />
        </LinkItem>
      </ListItem>
      <ListItem>
        <LinkItem href="https://twitter.com" target="_blank">
          <StyledFa icon={faTwitter} />
        </LinkItem>
      </ListItem>
    </SidebaSocialMenu>

    <IconsSquareBulet>
      <IconItem />
      <IconItem />
      <IconItem />
    </IconsSquareBulet>
  </div>
)

export default SidebarSocial
