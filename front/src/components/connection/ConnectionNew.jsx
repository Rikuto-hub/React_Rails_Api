import React from 'react';
import json from '../../apis/json';
import { useHistory } from 'react-router-dom';

const ConnectionNew = () => {

  const history = useHistory();

  const postConnection = async() => {

    const url = document.getElementById('connectionUrl').value
    const content = document.getElementById('connectionContent').value
    const tag = document.getElementById('connectionTag').value
    let data = new FormData();
    data.append("article[url]", url);
    data.append("article[content]", content);
    data.append("article[tag]", tag);
    try {
      const response = await json.post('/connections', {
        connection: {url: url, content: content, tag: tag}
      })
      if (response.data.status === 'ok'){
        history.push("/connection");
      }
      console.log( response );
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
        <div className='connectionNew'>
          <input type="text" id="connectionTag" placeholder="tag"/>
        </div>
      </form>
      <button type="submit" id="connectionSubmit" onClick={postConnection}>
        登録
      </button>
    </div>
  )
}

export default ConnectionNew;