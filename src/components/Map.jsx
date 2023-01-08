import { React, useState } from 'react';
import '../styles/Map.css';
import CustomMarker from '../assets/images/charging.png';
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  InfoWindowF,
} from '@react-google-maps/api';
import { RiChargingPileFill, Ri24HoursLine } from 'react-icons/ri';
import { MdPriceCheck } from 'react-icons/md';
import { FaBatteryFull, FaBatteryEmpty } from 'react-icons/fa';
import { TbFreeRights } from 'react-icons/tb';
import { BiNoEntry } from 'react-icons/bi';

function Map({ userCoords, chargeSites }) {
  const [position, setPosition] = useState(null);
  const [paymentFlag, setPaymentFlag] = useState(null);
  const [accessibilityFlag, setAccessibilityFlag] = useState(null);
  const [inService, setInService] = useState(null);
  const [chargerStreet, setChargerStreet] = useState(null);
  const [chargerPostcode, setChargerPostcode] = useState(null);
  const [chargerBuilding, setChargerBuilding] = useState(null);


  console.log('------', chargeSites);

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
        const { Street, PostCode, BuildingName } = charger.ChargeDeviceLocation.Address;

        return (
          <MarkerF
            options={{
              icon: CustomMarker,
            }}
            onMouseOver={() => {
              setPosition(ChargeDeviceId);
              setPaymentFlag(PaymentRequiredFlag);
              setAccessibilityFlag(Accessible24Hours);
              setInService(ChargeDeviceStatus);
              setChargerStreet(Street);
              setChargerPostcode(PostCode);
              setChargerBuilding(BuildingName)
            }}
            onMouseOut={() => {
              setPosition(null);
              setPaymentFlag(null);
              setAccessibilityFlag(null);
              setInService(null);
              setChargerStreet(null);
              setChargerPostcode(null);
              setChargerBuilding(null)
            }}
            key={charger.ChargeDeviceId}
            position={{ lat: Number(Latitude), lng: Number(Longitude) }}
            paymentFlag={PaymentRequiredFlag}
            accessibilityFlag={Accessible24Hours}
            inService={ChargeDeviceStatus}
            chargerStreet={Street}
            chargerPostcode={PostCode}
            chargerBuilding={BuildingName}
          >
            {position === ChargeDeviceId && (
              <InfoWindowF
                position={{ lat: Number(Latitude), lng: Number(Longitude) }}
              >
                <div>
                  {/* <RiChargingPileFill size={70} /> */}
                  <div>
                    <h4>{chargerStreet}</h4>
                    <h5>{BuildingName}</h5>
                    <h5>{chargerPostcode}</h5>
                  </div>
                  <div>
                    {' '}
                    Paid:{' '}
                    {paymentFlag ? (
                      <MdPriceCheck className="payment-icon" size={18} />
                    ) : (
                      <TbFreeRights className="payment-icon-none" size={18} />
                    )}
                  </div>
                  <div>
                    24hrs:{' '}
                    {accessibilityFlag ? (
                      <Ri24HoursLine className="clock-icon" size={18} />
                    ) : (
                      <BiNoEntry className="clock-icon-none" size={18} />
                    )}
                  </div>
                  <div>
                    {' '}
                    status:{' '}
                    {inService ? (
                      <FaBatteryFull className="battery-icon" size={18} />
                    ) : (
                      <FaBatteryEmpty className="battery-icon-empty" size={18} />
                    )}
                  </div>
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
