import React from 'react';
import PropTypes from 'prop-types';
import { withPreloader } from '../Preloader';

const Lines = ({ className, color }) => (
  <div className={className}>
    <ul>
      <li style={{ backgroundColor: color }} />
      <li style={{ backgroundColor: color }} />
      <li style={{ backgroundColor: color }} />
      <li style={{ backgroundColor: color }} />
      <li style={{ backgroundColor: color }} />
      <li style={{ backgroundColor: color }} />
    </ul>
  </div>
);
Lines.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};

export default withPreloader(Lines);
