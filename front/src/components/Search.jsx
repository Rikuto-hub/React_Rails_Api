import React, {useState} from 'react';
import '../styles/Search.css';

const Search = () => {

  const[word, setWord] = useState('');

  const onSearchSubmit= (event) =>{
    event.preventDefault()
    console.log(word)
  }

  return(
    <form onSubmit={onSearchSubmit} className='search'>
      <label htmlFor="">画像検索</label>
      <input type="text" value={word} onChange={(event)=>{setWord(event.target.value)}}/>
    </form>
  )

}

export default Search;