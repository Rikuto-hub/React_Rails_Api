import React, {useEffect, useState} from 'react';
import json from '../apis/json';
import { Link } from 'react-router-dom';
import '../styles/ArticleNew.css';

const ArticleNew = ({}) =>{

  const postArticle = async() => {
    const name = document.getElementById('articleName').value
    const price = document.getElementById('articlePrice').value
    const content = document.getElementById('articleContent').value

    try {
      await json.post('/articles', {
        article: {name: name, price: price, content: content}
      }) 
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <>
      <form>
        <div className='articleNew'>
          <label htmlFor="articleName">Name</label>
          <input type="text" id="articleName"/>
        </div>
        <div className='articleNew'>
          <label htmlFor="articlePrice">Price</label>
          <input type="number" id="articlePrice"/>
        </div>
        <div className='articleNew'>
          <textarea id="articleContent" cols="40" rows="5" placeholder="詳細"></textarea>
        </div>
      </form>
      <Link to="/">
      <button type="submit" id="articleSubmit" className="articleBtn" onClick={postArticle}>登録</button>
      </Link>
    </>
  )
}

export default ArticleNew;