import React from 'react';
import StyledPreloader from '../StyledPreloader';

const Circle2 = ({ className, color }) => (
  <div style={{ borderTopColor: color }} className={className} />
);

const Circle2WithPreloader = ({ className }) => (
  <StyledPreloader>
    <Circle2 className={className} />
  </StyledPreloader>
);

export default Circle2WithPreloader;
