import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Tab, Paper } from "@material-ui/core";
import {
  Route,
  Link,
  BrowserRouter,
  Switch,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function App() {
  const [value, setValue] = React.useState(0);
  let location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setValue(1);
    }
  }, [location.pathname]);

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Paper className="navbar" id="navbar">
            <FaLinkedin className="icon" size={'2em'} />
            <FaFacebook className="icon" size={'2em'} />
            <FaGithub className="icon" size={'2em'} />
            <FaEnvelope className="icon" size={'2em'} />
          </Paper>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
