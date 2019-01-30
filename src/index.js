import React from "react";
import { render } from "react-dom";
import createStore from "pure-store";

import "./styles.scss";

const store = createStore({ count: 104 });

const App = () => (
  <div>
    <h1>{store.state.count}</h1>
  </div>
);

render(<App />, document.getElementById("app"));
