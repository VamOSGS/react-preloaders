import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withPreloader } from '../Preloader';
import ZoomStyles from './ZoomStyles';

const items = new Array(5).fill('');
const Zoom = ({ className }) => (
  <div className={className}>
    {items.map((i, key) => (
      <div key={key.toString()} className={`rect${key + 1}`} />
    ))}
  </div>
);
Zoom.propTypes = {
  className: PropTypes.string,
};

const StyledZoom = styled(Zoom)`
  ${ZoomStyles}
`;
export default withPreloader(StyledZoom);
