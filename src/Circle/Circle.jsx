import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withPreloader } from '../Preloader';
import CircleStyles from './CircleStyles';

const Circle = ({ className, color }) => (
  <svg className={className} height="50" width="50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      stroke={color}
      fill="none"
      strokeWidth="2.5"
      strokeMiterlimit="10"
    />
  </svg>
);
Circle.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};

const StyledCircle = styled(Circle)`
  ${CircleStyles}
`;

export default withPreloader(StyledCircle);
