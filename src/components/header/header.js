import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import img    from "../../img/icons/casa.svg"; 
import img2   from "../../img/icons/sair.svg"; 

const Header = () => {
   

    return (
      <header className="main-header">
        <p>CONTA <span style={{color: '#6f9bac'}}>BLACK</span></p>
        <Link className="links">
 
          <Link to="/home" className="links icon"> 
          <img  src={img}
            alt="icone-home" /> 
          </Link>
          <Link to="/logout" className="links icon">
          <img src={img2}
            alt="icone-sair" /> 
          </Link>
        </Link>
      </header>
    );
  };
  
  export default Header;