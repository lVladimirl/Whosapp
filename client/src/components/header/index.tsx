import "./index.css"
function Header() {
  return (
    <div className="Header">
     <h1>Whosapp</h1>
     <nav>
      <ul>
        <li><button className="Navbar-button">texto expositivo</button></li>
        <li><button className="Navbar-button">texto expositivo</button></li>
        <li><button className="Navbar-button">texto expositivo</button></li>
      </ul>
     </nav>
     <button className="Header-button">login/cadastro</button>
    </div>
  );
}

export default Header;