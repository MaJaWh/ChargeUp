import { React } from "react";
import PlugType from "./PlugType";

const Filters = ({}) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    getPlugs();
  };

  const getPlugs = async () => {
    fetch(`api/retrieve/type/format/json/`)
      .then((res) => res.json())
      .then((data) => {
        // setPlugFinder(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Filter">
      <div className="Filter__Title"></div>
      <form className="filter-form" onSubmit={handleSubmit}>
        <button className="search-btn" type="submit">
          Filter
        </button>
        <PlugType />
      </form>
    </div>
  );
};

export default Filters;
