import React, { useState, useEffect } from "react";
import Chad from "../assets/images/chademo.png";
import Caravan from "../assets/images/caravan-mains.png";
import Commando from "../assets/images/commando.png";
import J1772 from "../assets/images/j1772.png";
import Roadster from "../assets/images/roadster.png";
import Tesla from "../assets/images/tesla.png";
import Type2 from "../assets/images/type2main.png";
import Type3 from "../assets/images/type3.png";
import Wall from "../assets/images/wall-bs1363.png";
import "../styles/plugType.css";
import "../components/Map";

const PlugType = () => {
  const [plug, setPlug] = useState([]);
  const [chadPlug, setchadPlug] = useState([]);
  const [j1772Plug, setJ1772Plug] = useState([]);
  const [roadsterPlug, setRoadsterPlug] = useState([]);
  const [teslaPlug, setTeslaPlug] = useState([]);
  const [type2Plug, setType2Plug] = useState([]);
  const [type3Plug, setType3Plug] = useState([]);
  const [typeGPlug, setTypeGPlug] = useState([]);
  const [caravanPlug, setCaravanPlug] = useState([]);

  useEffect(() => {
    fetch(`api/retrieve/type/format/json/`)
      .then((res) => res.json())
      .then((data) => {
        setPlug(data.ConnectorType);
        setchadPlug(data.ConnectorType);
        setJ1772Plug(data.ConnectorType);
        setRoadsterPlug(data.ConnectorType);
        setTeslaPlug(data.ConnectorType);
        setType2Plug(data.ConnectorType);
        setType3Plug(data.ConnectorType);
        setTypeGPlug(data.ConnectorType);
        setCaravanPlug(data.ConnectorType);
      });
  }, []);

  const handleClick1 = () => {
    const selected3Pin = Object.values(plug).find(
      (obj) => obj.ConnectorTypeID === 18
    );
    console.log(selected3Pin, "<--------selected3Pin");
  };

  const handleClick2 = () => {
    const selectedChademo = Object.values(chadPlug).find(
      (obj) => obj.ConnectorTypeID === 4
    );
    console.log(selectedChademo, "<--------selectedChademo");
  };

  const handleClick3 = () => {
    const selectedJ1772 = Object.values(j1772Plug).find(
      (obj) => obj.ConnectorTypeID === 5
    );
    console.log(selectedJ1772, "<--------selectedJ1772");
  };

  const handleClick4 = () => {
    const selectedRoadster = Object.values(roadsterPlug).find(
      (obj) => obj.ConnectorTypeID === 16
    );
    console.log(selectedRoadster, "<--------selectedRoadster");
  };

  const handleClick5 = () => {
    const selectedTesla = Object.values(teslaPlug).find(
      (obj) => obj.ConnectorTypeID === 16
    );
    console.log(selectedTesla, "<--------selectedTesla");
  };

  const handleClick6 = () => {
    const selectedType2plug = Object.values(type2Plug).find(
      (obj) => obj.ConnectorTypeID === 6
    );
    console.log(selectedType2plug, "<--------selectedType2plug");
  };

  const handleClick7 = () => {
    const selectedType3plug = Object.values(type3Plug).find(
      (obj) => obj.ConnectorTypeID === 7
    );
    console.log(selectedType3plug, "<--------selectedType3plug");
  };

  const handleClick8 = () => {
    const selectedTypeGplug = Object.values(typeGPlug).find(
      (obj) => obj.ConnectorTypeID === 3
    );
    console.log(selectedTypeGplug, "<--------selectedTypeGplug");
  };

  const handleClick9 = () => {
    const selectedCaravanPlug = Object.values(caravanPlug).find(
      (obj) => obj.ConnectorTypeID === 3
    );
    console.log(selectedCaravanPlug, "<--------selectedCaravanPlug");
  };

  return (
    <>
      <div className="plugtype__outer-div">
        <button onClick={handleClick2}>
          Click for Results
          <img className="img__btn" src={Chad} size="" alt="Chademo plug"></img>
          ChadEmo
        </button>
        <button onClick={handleClick9}>
          <img
            className="img__btn"
            src={Caravan}
            size=""
            alt="Caravan Mains"
          ></img>
          Caravan Mains
        </button>
        <button onClick={handleClick1}>
          <img className="img__btn" src={Commando} size="" alt="Commando"></img>
          Commando
        </button>
        <button onClick={handleClick3}>
          <img className="img__btn" src={J1772} size="" alt="J1772"></img>
          J1772
        </button>
        <button onClick={handleClick4}>
          <img className="img__btn" src={Roadster} size="" alt="Roadster"></img>
          Roadster
        </button>
        <button onClick={handleClick5}>
          <img className="img__btn" src={Tesla} size="" alt="Tesla"></img>
          Tesla
        </button>
        <button onClick={handleClick6}>
          <img className="img__btn" src={Type2} size="" alt="Type2"></img>
          Type2
        </button>
        <button onClick={handleClick7}>
          <img className="img__btn" src={Type3} size="" alt="Type3"></img>
          Type3
        </button>
        <button onClick={handleClick8}>
          <img className="img__btn" src={Wall} size="" alt="Wall"></img>Wall
        </button>
      </div>
    </>
  );
};

export default PlugType;
