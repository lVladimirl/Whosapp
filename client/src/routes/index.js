import { Route, Routes } from "react-router-dom";
import { Contacts } from "../pages/contacts";
import { Homepage } from "../pages/homepage";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

function Paths() {
  return (
    <Routes>
      <Route exact path={"/"} element={<Login />}></Route>
      <Route path={"/register"} element={<Register />}></Route>
      <Route path={"/homepage"} element={<Homepage />}></Route>
      <Route exact path={"/contacts"} element={<Contacts />}></Route>
    </Routes>
  );
}

export default Paths;
