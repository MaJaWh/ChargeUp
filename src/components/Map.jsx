import { React, useState } from "react";
import "../styles/Map.css";
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from "@react-google-maps/api";

export default function Home({ userCoords, chargeSites }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_EMBED_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return <Map />;

  function Map() {

    const [position, setPosition] = useState(null)

    return (
      <GoogleMap
        zoom={12}
        center={userCoords}
        mapContainerClassName="map-container"
      >
        {chargeSites.map((charger) => {
          const { Latitude, Longitude } = charger.ChargeDeviceLocation;
          const { ChargeDeviceId } = charger;
          return (
            <MarkerF
              onMouseOver={() => {setPosition(ChargeDeviceId)}}
              onMouseOut={() => {setPosition(null)}}
              key={charger.ChargeDeviceId}
              position={{ lat: Number(Latitude), lng: Number(Longitude) }}
            >
              {(position === ChargeDeviceId)&&<InfoWindowF position={{ lat: Number(Latitude), lng: Number(Longitude) }}><div>Hello</div></InfoWindowF>}
            </MarkerF>
          );
        })}
      </GoogleMap>
    );
  }
}
