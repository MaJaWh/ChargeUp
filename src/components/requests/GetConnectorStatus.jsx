import React, { useState } from "react";
import PropTypes from "prop-types";

function GetConnectorStatus ({ chargeSites }) {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    getData();
  };

  const getData = async () => {
    console.log(status);
    fetch(`/api/retrieve/status/${status}/format/json`)
      .then((res) => res.json())
      .then((data) => {
        chargeSites(data.ChargeDevice);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="search-status">
        <input
        onSubmit={handleSubmit}
          className="search-input"
          type="text"
          onChange={(e) => setStatus(e.target.value)}
        />
        <button className="search-btn" type="submit">
          Charger Status
        </button>
    </div>
  );
};

export default GetConnectorStatus;

GetConnectorStatus.propTypes = {
  setStatus: PropTypes.func.isRequired,
};
