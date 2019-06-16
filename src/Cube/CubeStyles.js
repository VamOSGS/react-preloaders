import { keyframes, css } from 'styled-components';

const loader = keyframes` {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;
const loaderInner = keyframes`  {
  0% {
    height: 0%;
  }
  25% {
    height: 0%;
  }
  50% {
    height: 100%;
  }
  75% {
    height: 100%;
  }
  100% {
    height: 0%;
  }
}
`;

const CubeStyles = css`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 4px solid ${props => props.color};
  animation: ${loader} 2s infinite ease;
  span {
    vertical-align: top;
    display: inline-block;
    width: 100%;
    background-color: ${props => props.color};
    animation: ${loaderInner} 2s infinite ease-in;
  }
`;

export default CubeStyles;
