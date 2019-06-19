import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withPreloader } from '../Preloader';
import PlanetsStyles from './PlanetsStyles';

const Planets = ({ className }) => (
  <div className={className}>
    <div className="earth-orbit orbit">
      <div className="planet earth" />
      <div className="venus-orbit orbit">
        <div className="planet venus" />
        <div className="mercury-orbit orbit">
          <div className="planet mercury" />
          <div className="sun" />
        </div>
      </div>
    </div>
  </div>
);
Planets.propTypes = {
  className: PropTypes.string,
};

const StyledPlanets = styled(Planets)`
  ${PlanetsStyles}
`;
export default withPreloader(StyledPlanets);
