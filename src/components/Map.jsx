import React from "react";
import '../styles/Map.css';
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

export default function Home() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.GEO_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  console.log(useJsApiLoader)

  if (!isLoaded) return <div>Loading...</div>;

  return <Map />;
  

  function Map() {
    return (
      <GoogleMap
        zoom={12}
        center={{ lat: 53.483959, lng: -2.244644 }}
        mapContainerClassName="map-container"
      >
      </GoogleMap>
    );
  }
};
