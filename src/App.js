import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Nabvar from './components/Navbar/Navbar';



function App() {
  return (
    <div className="App">
      <Nabvar/>
      <ItemListContainer titleSection="All products"/>
     
     
    </div>
  );
}

export default App;
