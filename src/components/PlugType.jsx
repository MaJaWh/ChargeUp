import React from "react";
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

const PlugType = () => {
  return (
    <div>
      <div className="plug_types">
        <button>
          <img src={Chad} size="" alt="Chademo plug"></img>ChadEmo
        </button>
        <button>
          <img src={Caravan} size="" alt="Caravan Mains"></img>Caravan Mains
        </button>
        <button>
          <img src={Commando} size="" alt="Commando"></img>Commando
        </button>
      </div>
      <div className="plug_types">
        <button>
          <img src={J1772} size="" alt="J1772"></img>J1772
        </button>
        <button>
          <img src={Roadster} size="" alt="Roadster"></img>Roadster
        </button>
        <button>
          <img src={Tesla} size="" alt="Tesla"></img>Tesla
        </button>
      </div>
      <div className="plug_types">
        <button>
          <img src={Type2} size="" alt="Type2"></img>Type2
        </button>
        <button>
          <img src={Type3} size="" alt="Type3"></img>Type3
        </button>
        <button>
          <img src={Wall} size="" alt="Wall"></img>Wall
        </button>
      </div>
    </div>
  );
};

export default PlugType;
