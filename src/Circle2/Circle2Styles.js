import { keyframes, css } from 'styled-components';

const rotate1 = keyframes`
from {
  transform: rotate(0deg) scale(0.4, 0.4);
}
to {
  transform: rotate(360deg) scale(0.4, 0.4);
}
`;
const rotate2 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;
const Circle2Styles = css`
  width: 200px;
  height: 200px;
  position: relative;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: ${props => props.color};
  animation: ${rotate1} 0.6s cubic-bezier(0.44, 0.39, 0.32, 1.28) infinite;
  &:after,
  :before {
    content: '';
    display: block;
    position: absolute;
    border: 3px solid transparent;
    border-radius: 50%;
  }
  &:before {
    animation: ${rotate2} 1s linear infinite;
    top: 20px;
    bottom: 20px;
    left: 20px;
    right: 20px;
    border-top-color: inherit;
    filter: brightness(150%);
  }
  &:after {
    animation: ${rotate2} 2s linear infinite;
    top: 43px;
    bottom: 43px;
    left: 43px;
    right: 43px;
    filter: brightness(180%);
    border-top-color: inherit;
  }
`;

export default Circle2Styles;
