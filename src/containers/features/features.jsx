import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Como funciona o Chat GPT-3',
    text: 'Veja mais...',
  },
  {
    title: 'Serviço',
    text: 'Veja mais...',
  },
  {
    title: 'Recursos',
    text: 'Veja mais...',
  },
  {
    title: 'Como usar o Chat GPT-3',
    text: 'Veja mais...',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">O Futuro é agora e você só precisa concretizá-lo. Entre no futuro hoje & Faça acontecer.</h1>
      <p>Solicite acesso antecipado para começar</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;