import { React, useState } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

const Filters = ({ setPlugFinder }) => {
  const [plugType, setPlugType] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    getPlugs();
  };

  const getPlugs = async () => {
    fetch(`api/retrieve/type/${plugType}/format/json/`)
      .then((res) => res.json())
      .then((data) => {
        setPlugFinder(data.ChargeDevice);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="Filter">
      <div className="Filter__Title"></div>
      <form className="filter-form" onSubmit={handleSubmit}>
        <Card
          className="filter-input"
          type="text"
          placeholder="PlugType"
          onChange={(e) => setPlugType(e.target.value)}
        />
        <div>
            
        </div>
        <button className="search-btn" type="submit">
          Filter
        </button>
      </form>
    </div>
  );
};

export default Filters;

Filters.propTypes = {
    setPlugFinder: PropTypes.func.isRequired,
};
