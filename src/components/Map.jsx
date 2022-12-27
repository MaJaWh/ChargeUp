import { React, useState } from "react";
import "../styles/Map.css";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import { RiChargingPileFill }  from "react-icons/ri"

function Map({ userCoords, chargeSites }) {
  const [position, setPosition] = useState(null);
  const [paymentFlag, setPaymentFlag] = useState(null);
  const [accessibilityFlag, setAccessibilityFlag] = useState(null);
  const [inService, setInService] = useState(null);

  
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_EMBED_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      zoom={12}
      center={userCoords}
      mapContainerClassName="map-container"
    >
      {chargeSites.map((charger) => {
        const { Latitude, Longitude } = charger.ChargeDeviceLocation;
        const {
          ChargeDeviceId,
          PaymentRequiredFlag,
          Accessible24Hours,
          ChargeDeviceStatus,
        } = charger;
        
        return (
          <MarkerF
            onMouseOver={() => {
              setPosition(ChargeDeviceId);
              setPaymentFlag(PaymentRequiredFlag);
              setAccessibilityFlag(Accessible24Hours);
              setInService(ChargeDeviceStatus);
            }}
            onMouseOut={() => {
              setPosition(null);
              setPaymentFlag(null);
              setAccessibilityFlag(null);
              setInService(null);
            }}
            key={charger.ChargeDeviceId}
            position={{ lat: Number(Latitude), lng: Number(Longitude) }}
            paymentFlag={PaymentRequiredFlag}
            accessibilityFlag={Accessible24Hours}
            inService={ChargeDeviceStatus}
          >
            {position === ChargeDeviceId && ChargeDeviceStatus && (
              <InfoWindowF
                position={{ lat: Number(Latitude), lng: Number(Longitude) }}
              >
                <div>
                <RiChargingPileFill size={70} />
                  <div>Payment Required? {paymentFlag ? "Yes" : "No"}</div>
                  <div>
                    Accessible 24 Hours? {accessibilityFlag ? "Yes" : "No"}
                  </div>
                  <div>Charger In Service? {inService ? "Yes" : "No"}</div>
                </div>
              </InfoWindowF>
            )}
          </MarkerF>
        );
      })}
    </GoogleMap>
  );
}

export default Map;
