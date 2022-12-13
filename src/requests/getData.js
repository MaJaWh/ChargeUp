import axios from "axios";

// let endpoint = "http://chargepoints.dft.gov.uk/api/retrieve/registry/lat/53.483959/long/-2.244644/dist/5/format/json"

// axios
//     .get(endpoint)
//     .then((response) => {
//         const charger = response.CargerDevices
//         console.log(charger)
//     })

async function getData () {
    try {
      const response = await axios.get("http://chargepoints.dft.gov.uk/api/retrieve/registry/lat/53.483959/long/-2.244644/dist/5/format/json");
      console.log(response);
    } catch (error) {
        console.error(error)
    }
  };
  
  export default getData;

// Axios GET Default
// axios
//   .get("https://finalspaceapi.com/api/v0/character/?limit=2")
//   .then(function (response) {
//     console.log(response);
//   });

// axios({
//     method: 'get',
//     url: 'https://bit.ly/2mTM3nY',
//     responseType: 'stream'
//   })
//     .then(function (response) {
//       c
//     });
