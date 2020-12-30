import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ImageList from './ImageList';
import { CgSearchFound } from "react-icons/cg";
import '../styles/Search.css';

const Image = () => {

  const[word, setWord] = useState('drone');
  const[images,setImages] = useState([])

  const onSearchSubmit = (event) =>{
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

  useEffect(() => {
    document.getElementById('imageSearch').click();
  }, [])

  return(
    <>
      <form onSubmit={onSearchSubmit} className='search'>
        <p>画像検索</p>
        <input type="text" value={word} onChange={(event)=>{setWord(event.target.value)}}/>
        <p onClick={onSearchSubmit} className='imageSearch' id='imageSearch'><CgSearchFound /></p>
      </form>
      <ImageList images = {images} />
    </>
  )
}

export default Image;