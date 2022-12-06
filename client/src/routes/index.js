import { Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/homepage";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

function Paths() {
  return (
    <Routes>
      <Route exact path={"/"} element={<Login />}></Route>
      <Route path={"/register"} element={<Register />}></Route>
      <Route exact path={"/homepage"} element={<Homepage />}></Route>
      {/* <Route exact path={"/"} element={<Homepage />}></Route> */}
    </Routes>
  );
}

export default Paths;
