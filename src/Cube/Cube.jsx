import React from 'react';
import PropTypes from 'prop-types';
import StyledPreloader from '../StyledPreloader';

const Cube = ({ className, color }) => (
  <div style={{ borderColor: color }} className={className}>
    <span style={{ backgroundColor: color }} className="loader-inner" />
  </div>
);
Cube.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};

const CubeWithPreloader = ({ className }) => (
  <StyledPreloader>
    <Cube className={className} />
  </StyledPreloader>
);
CubeWithPreloader.propTypes = {
  className: PropTypes.string,
};

export default CubeWithPreloader;
