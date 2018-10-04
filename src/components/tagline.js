import styled from 'styled-components'
import media from './utility/media'
import theme from './utility/theme'
import posed from 'react-pose'

const PosedTag = posed.div({
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      opacity: { ease: 'easeIn', duration: 200 },
      x: { ease: 'easeIn', duration: 300 },
    },
  },
  exit: {
    x: -25,
    opacity: 0,
    transition: {
      opacity: { ease: 'easeOut', duration: 200 },
      x: { ease: 'easeOut', duration: 300 },
    },
  },
})

const Tagline = styled(PosedTag)`
  font-family: ${theme.fontFamily};
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.13;
  letter-spacing: 1.6px;
  text-align: left;
  text-transform: uppercase;
  color: ${theme.primary};
  @media (min-width: ${media.md}) {
    line-height: 1;
  }
`

export default Tagline
