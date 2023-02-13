import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3__navbar'>
        <div className='gpt3__navbar-links'>
            <div className='gpt3__navbar-links_logo'>
              <img src={logo} alt="logo" />
            </div>
              <div className='gpt3__navbar-links_container'>
              <p><a href='#home'>Início</a></p>
              <p><a href='#wgpt3'>O que é ChatGPT?</a></p>
              <p><a href='#possibility'>IA Aberta</a></p>
              <p><a href='#features'>Casos de Estudos</a></p>
              <p><a href='#blog'>Biblioteca</a></p>
            </div>
        </div>
        <div className='gpt3__navbar-sign'>
          <p>Entrar</p>
          <button type='button'>Inscrever-se</button>
        </div>
        <div className='gpt3__navbar_menu'>
          {toggleMenu
           ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
           : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
              <p><a href='#home'>Início</a></p>
              <p><a href='#wgpt3'>O que é ChatGPT?</a></p>
              <p><a href='#possibility'>IA Aberta</a></p>
              <p><a href='#features'>Casos de Estudos</a></p>
              <p><a href='#blog'>Biblioteca</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Entrar</p>
            <button type="button">Inscrever-se</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};
export default Navbar