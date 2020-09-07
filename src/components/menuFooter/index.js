import React from 'react';
import './styles.css';
import MenuOptionsFooter from './menuFooterOptions';



const pathIcon = (name) => require(`../../img/icons/${name}`)



const MenuFooter = () => (
  <div className="content">
      {MenuOptionsFooter.map((item) => (
        <div className="item"> 
          <img className="icon" src={pathIcon(item.icon)} alt="icon" />
          <p className='title-icon'>{item.label}</p>
        </div>
      ))}
  </div>
);

export default MenuFooter;
