import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import PlugType from '../components/PlugType.jsx';

jest.mock('../components/requests/requests', () => ({
  fetchConnectorTypes: () => [
    {
      ConnectorTypeID: '1',
      ConnectorType: '__TYPE_1__',
    },
    {
      ConnectorTypeID: '2',
      ConnectorType: '__TYPE_2__',
    },
  ],
}));

jest.mock('../components/utils', () => ({
  PLUG_ASSET_MAP: {
    1: '__TYPE_1_PATH__',
    2: '__TYPE_2_PATH__',
  },
}));

describe('PlugType', () => {
  const setReturnedPlugTypeMock = jest.fn();

  it('renders a button for each returned connector type', async () => {
    render(<PlugType setReturnedPlugType={setReturnedPlugTypeMock} />);

    await waitFor(() => {
      expect(screen.getAllByRole('button')).toHaveLength(2);
    });
  });

  it('renders an asset for each connector type', async () => {
    render(<PlugType setReturnedPlugType={setReturnedPlugTypeMock} />);

    await waitFor(() => {
      expect(screen.getAllByRole('button')).toHaveLength(2);
    });

    expect(screen.getAllByRole('img')).toHaveLength(2);
    // const images = screen.getAllByRole('img');

    // expect(screen.getByRole('image', { name: '__TYPE_1__' })).toHaveAttribute(
    //   'src',
    //   '__TYPE_1_PATH__'
    // );
    // expect(screen.getByRole('image', { name: '__TYPE_1__' })).toHaveAttribute(
    //   'alt',
    //   '__TYPE_1__'
    // );
    // expect(screen.getByRole('image', { name: '__TYPE_2__' })).toHaveAttribute(
    //   'src',
    //   '__TYPE_2_PATH__'
    // );
    // expect(screen.getByRole('image', { name: '__TYPE_2__' })).toHaveAttribute(
    //   'alt',
    //   '__TYPE_2__'
    // );
  });

  it('calls setReturnedType on button click', async () => {
    render(<PlugType setReturnedPlugType={setReturnedPlugTypeMock} />);

    await waitFor(() => {
      expect(screen.getAllByRole('button')).toHaveLength(2);
    });

    const buttons = screen.getAllByRole('button');

    fireEvent.click(buttons[0]);

    expect(setReturnedPlugTypeMock).toHaveBeenCalledWith({
      ConnectorTypeID: '1',
      ConnectorType: '__TYPE_1__',
    });
  });
});

//Learn how to mock the fetch api
//Mock the constructor

//one test to check that searchbytext on the connector type

//assert that when one of the buttons id clicked that setreturnplug type is returned with the data

//searchbyrole---button
