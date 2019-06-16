import React from 'react';
import PropTypes from 'prop-types';
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
Zoom.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};
const ZoomWithPreloader = ({ className }) => (
  <StyledPreloader>
    <Zoom className={className} />
  </StyledPreloader>
);

ZoomWithPreloader.propTypes = {
  className: PropTypes.string,
};

export default ZoomWithPreloader;
