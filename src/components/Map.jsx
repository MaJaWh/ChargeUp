import { React, useEffect, useState } from "react";
import "../styles/Map.css";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

export default function Home() {
  const [chargeSites, setchargeSites] = useState([]);

  useEffect(() => {
      fetch('/api/retrieve/registry/lat/53.483959/long/-2.244644/dist/50/limit/1000/format/json')
      .then((res) => res.json())
      .then((data) => {
          setchargeSites(data.ChargeDevice)
      })
      .catch((err) => {
        console.log(err)
      });
  }, [])

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_EMBED_API_KEY,
  });

  console.log(process.env.REACT_APP_GOOGLE_MAPS_EMBED_API_KEY);
  console.log(chargeSites)

  if (!isLoaded) return <div>Loading...</div>;

  return <Map />;

  function Map() {
    const center = {
      lat: 53.483959,
      lng: -2.244644,
    };

    return (
      <GoogleMap
        zoom={12}
        center={center}
        mapContainerClassName="map-container"
      >
        {chargeSites.map(charger => { 
          const { Latitude, Longitude } = charger.ChargeDeviceLocation
          return <MarkerF
          key={charger.ChargeDeviceId}
          position={{lat: Number(Latitude), lng: Number(Longitude)}}
          />
        })}
      </GoogleMap>
    );
  }
}
