import React, {useState} from 'react';
import axios from 'axios';
import ImageList from './ImageList';
import '../styles/Search.css';

const Search = () => {

  const[word, setWord] = useState('');
  const[images,setImages] = useState([])

  const onSearchSubmit= (event) =>{
    event.preventDefault()
    const onWordSubmit = async(word) => {
      try {
        const params = {
          key: process.env.REACT_APP_PIXABAY_KEY,
          q:  word
        };
        const response = await axios.get("https://pixabay.com/api/",{params})
        setImages(response.data.hits)
        if(response.data.total===0){
          window.alert("画像はありません")
        }
      } catch (error) {
        window.alert("画像の取得に失敗")
      }
    }
    onWordSubmit(word)
  }

  return(
    <>
      <form onSubmit={onSearchSubmit} className='search'>
        <label htmlFor="">画像検索</label>
        <input type="text" value={word} onChange={(event)=>{setWord(event.target.value)}}/>
      </form>
      <ImageList images = {images} />
    </>
  )

}

export default Search;