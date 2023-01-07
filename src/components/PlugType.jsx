import React, { useState } from "react";
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

const PlugType = ({ setReturnedPlugType }) => {
  const [plug, setPlug] = useState();

  const getPlugData = async () => {
    fetch(`api/retrieve/type/format/json/`)
      .then((res) => res.json())
      .then((data) => {
        setPlug(data.ConnectorType);
      });
  };

  const handleClick1 = () => {
    getPlugData();
    setReturnedPlugType(
      Object.values(plug).find((obj) => obj.ConnectorTypeID === 3)
    );
  };
  const handleClick2 = () => {
    getPlugData();
    setReturnedPlugType(
      Object.values(plug).find((obj) => obj.ConnectorTypeID === 4)
    );
  };
  const handleClick3 = () => {
    getPlugData();
    setReturnedPlugType(
      Object.values(plug).find((obj) => obj.ConnectorTypeID === 5)
    );
  };
  const handleClick4 = () => {
    getPlugData();
    setReturnedPlugType(
      Object.values(plug).find((obj) => obj.ConnectorTypeID === 16)
    );
  };
  const handleClick5 = () => {
    getPlugData();
    setReturnedPlugType(
      Object.values(plug).find((obj) => obj.ConnectorTypeID === 16)
    );
  };
  const handleClick6 = () => {
    getPlugData();
    setReturnedPlugType(
      Object.values(plug).find((obj) => obj.ConnectorTypeID === 6)
    );
  };
  const handleClick7 = () => {
    getPlugData();
    setReturnedPlugType(
      Object.values(plug).find((obj) => obj.ConnectorTypeID === 7)
    );
  };
  const handleClick8 = () => {
    getPlugData();
    setReturnedPlugType(
      Object.values(plug).find((obj) => obj.ConnectorTypeID === 17)
    );
  };
  const handleClick9 = () => {
    getPlugData();
    setReturnedPlugType(
      Object.values(plug).find((obj) => obj.ConnectorTypeID === 3)
    );
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
        <button onClick={handleClick8}>
          <img className="img__btn" src={Commando} alt="Commando"></img>
          Commando
        </button>
        <button onClick={handleClick3}>
          <img className="img__btn" src={J1772} alt="J1772"></img>
          J1772
        </button>
        <button onClick={handleClick4}>
          <img className="img__btn" src={Roadster} alt="Roadster"></img>
          Roadster
        </button>
        <button onClick={handleClick5}>
          <img className="img__btn" src={Tesla} alt="Tesla"></img>
          Tesla
        </button>
        <button onClick={handleClick6}>
          <img className="img__btn" src={Type2} alt="Type2"></img>
          Type2
        </button>
        <button onClick={handleClick7}>
          <img className="img__btn" src={Type3} alt="Type3"></img>
          Type3
        </button>
        <button onClick={handleClick1}>
          <img className="img__btn" src={Wall} alt="Wall"></img>
          Wall
        </button>
      </div>
    </>
  );
};

export default PlugType;
