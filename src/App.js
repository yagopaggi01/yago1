import './App.css';
import NavBar from './componentes/NaBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
          <NavBar/>
          <ItemListContainer greeting={"Bienvenidos"}/>
    </div>
  );
}

export default App;
