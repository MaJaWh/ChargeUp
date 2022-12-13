import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Input } from "semantic-ui-react";

function SearchForm() {
  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://chargepoints.dft.gov.uk/api/retrieve/registry/lat/53.483959/long/-2.244644/dist/5/format/json"
      )
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <Input
        icon="search"
        placeholder="Search..."
        onChange={(e) => searchItems(e.target.value)}
      />
      <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
        {searchInput.length > 1
          ? filteredResults.map((item) => {
              return (
                <Card>
                  <Card.Content>
                    <Card.Header>{item.name}</Card.Header>
                    <Card.Description>{item.email}</Card.Description>
                  </Card.Content>
                </Card>
              );
            })
          : APIData.map((item) => {
              return (
                <Card>
                  <Card.Content>
                    <Card.Header>{item.name}</Card.Header>
                    <Card.Description>{item.email}</Card.Description>
                  </Card.Content>
                </Card>
              );
            })}
      </Card.Group>
    </div>
  );
}

export default SearchForm;
