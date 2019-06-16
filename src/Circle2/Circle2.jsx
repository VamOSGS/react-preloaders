import React from 'react';
import PropTypes from 'prop-types';
import StyledPreloader from '../StyledPreloader';

const Circle2 = ({ className, color }) => (
  <div style={{ borderTopColor: color }} className={className} />
);
Circle2.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};

const Circle2WithPreloader = ({ className }) => (
  <StyledPreloader>
    <Circle2 className={className} />
  </StyledPreloader>
);
Circle2WithPreloader.propTypes = {
  className: PropTypes.string,
};

export default Circle2WithPreloader;
