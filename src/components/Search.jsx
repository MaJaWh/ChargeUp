import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Map';
import '../styles/search.css';
import PlugType from '../components/PlugType';
// import GetConnectorStatus from "./requests/GetConnectorStatus";

const Search = ({ setchargeSites, setReturnedPlugType }) => {
  // const [searchValue, setSearchValue] = useState('');
  const [distanceValue, setDistanceValue] = useState('');
  const [postTown, setPostTown] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    getData();
  };

  const getData = async () => {
    fetch(
      `/api/retrieve/registry/dist/${distanceValue}/post-town/${postTown}/format/json`
    )
      .then((res) => res.json())
      .then((data) => {
        setchargeSites(data.ChargeDevice);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="search">
      <div className="search-form__inner-div">
        <div className="search__title">Search</div>
        <form className="search-form" onSubmit={handleSubmit}>
          <div>
            <input
              className="search-input"
              type="text"
              placeholder="Distance from location"
              onChange={(e) => setDistanceValue(e.target.value)}
            />

            <input
              className="search-input"
              type="text"
              placeholder="Town"
              onChange={(e) => setPostTown(e.target.value)}
            />
            <PlugType
              className="plugButtons"
              setReturnedPlugType={setReturnedPlugType}
            />
          </div>
          <button className="search-btn" type="submit">
            Find!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;

Search.propTypes = {
  setchargeSites: PropTypes.func.isRequired,
};
