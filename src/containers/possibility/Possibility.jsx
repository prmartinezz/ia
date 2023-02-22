import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt='possibility'/>
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Solicite acesso antecipado para começar</h4>
        <h1 className='gradient__text'>As possibilidades são <br /> Além da sua imaginação</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, hic ratione. Illum nam, perspiciatis voluptas, nisi soluta praesentium natus dolorum libero tenetur sed perferendis maxime commodi ducimus veniam neque molestias?</p>
        <h4>Solicite acesso antecipado para começar</h4>
      </div>
    </div>
  )
}

export default Possibility;