import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Map";

const Search = ({ setchargeSites }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    getData();
  };

  const getData = async () => {
    console.log(searchValue)
    fetch(
      `/api/retrieve/registry/connector-type/${searchValue}/limit/1000/format/json`
      // `/api/retrieve/registry/lat/53.483959/long/-2.244644/dist/5/limit/300/format/json/?q=${query}`
      //         {type: 'postcode',
      //         value: "m2 6ds"}
      //         api/retrieve/${query.type}/${query.value}
      //`postcode/m23dr`
      // lat/29387293/long/3462832
    )
      .then((res) => res.json())
      .then((data) => {
        setchargeSites(data.ChargeDevice);
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
          Go!
        </button>
      </form>
    </div>
  );
};

export default Search;

Search.propTypes = {
  setSearchResults: PropTypes.func,
};
