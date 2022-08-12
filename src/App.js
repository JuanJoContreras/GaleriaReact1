import './css/style.css';
/*import img1 from './assets/img/img/Mar Gaviota.jpg';*/
import "bootstrap/dist/css/bootstrap.min.css"; 
import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import Cards from './componentes/Card/Card';


function App() {
  return (
    <div className="all">
      <Header />
      <Cards
            img="https://www.pexels.com/es-es/foto/mar-naturaleza-cielo-pajaro-9365642/"
            name="Mar"
            descripcion="Agua"
      />
      <Cards
            img="https://www.pexels.com/es-es/foto/resfriado-glaciar-nieve-paisaje-11545053/"
            name="Montaña"
            descripcion="Tierra"
      />
      <Cards
            img="https://www.pexels.com/es-es/foto/montanas-volador-desierto-esteril-13010671/"
            name="Globos"
            descripcion="Aire"
      />               
      <Footer />
    </div>
  );
}

export default App;
