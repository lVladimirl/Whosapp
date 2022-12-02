import { Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <div className="App">
          </div>
        </Route>
        <Route path="/register">
          <div className="App">
          </div>
        </Route>
        <Route path="/users">
        </Route>
      </Switch>
    </>
  );
}

export default App;
