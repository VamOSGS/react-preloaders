import React from 'react';
import StyledPreloader from '../StyledPreloader';

const Cube = ({ className, color }) => (
  <div style={{ borderColor: color }} className={className}>
    <span style={{ backgroundColor: color }} className="loader-inner" />
  </div>
);

const CubeWithPreloader = ({ className }) => (
  <StyledPreloader>
    <Cube className={className} />
  </StyledPreloader>
);

export default CubeWithPreloader;
