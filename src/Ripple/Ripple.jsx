import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withPreloader } from '../Preloader';
import RippleStyles from './RippleStyles';

const Ripple = ({ className }) => (
  <div className={className}>
    <div />
    <div />
  </div>
);
Ripple.propTypes = {
  className: PropTypes.string,
};

const StyledRipple = styled(Ripple)`
  ${RippleStyles}
`;
export default withPreloader(StyledRipple);
