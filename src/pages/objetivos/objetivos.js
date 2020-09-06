import React  from "react";
import Button from "../../components/button/button.js";
import Header from "../../components/header/header.js";
import "./styles.css";

function Objetivos(){



return(
    <section>
      <Header/>
        <div className="Objetivos">
           <Button className="btn-obj" >
             {" Pagamento de Boletos "}
           </Button>
           <Button className="btn-obj" >
             {" Transferências "}
           </Button>
           <Button className="btn-obj" >
             {" Depósitos "}
           </Button>
           <Button className="pbtn-obj" >
             {" Pagamento de Faturas - Cartão Black "}
           </Button>
           <Button className="btn-obj" >
             {" Pagamento do Emprestimo "}
           </Button>
      </div>
    </section>
);
}

export default Objetivos; 