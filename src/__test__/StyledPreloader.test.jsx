import React from 'react';
import { shallow } from 'enzyme';
import StyledPreloader from '../StyledPreloader';
import Circle from '../Circle/StyledCircle';
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
