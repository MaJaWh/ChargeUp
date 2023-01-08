import React from 'react';
import fetchMock from 'jest-fetch-mock';

import { render } from '@testing-library/react';
import PlugType from '../components/PlugType.jsx';

it('renders PlugType component', () => {
  render(<PlugType />);
});

describe('Testing api', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('calls the gov api and returns data to me', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    PlugType().then((res) => {
      expect(res.data).toEqual('12345');
    });

    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual('api/retrieve/type/format/json/');
  });
});

//Learn how to mock the fetch api
//Mock the constructor

//on etest to check that searchbytext on the connector type

//assert that when one of the buttons id clicked that setreturnplug type is returned with the data

//searchbyrole---button
