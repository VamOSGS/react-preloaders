import React from 'react';
import StyledPreloader from '../StyledPreloader';

const Circle = ({ className, color }) => (
  <svg className={className} height="50" width="50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      stroke={color}
      fill="none"
      strokeWidth="2.5"
      strokeMiterlimit="10"
    />
  </svg>
);
const CircleWithPreloader = ({ className }) => (
  <StyledPreloader>
    <Circle className={className} />
  </StyledPreloader>
);

export default CircleWithPreloader;
