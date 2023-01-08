/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import Footer from "../components/Footer";

describe('Footer', () => {
  it('renders three buttons', () => {
    const { getByText } = render(<Footer setOpenSearchBar={() => {}} />);
    expect(getByText('Search Form')).toBeInTheDocument();
    expect(getByText('List')).toBeInTheDocument();
    expect(getByText('Reviews')).toBeInTheDocument();
  });

});
