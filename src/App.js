import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"; 
import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import Cards from './componentes/Card/Card';


function App() {
  return (
    <div className="App">
      <Header />
      <Cards img="https://picsum.photos/700/400?Sky=5"  name="Oceano"  descripcion="Agua" />
      <Cards img="https://picsum.photos/700/400?Sky=20" name="Montaña" descripcion="Aire"  />
      <Cards img="https://picsum.photos/700/400?grayscale=5" name="Bosque" descripcion="Tierra" />               
      <Footer />
    </div>
  );
}

export default App;
