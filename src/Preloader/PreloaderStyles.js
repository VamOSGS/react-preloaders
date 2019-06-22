import { css } from 'styled-components';
import { slideAnimation, fadeAnimation } from './animations';

const PreloaderStyles = css`
  z-index: 9999;
  position: fixed;
  ${slideAnimation}
  ${fadeAnimation}
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  display: flex;
  background: ${props => props.background};
`;

export default PreloaderStyles;
