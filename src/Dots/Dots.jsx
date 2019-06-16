import React from 'react';
import PropTypes from 'prop-types';
import { withPreloader } from '../Preloader';

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

export default withPreloader(Dots);
