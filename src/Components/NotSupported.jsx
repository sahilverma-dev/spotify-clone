import React from "react";

// importing context
import { useDataLayerValue } from "../Contexts/DataLayer";

// importing styling
import "../Styles/NotSupported.css";

const NotSupported = () => {
  const [{}, dispatch] = useDataLayerValue();
  return (
    <div className="not-supported">
      <div className="message">
        <img
          src="https://www.pngall.com/wp-content/uploads/2017/05/Alert-Download-PNG.png"
          alt="Error Icon"
        />
        <h1>Application doesn't support small Screens</h1>
        <p>Please Increase Your Device Width or Run in Desktop</p>
        <button
          onClick={(e) =>
            dispatch({
              type: "SET_SUPPORT",
              supported: true,
            })
          }
        >
          Try Anyway !
        </button>
      </div>
    </div>
  );
};

export default NotSupported;
