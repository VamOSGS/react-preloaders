import React from 'react';
import PropTypes from 'prop-types';
import { withPreloader } from '../Preloader';

const Circle2 = ({ className, color }) => (
  <div style={{ borderTopColor: color }} className={className} />
);
Circle2.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};

export default withPreloader(Circle2);
