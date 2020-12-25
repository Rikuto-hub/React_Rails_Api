import React from 'react';
import json from '../apis/json';
import { Link } from 'react-router-dom';

const ConnectionNew = () => {

  const postConnection = async() => {

    const url = document.getElementById('connectionUrl').value
    const content = document.getElementById('connectionContent').value
    let data = new FormData();
    data.append("article[url]", url);
    data.append("article[content]", content);
    try {
      await json.post('/connections', {
        connection: {url: url, content: content}
      },{ withCredentials: true })
    } catch (error) {
      window.alert('保存に失敗')
    }
  }

  return(
    <div className='connectionForm'>
      <form>
        <div className='connectionNew'>
          <label htmlFor="connectionUrl">URL</label>
          <input type="url" id="connectionUrl"/>
        </div>
        <div className='connectionNew'>
          <label htmlFor="connectionContent">説明</label>
          <input type="text" id="connectionContent"/>
        </div>
      </form>
      <Link to="/connection">
        <button type="submit" id="connectionSubmit" onClick={postConnection}>登録</button>
      </Link>
      <Link to="/connection" className='connectionRoot'>×</Link>
    </div>
  )
}

export default ConnectionNew;