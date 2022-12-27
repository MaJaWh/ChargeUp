import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Map";
// import GetConnectorStatus from "./requests/GetConnectorStatus";

const Search = ({ setchargeSites, setChargerStatus, chargeSites }) => {
  const [searchValue, setSearchValue] = useState("");
  const [distanceValue, setDistanceValue] = useState("");
  const [ratedOutput, setRatedOutput] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    getData();
  };

  const getData = async () => {
    // console.log(searchValue, distanceValue, ratedOutput);
    fetch(
      `/api/retrieve/registry/postcode/${searchValue}/dist/${distanceValue}/rated-output-kw/${ratedOutput}/format/json`
    )
      .then((res) => res.json())
      .then((data) => {
        setchargeSites(data.ChargeDevice);
        setChargerStatus(data.ChargeDevice)
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="search-btn" type="submit">
          Postcode
        </button>
        <input
          className="search-input"
          type="text"
          onChange={(e) => setDistanceValue(e.target.value)}
        />
        <button className="search-btn" type="submit">
          Radius
        </button>
        <input
          className="search-input"
          type="text"
          onChange={(e) => setRatedOutput(e.target.value)}
        />
        <button className="search-btn" type="submit">
          Kw/H
        </button>
        {/* <GetConnectorStatus chargeSites={chargeSites}/> */}
      </form>
    </div>
  );
};

export default Search;

Search.propTypes = {
  setchargeSites: PropTypes.func.isRequired,
};
