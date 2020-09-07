import React from 'react';
import "./styles.css";
import img    from "../../img/background/conta_blck.jpeg"; 
import img2   from "../../img/background/Conta-Black.jpg"; 

function Logout() {

    return(
        <section>
           <img  src={img2} className="imagemLog"
            alt="imagem-conta background" /> 
           <img  src={img} className="imagemLog"
            alt="imagem-conta background" /> 
        </section>
        
    )
}

  
export default Logout;