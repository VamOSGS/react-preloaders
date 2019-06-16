import React from 'react';
import StyledPreloader from '../StyledPreloader';

const Dots = ({ className, color }) => (
  <div className={className}>
    <div style={{ backgroundColor: color }} className="circ1" />
    <div style={{ backgroundColor: color }} className="circ2" />
    <div style={{ backgroundColor: color }} className="circ3" />
    <div style={{ backgroundColor: color }} className="circ4" />
  </div>
);

const DotsWithPreloader = ({ className }) => (
  <StyledPreloader>
    <Dots className={className} />
  </StyledPreloader>
);

export default DotsWithPreloader;
