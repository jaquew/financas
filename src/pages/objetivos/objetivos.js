import React  from "react";
import Button from "../../components/button/button.js";
import Header from "../../components/header/header.js";
import img    from "../../img/icons/pgto_boleto.svg"; 
import img2   from "../../img/icons/transf_dinheiro.svg"; 
import img3   from "../../img/icons/deposito.svg"; 
import img4   from "../../img/icons/pgto_fatura.svg"; 
import img5   from "../../img/icons/pgto_emprestimo.svg"; 
import "./styles.css";


function Objetivos(){
 


return(
    <section>
      <Header/>
        <div className="objetivos">
           <Button className="btn-obj" imageUrl={img}>
            <p>{" Pagamento de Boletos "}</p> 
           </Button>
           <Button className="btn-obj" imageUrl={img2} >
            <p>{" Transferências "}</p> 
           </Button>
           <Button className="btn-obj" imageUrl={img3} >
            <p>{" Depósitos "}</p> 
           </Button>
           <Button className="btn-obj" imageUrl={img4}>
             <p>{"Pagamento de Faturas - Cartão Black"}</p>
           </Button>
           <Button className="btn-obj" imageUrl={img5} >
             <p>{"Pagamento - Empréstimo"}</p>
           </Button>
      </div>
    </section>
);
}

export default Objetivos; 