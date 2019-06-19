import { css, keyframes } from 'styled-components';

const ripple = keyframes`
from {
  transform: scale(0);
  opacity: 1;
}

to {
  transform: scale(1);
  opacity: 0;
}
`;

const Ripple = css`
  width: 100px;
  height: 100px;
  div {
    opacity:0;
    animation: 1.5s ${ripple} infinite;
    position: absolute;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 5px solid ${props => props.color};
    &:nth-child(2) {
      animation-delay: 0.5s;
    }
  }
`;

export default Ripple;
