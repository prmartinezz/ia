import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatgpt3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="O que é ChatGPT-3" text="..." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">As possibilidades estão além da sua imaginação</h1>
      <p>Explore a Biblioteca</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Ler mais..." />
      <Feature title="Base de conhecimento" text="Ler mais..." />
      <Feature title="Educação" text="Ler mais..." />
    </div>
  </div>
);

export default WhatGPT3;