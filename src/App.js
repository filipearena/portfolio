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

  const isElementEntirelyInViewport = (el) => {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return (
      top >= window.pageYOffset &&
      left >= window.pageXOffset &&
      (top + height) <= (window.pageYOffset + window.innerHeight) &&
      (left + width) <= (window.pageXOffset + window.innerWidth)
    );
  }

  let scroll = window.requestAnimationFrame || function (callback) { window.setTimeout(callback, 1000 / 60) }

  const loop = () => {
    const sectionOne = document.getElementById('1');
    const sectionTwo = document.getElementById('2');
    const sectionThree = document.getElementById('3');
    if (isElementEntirelyInViewport(sectionOne)) {
      // alert('section one in viewport')
      setState((oldState) => ({ ...oldState, activeSection: 1 }))
    }
    if (isElementEntirelyInViewport(sectionTwo)) {
      // alert('section two in viewport')
      setState((oldState) => ({ ...oldState, activeSection: 2 }))
    }
    if (isElementEntirelyInViewport(sectionThree)) {
      // alert('section three in viewport')
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
