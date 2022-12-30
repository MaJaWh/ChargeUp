import { React, useState } from "react";

const Filters = ({ setPlugFinder, }) => {
  const [plugType, setPlugType] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    getPlugs();
  };

  const getPlugs = async () => {
    fetch(`api/retrieve/type/format/json/`)
      .then((res) => res.json())
      .then((data) => {
        setPlugFinder(data.plugType);
        console.log(data);
        console.log(setPlugType)
      })
      .catch((err) => {
        console.log(err);
      });
  };

    return (
      <div className="Filter">
        <div className="Filter__Title"></div>
        <form className="filter-form" onSubmit={handleSubmit}>
          {plugType.map((type) => {
            return <div>{type.ConnectorType[3].ConnectorType}</div>
          })}
          <button className="search-btn" type="submit">
            Filter
          </button>
        </form>
      </div>
    )
  }

export default Filters;

// function Filters() {
//   const [plugType, setPlugTypes] = useState();

//   useEffect(() => {
//     fetch(`api/retrieve/type/format/json/`)
//       .then((response) => response.json())
//       .then((data) => {
//         setPlugTypes(data);
//       });
//   }, []);

//   return (
//     <>
//       <h1>HELLO</h1>
//       {plugType.map((ConnectorType) => {
//         return <p>{ConnectorType}</p>;
//       })}
//     </>
//   );
// }
