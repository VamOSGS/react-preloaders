import React from 'react';
import PropTypes from 'prop-types';
import StyledPreloader from '../StyledPreloader';

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

const LinesWithPreloader = ({ className }) => (
  <StyledPreloader>
    <Lines className={className} />
  </StyledPreloader>
);
LinesWithPreloader.propTypes = {
  className: PropTypes.string,
};
export default LinesWithPreloader;
