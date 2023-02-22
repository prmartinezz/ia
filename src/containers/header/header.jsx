import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Vamos construir algo incrível com ChatGPT-3 - OpenAI</h1>
      <p>ChatGPT é um protótipo de um chatbot com inteligência artificial desenvolvido pela OpenAI e especializado em diálogo. O chatbot é um modelo de linguagem ajustado com técnicas de aprendizado supervisionado e por reforço.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Seu endereço de email" />
        <button type="button">Começar</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt='people'/>
        <p>1.600 pessoas visitaram nas últimas 24 horas</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt='ai'/>
    </div>
  </div>
);

export default Header;