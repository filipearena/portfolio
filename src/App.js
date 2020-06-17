import React, { useEffect } from "react";
import {
  Route,
  BrowserRouter,
  Switch,
} from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import NavBar from "./components/navBar"
import Footer from "./components/footer";



function App() {
  const [state, setState] = React.useState({
    activeSection: 1,
  });

  function isElementEntirelyInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  let scroll = window.requestAnimationFrame || function (callback) { window.setTimeout(callback, 1000 / 60) }

  const loop = () => {
    const sectionOne = document.getElementById('1');
    const sectionTwo = document.getElementById('2');
    const sectionThree = document.getElementById('3');
    if (isElementEntirelyInViewport(sectionOne)) {
      setState((oldState) => ({ ...oldState, activeSection: 1 }))
    }
    if (isElementEntirelyInViewport(sectionTwo)) {
      setState((oldState) => ({ ...oldState, activeSection: 2 }))
    }
    if (isElementEntirelyInViewport(sectionThree)) {
      setState((oldState) => ({ ...oldState, activeSection: 3 }))
    }
    scroll(loop);
  }

  useEffect(() => {
    loop()
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <NavBar activeSection={state.activeSection}></NavBar>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
