import { React, useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "./Footer";
import Map from "../components/Map";
import "../styles/dashboard.css";
import Search from "./SearchForm";

function Dashboard() {
  const [chargeSites, setchargeSites] = useState([]);
  const [coordinates, setCoordinates] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  return (
    <div className="dashboard-wrapper">
      <div className="main-title">ChargeUp</div>
      <Header />
      <Map userCoords={coordinates} chargeSites={chargeSites} />
      <Footer className="dashboard__footer" />
      <Search setchargeSites={setchargeSites} />
    </div>
  );
}

export default Dashboard;
