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
      const response = await json.post('/articles', data, {
        headers: {"content-type": "multipart/form-data"},
      }) 
      console.log( response );
    } catch (error) {
      window.alert('保存に失敗')
    }
  }

  return(
    <div className='articleForm'>
      <form>
        <div className='articleNew'>
          <input type="text" id="articleName" placeholder="Name"/>
        </div>
        <div className='articleNew'>
          <input type="number" id="articlePrice" placeholder="Price"/>
        </div>
        <div className='articleNew'>
          <input type="file" id="articleImage" className='articleFile'/>
          <div className='imageIcon' onClick={fileClick} ><AiFillFileImage /></div>
        </div>
        <div className='articleNew'>
          <textarea id="articleContent" cols="40" rows="5" placeholder="content"></textarea>
        </div>
      </form>
      <button type="submit" id="articleSubmit" className="articleBtn" onClick={postArticle}>
        <Link to="/">登録</Link>
      </button>
    </div>
  )
}

export default ArticleNew;