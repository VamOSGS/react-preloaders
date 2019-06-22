import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withPreloader } from '../Preloader';
import LinesStyles from './LinesStyles';

const items = new Array(6).fill('');
const Lines = ({ className }) => (
  <div className={className}>
    <ul>
      {items.map((i, key) => (
        <li key={key.toString()} />
      ))}
    </ul>
  </div>
);
Lines.propTypes = {
  className: PropTypes.string,
};

const StyledLines = styled(Lines)`
  ${LinesStyles}
`;
export default withPreloader(StyledLines);
