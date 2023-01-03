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

const PlugType = () => {
  const [plug, setPlug] = useState([]);

  async function handleClick() {
    fetch(`api/retrieve/type/format/json/`)
      .then((res) => res.json())
      .then((data) => setPlug(data.ConnectorType));
  }

  const mappedObj = Object.keys(plug).map((key) => ({
    [key]: plug[key],
  }));

  console.log(mappedObj, "<-------- mappedObj");

  return (
    <div>
        <div className="plugtype__outer-div">
          <button onClick={handleClick}>
            Click for Results
            <img
              className="img__btn"
              src={Chad}
              size=""
              alt="Chademo plug"
            ></img>
            ChadEmo
          </button>
          <button>
            <img
              className="img__btn"
              src={Caravan}
              size=""
              alt="Caravan Mains"
            ></img>
            Caravan Mains
          </button>
          <button>
            <img
              className="img__btn"
              src={Commando}
              size=""
              alt="Commando"
            ></img>
            Commando
          </button>
          <button>
            <img className="img__btn" src={J1772} size="" alt="J1772"></img>
            J1772
          </button>
          <button>
            <img
              className="img__btn"
              src={Roadster}
              size=""
              alt="Roadster"
            ></img>
            Roadster
          </button>
          <button>
            <img className="img__btn" src={Tesla} size="" alt="Tesla"></img>
            Tesla
          </button>
          <button>
            <img className="img__btn" src={Type2} size="" alt="Type2"></img>
            Type2
          </button>
          <button>
            <img className="img__btn" src={Type3} size="" alt="Type3"></img>
            Type3
          </button>
          <button>
            <img className="img__btn" src={Wall} size="" alt="Wall"></img>Wall
          </button>
        </div>
    </div>
  );
};

export default PlugType;
