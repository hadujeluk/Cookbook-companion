 


import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <div className="Navcontainer">
      <div className="Iconcontainer">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJX-58TMLs5F9M3K-kAiz7AExZ5gESOcBr9A&s"
            className="icon"
          />
        </div>
        <h3>COOKBOOK COMPANION</h3>

        </div>
       <div>
    

      </div>
      <div>
        <nav className="nav">
          <div className="ButtonsDiv">
            <div className="Navbutton">
              <NavLink to={"/"} className="navbar">
                <button className="btn btn-secondary button1">HOME</button>
              </NavLink>
            </div>
            <div className="Navbutton">
              <NavLink to={"/about"} className="navbar">
                <button className="btn btn-secondary button1">ABOUT</button>
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
