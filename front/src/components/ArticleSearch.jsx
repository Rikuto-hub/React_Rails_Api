import React, {useState} from 'react';
import { CgSearchFound } from "react-icons/cg";
import '../styles/Search.css';

const ArticleSearch = ({searchArticles}) => {

  const[word, setWord] = useState('');
  
  const onSearchSubmit= (event) =>{
    event.preventDefault()
    searchArticles(word)
  }

  return(
    <>
      <form className='search'>
        <input type="text" value={word} onChange={(event)=>{setWord(event.target.value)}}/>
        <p onClick={onSearchSubmit} className='imageSearch' id='imageSearch'><CgSearchFound /></p>
      </form>
    </>
  )
}

export default ArticleSearch;