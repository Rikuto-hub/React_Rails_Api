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
      const results = await json.post('/connections', {
        connection: {url: url, content: content}
      })
      console.log( results );
    } catch (error) {
      window.alert('保存に失敗')
    }
  }

  return(
    <div className='connectionForm'>
      <form>
        <div className='connectionNew'>
          <input type="url" id="connectionUrl" placeholder="URL"/>
        </div>
        <div className='connectionNew'>
          <input type="text" id="connectionContent" placeholder="content"/>
        </div>
      </form>
      <Link to="/connection">
        <button type="submit" id="connectionSubmit" onClick={postConnection}>登録</button>
      </Link>
    </div>
  )
}

export default ConnectionNew;