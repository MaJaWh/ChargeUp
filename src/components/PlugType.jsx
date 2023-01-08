import React, { useEffect, useState } from 'react';
import Chad from '../assets/images/chademo.png';
import Caravan from '../assets/images/caravan-mains.png';
import Commando from '../assets/images/commando.png';
import J1772 from '../assets/images/j1772.png';
import Roadster from '../assets/images/roadster.png';
import Tesla from '../assets/images/tesla.png';
import Type2 from '../assets/images/type2main.png';
import Type3 from '../assets/images/type3.png';
import Wall from '../assets/images/wall-bs1363.png';
import '../styles/plugType.css';
import '../components/Map';

const PLUG_ASSET_MAP = {
  4: Chad,
  5: Caravan,
  6: Wall,
  7: Type3,
  15: Type2,
  16: Tesla,
  17: Commando,
  18: Roadster,
};

const PlugType = ({ setReturnedPlugType }) => {
  const [plugData, setPlugData] = useState([]);

  useEffect(() => {
    fetch(`api/retrieve/type/format/json/`)
      .then((res) => res.json())
      .then((data) => {
        setPlugData(Object.values(data.ConnectorType));
      });
  }, []);

  const handleClick = (plug) => setReturnedPlugType(plug);

  return (
    <div className="plugtype__outer-div">
      {plugData.map((plug) => {
        return (
          <button key={plug.ConnectorTypeID} onClick={() => handleClick(plug)}>
            <img
              className="img__btn"
              src={PLUG_ASSET_MAP[plug.ConnectorTypeID]}
              size=""
              alt={plug.ConnectorType}
            ></img>
            {plug.ConnectorType}
          </button>
        );
      })}
    </div>
  );
};

export default PlugType;
