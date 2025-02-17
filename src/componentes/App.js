import '../css/App.css';
import React from 'react';
import Navegacion from './Navegacion';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import Boton from './Boton';
import Error from './Error';
import Home from './Home';
import Formulario from './Formulario';
import Personajes from './Personajes';
import Login from './Login';
import Admin from './Admin';
import Usuarios from './Usuarios';

function App() {

  //JSX
  return (
    <>
      <Navegacion />

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/boton' element={<Boton />} />
        <Route path='/formulario' element={<Formulario />} />
        <Route path='/personajes' element={<Personajes />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/usuarios' element={<Usuarios />} />
        <Route path='*' element={<Error />} /> 
      </Routes>

      <Footer />
    </>

  );
}


export default App;//Main
