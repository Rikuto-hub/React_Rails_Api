import React from 'react';
import json from '../apis/json';
import { Link } from 'react-router-dom';
import { AiFillFileImage } from "react-icons/ai";
import '../styles/ArticleNew.css';

const ArticleNew = () =>{

  const fileClick = () => {
    document.getElementById('articleImage').click()
  }

  const postArticle = async() => {
    const name = document.getElementById('articleName').value
    const price = document.getElementById('articlePrice').value
    const content = document.getElementById('articleContent').value
    const img = document.getElementById('articleImage').files[0]
    let data = new FormData();
    data.append("article[image]", img);
    data.append("article[name]", name);
    data.append("article[price]", price);
    data.append("article[content]", content);

    try {
      const results = await json.post('/articles', data, {
        headers: {"content-type": "multipart/form-data"},
      }) 
      console.log( results );
    } catch (error) {
      window.alert('保存に失敗')
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
          <input type="file" id="articleImage" className='articleFile'/>
          <div className='imageIcon' onClick={fileClick} ><AiFillFileImage /></div>
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