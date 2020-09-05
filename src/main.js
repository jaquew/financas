import Inicio from './pages/home.js';
import Evolucao from './pages/evolucao.js';
function locationHashChanged() {
    if (location.hash==='#home' || location.hash==='') {      
      document.querySelector('main').innerHTML = Inicio();

    } else if(location.hash==='#evolucao') {
      document.querySelector('main').innerHTML = Evolucao();
    }
}
window.addEventListener('hashchange', locationHashChanged, false);
window.addEventListener('load', locationHashChanged, false);