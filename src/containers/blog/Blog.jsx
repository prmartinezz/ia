import React from 'react';
import Article from '../../components/article/Article';
import './blog.css';

import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>Veja, <br /> Ultimas notícias.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'></div>
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog01} date="26 Fevereiro, 2023" text="GPT-3 e Open  são o futuro. vamos explorar suas funcionalidades!" />
        <Article imgUrl={blog02} date="26 Fevereiro, 2023" text="GPT-3 e Open  são o futuro. vamos explorar suas funcionalidades!" />
        <Article imgUrl={blog03} date="26 Fevereiro, 2023" text="GPT-3 e Open  são o futuro. vamos explorar suas funcionalidades!" />
        <Article imgUrl={blog04} date="26 Fevereiro, 2023" text="GPT-3 e Open  são o futuro. vamos explorar suas funcionalidades!" />
        <Article imgUrl={blog05} date="26 Fevereiro, 2023" text="GPT-3 e Open  são o futuro. vamos explorar suas funcionalidades!" />
      </div>
    </div>
  )
}

export default Blog;