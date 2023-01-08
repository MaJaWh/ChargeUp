/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import PlugType from "../components/PlugType";

describe('PlugType component', () => {
  it('renders correctly', () => {
    const { container } = render(<PlugType />);
    expect(container).toMatchSnapshot();
  });

//   it('contains the expected buttons', () => {
//     const { getByText } = render(<PlugType />);
//     expect(getByText('Type 2')).toBeInTheDocument();
//     expect(getByText('Type 3')).toBeInTheDocument();
//     expect(getByText('Chademo')).toBeInTheDocument();
//   });

});
