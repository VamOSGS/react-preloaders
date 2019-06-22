import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withPreloader } from '../Preloader';
import Circle2Styles from './Circle2Styles';

const Circle2 = ({ className }) => <div className={className} />;

Circle2.propTypes = {
  className: PropTypes.string,
};

const StyledCircle2 = styled(Circle2)`
  ${Circle2Styles}
`;

export default withPreloader(StyledCircle2);
