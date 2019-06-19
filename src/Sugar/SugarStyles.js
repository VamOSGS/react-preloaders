import { css, keyframes } from 'styled-components';

const spinner = keyframes`
50% {
  border-radius: 50%;
  transform: scale(0.5) rotate(360deg);
}
100% {
  transform: scale(1) rotate(720deg);
}
`;
const shadow = keyframes`
50% {
  transform: scale(0.5);
  background-color: rgba(0, 0, 0, 0.1);
}
`;

const SugarStyles = css`
  span {
    position: relative;
  }
  span:before,
  span:after {
    content: '';
    position: relative;
    display: block;
  }
  span:before {
    animation: ${spinner} 2.5s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    width: 50px;
    height: 50px;
    background-color: ${({ color }) => color};
  }
  span:after {
    animation: ${shadow} 2.5s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    bottom: -30px;
    height: 5px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export default SugarStyles;
