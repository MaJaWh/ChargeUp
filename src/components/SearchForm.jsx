import { useEffect } from "react";
import axios from "axios";

function SearchForm() {
  useEffect(() => {
    axios
      .get(
        "/api/retrieve/registry/lat/53.483959/long/-2.244644/dist/5/format/json"
      )
      .then((response) => {
        console.log(response)
      });
  }, []);
}

export default SearchForm;
