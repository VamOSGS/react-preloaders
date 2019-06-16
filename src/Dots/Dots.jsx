import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withPreloader } from '../Preloader';
import DotsStyles from './DotsStyles';

const items = new Array(4).fill('');
const Dots = ({ className }) => (
  <div className={className}>
    {items.map((i, key) => (
      <div key={key.toString()} className={`circ${key + 1}`} />
    ))}
  </div>
);
Dots.propTypes = {
  className: PropTypes.string,
};

const StyledDots = styled(Dots)`
  ${DotsStyles}
`;

export default withPreloader(StyledDots);
