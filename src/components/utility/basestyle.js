// base-styles.js
import { injectGlobal } from 'styled-components'
import reboot from 'styled-reboot'
import theme from './theme'

const options = {
  // black: '#000',
  fontFamilyBase: theme.fontFamily,
  // fontSizeBase: '1rem',
  // fontWeightBase: 400,
  // lineHeightBase: 1.5,
  // bodyColor: '#212529',
  bodyBg: theme.bodyBg,
  // headingsMarginBottom: '0.5rem',
  // paragraphMarginBottom: '1rem',
  // labelMarginBottom: '0.5rem',
  // dtFontWeight: 700,
  // linkColor: '#007bff',
  // linkDecoration: 'none',
  linkHoverColor: 'inherits',
  linkHoverDecoration: 'none',
  // tableCellPadding: '0.75rem',
  // textMuted: '#6c757d'
}

const rebootCss = reboot(options)

const baseStyles = () => injectGlobal`
  ${rebootCss}
  /* other styles */
`

export default baseStyles
