import React from 'react';
import { shallow } from 'enzyme';
import StyledPreloader from '../Preloader';
import Circle from '../Circle/Circle';
import 'jest-styled-components';

describe('StyledPreloader', () => {
  it('renders correctly', () => {
    const component = shallow(
      <StyledPreloader>
        <Circle />
      </StyledPreloader>,
    );
    expect(component).toMatchSnapshot();
  });
});
