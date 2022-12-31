import { React } from "react";
import PlugType from "./PlugType";
import '../styles/filters.css'

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
    <div className="filter">
      <form className="filter-form" onSubmit={handleSubmit}>
        <PlugType />
        <button className="search-btn" type="submit">
          Filter
        </button>
      </form>
    </div>
  );
};

export default Filters;
