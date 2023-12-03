import './App.css'
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import CreateDriver from './components/CreateDriver/CreateDriver';
import {useState} from 'react';

function App() {
   return (
     <div>
      <Router>
          <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/driver/:idDriver' element={<Detail/>}/>
            <Route path='/createDriver' element={<CreateDriver/>}/>
          </Routes>
      </Router>
     </div>
   );
 };
 
 export default App

  