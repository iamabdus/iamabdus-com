import styled from 'styled-components'
import media from './utility/media'
import theme from './utility/theme'

const Text = styled.div`
  margin: 0;
  font-family: ${theme.fontFamily};
  color: ${theme.secondary};
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  line-height: 2.96;
  letter-spacing: 1.2px;
  @media (min-width: ${media.md}) {
    font-size: 14px;
    line-height: 2.54;
    letter-spacing: 2.8px;
  }
`

export default Text
