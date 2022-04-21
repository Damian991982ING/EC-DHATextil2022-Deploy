
import './App.css';
import Greeting from './components/Greeting/Greeting';
import ItemCount from './components/ItemCount/ItemCount';
import ItemList from './components/ItemList/ItemList';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Nabvar from './components/Navbar/Navbar';



function App() {
  return (
    <div className="App">
      <Nabvar/>
      <ItemListContainer greeting="Hola soy un componente funcional desde una prop"/>
      <ItemCount initial={1} min={0} max={10} />
      <ItemList/>
      <Greeting greeting="Welcome to DHATextil's e-commerce"/>
     
    </div>
  );
}

export default App;
