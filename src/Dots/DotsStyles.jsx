import { keyframes, css } from 'styled-components';

const sdelay = keyframes`
  0%,
  40%,
  100% {
    transform: translateY(-10px);
    -webkit-transform: translateY(-10px);
  }
  20% {
    transform: translateY(-20px);
    -webkit-transform: translateY(-20px);
  }
`;

const DotsStyles = css`
  height: 30px;
  text-align: center;
  font-size: 10px;
  > div {
    background: ${props => props.color};
    height: 10px;
    width: 10px;
    border-radius: 50%;
    margin: 0 10px;
    display: inline-block;
    animation: ${sdelay} 0.7s infinite ease-in-out;
  }
  .circ2 {
    animation-delay: -0.6s;
  }
  .circ3 {
    animation-delay: -0.5s;
  }
  .circ4 {
    animation-delay: -0.4s;
  }
  .circ5 {
    animation-delay: -0.3s;
  }
`;

export default DotsStyles;
