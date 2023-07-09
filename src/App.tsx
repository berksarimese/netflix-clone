import React from 'react';
import './App.css';
import Landingpage from './pages/Landingpage';
import Signin from './pages/Signin';
import Browse from './pages/Browse';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='d-flex'>
      <Routes>
        <Route path='/' Component={Landingpage}/>
        <Route path='/signin' Component={Signin}/>
        <Route path='/browse' Component={Browse}/>
      </Routes>
    </div>
  );
}

export default App;
