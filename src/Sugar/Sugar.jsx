import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withPreloader } from '../Preloader';
import SugarStyles from './SugarStyles';

const Sugar = ({ className }) => (
  <div className={className}>
    <span />
  </div>
);
Sugar.propTypes = {
  className: PropTypes.string,
};

const StyledSugar = styled(Sugar)`
  ${SugarStyles}
`;
export default withPreloader(StyledSugar);
