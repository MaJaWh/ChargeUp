import React, { useState } from "react";
import "./Map";

const ChargerInfo = ({ setchargeSites }) => {
  const [searchValue, setSearchValue] = useState("");

  const getData = async () => {
    console.log(searchValue)
    fetch(
      `/api/retrieve/registry/postcode/${searchValue}/dist/1/format/json`
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
};

export default ChargerInfo;