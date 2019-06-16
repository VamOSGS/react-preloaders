import { keyframes, css } from 'styled-components';

const sdelay = keyframes`
0%,
40%,
100% {
  transform: scaleY(0.6);
}
20% {
  transform: scaleY(1);
}
`;

const ZoomStyles = css`
  margin: 100px auto;
  width: 50px;
  height: 60px;
  text-align: center;
  font-size: 10px;
  > div {
    height: 100%;
    width: 6px;
    display: inline-block;
    margin: 2px;
    background: ${props => props.color};
    animation: ${sdelay} 1.2s infinite ease-in-out;
  }
  .rect2 {
    animation-delay: -1.1s;
  }
  .rect3 {
    animation-delay: -1s;
  }
  .rect4 {
    animation-delay: -0.9s;
  }
  .rect5 {
    animation-delay: -0.8s;
  }
`;

export default ZoomStyles;
