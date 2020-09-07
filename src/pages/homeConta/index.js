import React from 'react';
import './style.css';
import menuOptions from './menuOptions'
import MenuItem from '../../components/menuItem';
import cartao from "../../img/icons/cartao1.png" ;
import MenuFooter from '../../components/menuFooter';

const pathIcon = (name) => require(`../../img/icons/${name}`)

const homeConta = () => (
  <div className="background">
    <img  className="card" src={cartao} alt="card - backgroud cartão"/>
    <div className="menu">
      {menuOptions.map((item) => (
        <MenuItem
          text={item.label}
          src={pathIcon(item.icon)}
          href={item.href}
        />
      ))}
    </div>
    <MenuFooter />
  </div>
)

export default homeConta;
