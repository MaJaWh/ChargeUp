import { useEffect } from "react";
import axios from "axios";

function SearchForm(props) {

  useEffect(() => {
    axios
      .get(
        "/api/retrieve/registry/lat/53.483959/long/-2.244644/dist/2/limit/5/format/json"
      )
      .then((response) => {
        const ChargingStation = response.data.ChargeDevice;
        const longitude = ChargingStation.map((e) => e.ChargeDeviceLocation.Longitude);
        const latitude= ChargingStation.map((e) => e.ChargeDeviceLocation.Latitude);
        const googleLocation = latitude.map((element, index) => { return { lat: element, lng: longitude[index] } })
        console.log(googleLocation);
        return(googleLocation);
      });
  }, []);
}

export default SearchForm;
