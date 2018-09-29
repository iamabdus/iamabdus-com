// base-styles.js
import { injectGlobal } from 'styled-components';
import reboot from 'styled-reboot';

const rebootCss = reboot()

const baseStyles = () => injectGlobal`
  ${rebootCss}
  /* other styles */
`;

export default baseStyles;