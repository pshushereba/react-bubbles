import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";

import PrivateRoute from './components/PrivateRoute.js';
import BubblePage from './components/BubblePage.js';

function App() {
  const [colorList, setColorList] = useState([]);
  return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/colors" component={BubblePage} />
          <Route component={Login} />
        </Switch>
      </div>
  );
}

export default App;
