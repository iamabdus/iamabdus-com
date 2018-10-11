import posed from 'react-pose'
import styled from 'styled-components'
import theme from './utility/theme'

const PosedTitle = posed.div({
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      opacity: { ease: 'easeOut', duration: 100, delay: 200 },
      x: { ease: 'easeOut', duration: 300, delay: 200 },
    },
  },
  exit: {
    x: -25,
    opacity: 0,
    transition: {
      opacity: { ease: 'easeIn', duration: 100 },
      x: { ease: 'easeIn', duration: 300 },
    },
  },
})

const Title = styled(PosedTitle)`
  font-family: ${theme.fontTitle};
  color: #fff;
  font-size: 48px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: 2.4px;
  text-align: left;
`

export default Title
