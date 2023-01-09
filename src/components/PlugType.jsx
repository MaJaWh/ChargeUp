import React, { useEffect, useState } from 'react';
import '../styles/plugType.css';
import '../components/Map';
import { fetchConnectorTypes } from './requests/requests';
import { PLUG_ASSET_MAP } from './utils';

const PlugType = ({ setReturnedPlugType }) => {
  const [plugData, setPlugData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetchConnectorTypes();
      setPlugData(response);
    })();
  }, []);

  const handleClick = (plug) => setReturnedPlugType(plug);

  return (
    <div className="plugtype__outer-div">
      {plugData.map((plug) => {
        return (
          <button
            className="plugButton"
            key={plug.ConnectorTypeID}
            onClick={() => handleClick(plug)}
          >
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
