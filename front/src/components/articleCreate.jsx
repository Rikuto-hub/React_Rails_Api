import React, {useEffect, useState} from 'react';
import json from '../apis/json';

const ArticleCreate = ({}) =>{
  const [name, titleArticle] = useState("");
  const [price, numberArticle] = useState("");
  const [content, contentArticle] = useState("");
  // useEffect(() => {
  // }, [])

  const postArticle = async() => {
    try {
      titleArticle(document.getElementById('articleName').value)
      numberArticle(document.getElementById('articlePrice').value)
      contentArticle(document.getElementById('articleContent').value)
      
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
        <input type="text" id="articleName"/>
        <input type="number" id="articlePrice"/>
        <textarea id="articleContent" cols="30" rows="10" placeholder="詳細"></textarea>
      </form>
      <button type="submit" id="articleSubmit" onClick={postArticle}>登録</button>
    </>
  )
}

export default ArticleCreate;