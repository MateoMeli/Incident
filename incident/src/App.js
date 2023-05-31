import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import DetalleProducto from './Components/DetalleProducto/DetalleProducto';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter> 
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home greeting={'INCIDENT'}/>}/>        
        <Route exact path="/NavBar" element={<NavBar/>}/>        
        <Route exact path="/DetalleProducto" element={<DetalleProducto/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
