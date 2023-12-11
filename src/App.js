import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Hero from './components/hero'
import  Navbar  from './components/navbar';
import Finalfooter from './components/footer';
import Vacancy from './components/vacancy';
import Detail from './components/Detail';

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Hero/>}/>
            <Route path='/job-vacancy' element={<Vacancy/>}/>
            <Route path='/job-vacancy/:Id' element={<Detail/>}/>
        </Routes>
        <Finalfooter/>
    </BrowserRouter>
    </>
  );
}

export default App;
