import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">    
    <NavBar/>
    <ItemListContainer greeting={'Saludos desde Incident'}/>
    </div>
  );
}

export default App;