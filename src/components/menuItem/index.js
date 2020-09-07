import React  from "react";
import './styles.css'

const MenuItem = ({text, src, href}) => (
  <div className="wrapper">
    <a className="link" href={href}>
      <img className="icon" src={src} alt="icon representando o menu"/>
      <p className="text">{text}</p>
    </a>
  </div>
)

export default MenuItem;
