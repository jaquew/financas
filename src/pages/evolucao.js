import React, {useState, useEffect} from 'react';
import { PieChart } from 'react-minimal-pie-chart';

function Evolucao() {
  const [active, setActive] = useState(true)
  
  const bdMock = [
    { title: 'Pagamento de Contas', value: 80, color: '#E38627' },
    { title: 'Depósitos', value: 350, color: '#C13C37' },
    { title: 'Pagamento Fatura Black', value: 120, color: '#6A2135' },
  ];
  const defaultLabelStyle = {
    fontSize: '10px',
    fontFamily: 'sans-serif',
  };
  const saldo = () => {
     let soma = 0;
     bdMock.forEach(data => (
      soma = soma + data.value
     ))
     return soma
  }

  return(
  <section>
    <h1>Página Evoluçao</h1>
    <div className="tabMenu">
      <button className={active ? "activeTab" : "tab"} onClick={()=> setActive(active => true)}>Meu BlackScore</button>
      <button className={!active ? "activeTab" : "tab"} onClick={()=>setActive(active => false)}>Resgate</button>
    </div> 
    {active ? 
    <div className="container"> 
      <div className="graph-area">
      <PieChart
        data= {bdMock}
        lengthAngle={-360} animate
        style={{ height: '150px', width: '50%' }}
        lineWidth={55}
        label={({ dataEntry }) => dataEntry.value}
        labelStyle={{
          ...defaultLabelStyle,
        }}
        labelPosition={70}

        />
        <aside className="label">
        {bdMock.map(data => ( 
          <div key={data.color}>
            <span className="valor">{data.value}</span> {data.title}
          </div>
        ))}
        </aside>
        </div>
       <h2>Total: {saldo()}</h2>
        
      <button>Mais informações sobre a análise de crédito</button>
    </div>
    :
    <div className="regate">
      <h3>Saldo de pontos</h3>
      <p className="saldo">{saldo()}</p>
      {saldo() >=500 ? 
      <p>Seu crédito pré-aprovado é de <b>R$ {saldo()*4},00</b></p>
      :
      <p>Você ainda não tem cŕedito pré-aprovado</p>
      }
      <button className='btn-resgate'>Solicitar Crédito em Conta</button>
      <button className='btn-resgate'>Solicitar Cartão de Crédito </button>
      <button className='btn-resgate'> Solicitar Aumento de Limite</button>
    </div>
    }
  
  </section>

  )
}


export default Evolucao;