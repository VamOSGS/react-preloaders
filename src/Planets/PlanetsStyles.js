import { css, keyframes } from 'styled-components';

const spin = keyframes`
from {
  transform: rotate(0);
}
to{
  transform: rotate(359deg);
}
`;

const PlanetsStyles = css`
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  .orbit {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ color }) => (color.split('')[0] === '#' ? `${color}4d` : color)};
    border-radius: 50%;
  }

  .earth-orbit {
    width: 165px;
    height: 165px;
    animation: ${spin} 12s linear 0s infinite;
  }

  .venus-orbit {
    width: 120px;
    height: 120px;
    animation: ${spin} 7.4s linear 0s infinite;
  }

  .mercury-orbit {
    width: 90px;
    height: 90px;
    animation: ${spin} 3s linear 0s infinite;
  }

  .planet {
    position: absolute;
    top: -5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
  }

  .sun {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #ffab91;
  }
`;

export default PlanetsStyles;
