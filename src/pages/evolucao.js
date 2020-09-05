import React, {useState, useEffect} from 'react';
import { PieChart } from 'react-minimal-pie-chart';

function Evolucao() {
  const [active, setActive] = useState(true)
  
  const defaultLabelStyle = {
    fontSize: '15px',
    fontFamily: 'sans-serif',
  };

  return(
  <section>
    <h1>Página Evoluçao</h1>
    <div className="tabMenu">
      <button className={active ? "activeTab" : "tab"} onClick={()=> setActive(active => true)}>Meu BlackScore</button>
      <button className={!active ? "activeTab" : "tab"} onClick={()=>setActive(active => false)}>Resgate</button>
    </div> 
    {active ? 
    <div>
      <div>
      <PieChart
        data={[
          { title: 'One', value: 80, color: '#E38627' },
          { title: 'Two', value: 50, color: '#C13C37' },
          { title: 'Three', value: 120, color: '#6A2135' },
        ]}
        lengthAngle={-360} animate
        viewBoxSize={[200, 200]}
        lineWidth={55}
        label={({ dataEntry }) => dataEntry.value}
        labelStyle={{
          ...defaultLabelStyle,
        }}
        labelPosition={70}

        />
        grafico</div>
      <button>Mais info</button>
    </div>
    :
    <div>
      <p>Saldo de pontos</p>
      <button>Solicitar Crédito em Conta</button>
      <button>Solicitar Cartão de Crédito (ou aumento de limite)</button>
    </div>
    }
  
  </section>

  )
}


export default Evolucao;