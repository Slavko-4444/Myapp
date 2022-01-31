import Home from './Home';
import './nav.css';
import logo from './nav/images/logo_polj.png';
import Contact from './Contact';
import About from './About';
import Register from './Register';
import Login from './Login';
import Otkupnici from './Otkupnici';
import Otkupnik from './Otkupnik';
import { useState } from 'react';
import {Route, Routes, Link, useNavigate} from 'react-router-dom'

import React from 'react';

function App() {
  
  const id = null;
  return (
<div className="App">
<header className="App-header">
  <Link to='/'><img class="logo" src={logo} alt="logo"/></Link>
  <nav>
      <ul class="nav__links">
          <li><Link to='/'>Početna</Link></li>
          <li><Link to='/contact'>Kontakt</Link></li>
          <li><Link to='/about'>O nama</Link></li>
          <li><Link to='/otkupnici'>Otkpunici</Link></li>
      </ul>
  </nav>
  <div id='reglog'>
    {
      !id?
      (
        <>
          <Link class="cta" to="/login"><button>Prijava</button></Link>
          <Link class="cta" to="/register"><button>Registracija</button></Link>
        </>
      )
      :
      (
        <>
          <Link class="ctb" to="/profile"><button>Profil</button></Link>
          <Link class="ctc" to="/login"><button>Odjavi se</button></Link>
        </>
      )
    }
  </div>
  
</header>

<main>
  <Routes>
    <Route exact path='/' element={<Home/>}/>    
    <Route exact path='/contact' element={<Contact/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='/register' element={<Register/>}/>   
    <Route exact path='/login' element={<Login/>}/>  
    <Route exact path='/otkupnici' element={<Otkupnici/>}/>   
    <Route exact path="/otkupnik/:id" element={<Otkupnik/>}/>   
  </Routes>
</main>

<footer>
  <div class="footer-content">
      <h3>Poljoprivrednik.me</h3>
      <p>Posjetiti nasu facebook/instagram stranicu.
      </p>

      <ul class="socials">
          <li><a id="contacts" href="https://www.facebook.com/poljoprivrednikme"><i class="fa fa-facebook"></i></a></li>
          <li><a href="https://www.instagram.com/poljoprivrednikme/"><i class="fa fa-instagram"></i></a></li>
      </ul>
  </div>
  <div class="footer-bottom">
      <p>copyright &copy;2022 Poljoprivrednik.me. designed by <span>SCOM</span></p>
  </div>
</footer>

</div>
  );
}

export default App;
