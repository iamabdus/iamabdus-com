import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import media from './utility/media'
import LogoSvg from '../images/logoSvg'

const StyledLogo = styled.div`
  width: 24px;
  @media (min-width: ${media.lg}) {
    width: 34px;
  }
`
const Logo = (props) => (
  <StyledLogo>
    <Link
      to="/"
      onClick={e => {
        e.preventDefault()
        props.startPageChangingHandler('/')
      }}
    >
      <LogoSvg />
    </Link>
  </StyledLogo>
)

export default Logo
