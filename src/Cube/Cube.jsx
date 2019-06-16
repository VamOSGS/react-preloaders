import React from 'react';
import PropTypes from 'prop-types';
import { withPreloader } from '../Preloader';

const Cube = ({ className, color }) => (
  <div style={{ borderColor: color }} className={className}>
    <span style={{ backgroundColor: color }} className="loader-inner" />
  </div>
);
Cube.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};

export default withPreloader(Cube);
