import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Esteja um passo a frente no futuro</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Solicitar acesso antecipado</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>GPT-3 2023, <br /> Todos os direitos reservados.</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Mídia social</p>
        <p>Contadores</p>
        <p>Contato</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Empresa</h4>
        <p>Termos e Condições</p>
        <p>Política de Privacidade</p>
        <p>Contato</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Entrar em contato</h4>
        <p>GPT</p>
        <p>0000-000</p>
        <p>inicie@gpt-3.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 GPT-3. Todos os direitos reservados.</p>
    </div>
  </div>
);

export default Footer;