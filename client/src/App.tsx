import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Header from "./components/header";
import {Switch, Route} from "react-router-dom"

function App() {
  return (
    // <div className="App">
    //   <Header/>
    // </div>
    <>
      <Switch>
        <Route path="/">
          <div className="App">
            <Header/>
          </div>
        </Route>
      </Switch>
    </>
  );
}

export default App;
