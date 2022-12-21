import React from "react";
import PropTypes from "prop-types";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>No Results</p>;
  } else {
    return (
      <div className="search-results">
        {results.map((Home) => (
          <img
            key={Home}
            className="card-image"
            src={Home}
            alt="mapImage"
          />
        ))}
      </div>
    );
  }
};

export default SearchResults;

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
};
