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
import About from "./pages/About";
import Contact from "./pages/Contact";
// import StockDetails from "./pages/StockDetails"
import "./App.css";
// import Background from "./images/bg.jpg";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles({
  root: {
    minHeight: "100%",
    flexGrow: 1,
    // backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    width: "100%",
    margin: 0,
    padding: 0,
    backgroundSize: "100% 100%",
  },
});

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  let location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setValue(1);
    }
  }, [location.pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      {/* <ToastContainer position="bottom-center" hideProgressBar /> */}
      <BrowserRouter>
        <div className={classes.root}>
          <Paper style={{ backgroundImage: "linear-gradient(#fff, #bbb)" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Home" to="/" component={Link} />
              <Tab label="About" to="/about" component={Link} />
              <Tab label="Contact" to="/contact" component={Link} />
            </Tabs>
          </Paper>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            {/* <Route path="/stocks/:stockSymbol" component={StockDetails}/>  */}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
