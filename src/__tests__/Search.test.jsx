/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import Search from "../components/Search";


describe("Search-snapshot", () => {
  const { asFragment } = render(<Search />);
  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});

it('contains the expected input fields', () => {
  const { getByPlaceholderText } = render(<Search />);
  expect(getByPlaceholderText('postcode')).toBeInTheDocument();
  expect(getByPlaceholderText('Distance from location')).toBeInTheDocument();
  expect(getByPlaceholderText('kw/h of car')).toBeInTheDocument();
});