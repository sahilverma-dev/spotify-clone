import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";

// import DataLayer
import { DataLayer } from "./Contexts/DataLayer";

import reducer, { initialState } from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById("root")
);
