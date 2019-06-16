import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withPreloader } from '../Preloader';
import CubeStyles from './CubeStyles';

const Cube = ({ className }) => (
  <div className={className}>
    <span />
  </div>
);
Cube.propTypes = {
  className: PropTypes.string,
};

const StyledCube = styled(Cube)`
  ${CubeStyles}
`;

export default withPreloader(StyledCube);
