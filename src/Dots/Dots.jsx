import React from 'react';
import PropTypes from 'prop-types';
import StyledPreloader from '../StyledPreloader';

const Dots = ({ className, color }) => (
  <div className={className}>
    <div style={{ backgroundColor: color }} className="circ1" />
    <div style={{ backgroundColor: color }} className="circ2" />
    <div style={{ backgroundColor: color }} className="circ3" />
    <div style={{ backgroundColor: color }} className="circ4" />
  </div>
);
Dots.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};

const DotsWithPreloader = ({ className }) => (
  <StyledPreloader>
    <Dots className={className} />
  </StyledPreloader>
);
DotsWithPreloader.propTypes = {
  className: PropTypes.string,
};

export default DotsWithPreloader;
