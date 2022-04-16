
import './App.css';
import ItemList from './components/ItemList.js/ItemList';
import Nabvar from './components/Navbar/Navbar';



function App() {
  return (
    <div className="App">
      <Nabvar/>
      <ItemList greeting="Hola soy un componente funcional desde una prop"/>
     
    </div>
  );
}

export default App;
