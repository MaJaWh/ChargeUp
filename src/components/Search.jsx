import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Map";
import "../styles/search.css";
import PlugType from "../components/PlugType";
// import GetConnectorStatus from "./requests/GetConnectorStatus";

const Search = ({ setchargeSites, chargeSites }) => {
  const [searchValue, setSearchValue] = useState("");
  const [distanceValue, setDistanceValue] = useState("");
  const [ratedOutput, setRatedOutput] = useState("");
  const [returnedPlugType, setReturnedPlugType] = useState("");// add this in state as a test ---> "Type 2 Mennekes (IEC62196)"

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
        // setchargeSites(data.ChargeDevice);
        const filteredSites = data.ChargeDevice.filter(
          (site) => site.Connector[0].ConnectorType === returnedPlugType // add instead of returnedPlugType for test ---> "Type 2 Mennekes (IEC62196)"
        );
        setchargeSites(filteredSites);
        console.log(filteredSites, "<-----filteredSites");
        console.log(returnedPlugType, "<----returnedPlugType");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="search">
      <div className="search__title">Search</div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="postcode"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <input
          className="search-input"
          type="text"
          placeholder="Distance from location"
          onChange={(e) => setDistanceValue(e.target.value)}
        />

        <input
          className="search-input"
          type="text"
          placeholder="kw/h of car"
          onChange={(e) => setRatedOutput(e.target.value)}
        />
        <div className="search__filters">
          <PlugType setReturnedPlugType={setReturnedPlugType} />
        </div>
        <button className="search-btn" type="submit">
          Find!
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
