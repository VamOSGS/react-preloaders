/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import StyledPreloader from './StyledPreloader';

const withPrelaoder = Element => props => (
  <StyledPreloader {...props}>
    <Element className={props.className} />
  </StyledPreloader>
);

export default withPrelaoder;
