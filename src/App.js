//import './css/style.css';
import './index.css';
//import img1 from './assets/img/Viaje Globos.jpg';
import "bootstrap/dist/css/bootstrap.min.css"; 
import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import Cards from './componentes/Card/Card';


function App() {
  return (
    <div className="App">
      <Header />
      <Cards img="https://picsum.photos/700/400?random=1"  name="Oceano"  descripcion="Agua" />
      <Cards img="https://picsum.photos/700/400?random=2" name="Montaña" descripcion="Aire"  />
      <Cards img="https://picsum.photos/700/400?random=5" name="Ciudad" descripcion="Tierra" />               
      <Footer />
    </div>
  );
}

export default App;
