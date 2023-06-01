import './App.css';
import DetalleProducto from './Componentes/DetalleProducto';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import { useState } from 'react';

function App() {
  const [buttonText, setButtonText] = useState('Anashe')   
  return (
    <BrowserRouter>     
      <Header/>     
      <button onClick={()=>setButtonText(('Clickeaste'))}>{buttonText}</button>
      <Routes>        
        <Route exact path="/DetalleProducto" element={<DetalleProducto/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
