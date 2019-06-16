import React from 'react';
import StyledPreloader from '../StyledPreloader';

const Zoom = ({ className, color }) => (
  <div className={className}>
    <div style={{ backgroundColor: color }} className="rect1" />
    <div style={{ backgroundColor: color }} className="rect2" />
    <div style={{ backgroundColor: color }} className="rect3" />
    <div style={{ backgroundColor: color }} className="rect4" />
    <div style={{ backgroundColor: color }} className="rect5" />
  </div>
);

const ZoomWithPreloader = ({ className }) => (
  <StyledPreloader>
    <Zoom className={className} />
  </StyledPreloader>
);

export default ZoomWithPreloader;
