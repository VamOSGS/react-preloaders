import { keyframes, css } from 'styled-components';

const sequence1 = keyframes`
0% {
  height: 10px;
}
50% {
  height: 50px;
}
100% {
  height: 10px;
}
`;

const sequence2 = keyframes`
0% {
  height: 20px;
}
50% {
  height: 65px;
}
100% {
  height: 20px;
}
`;
const LinesStyles = css`
  margin: auto;
  left: 0;
  right: 0;
  top: 50%;
  width: 90px;
  ul {
    margin: 0;
    list-style: none;
    width: 90px;
    position: relative;
    padding: 0;
    height: 10px;
    li {
      position: absolute;
      width: 2px;
      height: 0;
      background: ${props => props.color};
      bottom: 0;
      &:nth-child(1) {
        left: 0;
        animation: ${sequence1} 1s ease infinite 0;
      }
      &:nth-child(2) {
        left: 15px;
        animation: ${sequence2} 1s ease infinite 0.1s;
      }
      &:nth-child(3) {
        left: 30px;
        animation: ${sequence1} 1s ease-in-out infinite 0.2s;
      }
      &:nth-child(4) {
        left: 45px;
        animation: ${sequence2} 1s ease-in infinite 0.3s;
      }
      &:nth-child(5) {
        left: 60px;
        animation: ${sequence1} 1s ease-in-out infinite 0.4s;
      }
      &:nth-child(6) {
        left: 75px;
        animation: ${sequence2} 1s ease infinite 0.5s;
      }
    }
  }
`;

export default LinesStyles;
