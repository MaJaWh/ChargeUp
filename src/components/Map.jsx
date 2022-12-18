import { React } from "react";
import "../styles/Map.css";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

export default function Home({ chargeSites }) {
  console.log(chargeSites)
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_EMBED_API_KEY,
  });

  console.log(process.env.REACT_APP_GOOGLE_MAPS_EMBED_API_KEY);

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
        {chargeSites.map((charger) => {
          const { Latitude, Longitude } = charger.ChargeDeviceLocation;
          return (
            <MarkerF
              key={charger.ChargeDeviceId}
              position={{ lat: Number(Latitude), lng: Number(Longitude) }}
            />
          );
        })}
      </GoogleMap>
    );
  }}