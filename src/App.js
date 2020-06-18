import React from "react";
import {
  Route,
  BrowserRouter,
  Switch,
} from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
