import styled from 'styled-components'
import media from '../components/utility/media'
import theme from '../components/utility/theme'

const Tagline = styled.div`
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
