import { Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/homepage";

function Paths() {
  return (
    <Routes>
      <Route exact path={"/"} element={<Homepage />}></Route>
      <Route exact path={"/"} element={<Homepage />}></Route>
    </Routes>
  );
}

export default Paths;
