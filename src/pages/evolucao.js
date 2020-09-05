import React, {useState, useEffect} from 'react';

function Evolucao() {
  const [active, setActive] = useState(true)


  return(
  <section>
    <h1>Página Evoluçao</h1>
    <div className="tabMenu">
      <button className={active ? "activeTab" : "tab"} onClick={()=> setActive(active => !active)}>Gráfico</button>
      <button className={!active ? "activeTab" : "tab"} onClick={()=>setActive(active => !active)}>Resgate</button>
    </div> 
    {active ? 
    <p>oi</p>
    :
    <p>tchau</p>}
  
  </section>

  )
}


export default Evolucao;