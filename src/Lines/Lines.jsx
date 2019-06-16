import React from 'react';
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

const LinesWithPreloader = ({ className }) => (
  <StyledPreloader>
    <Lines className={className} />
  </StyledPreloader>
);

export default LinesWithPreloader;
