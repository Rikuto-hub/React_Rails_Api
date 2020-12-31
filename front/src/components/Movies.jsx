import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MovieList from './MovieList';
import { CgSearchFound } from "react-icons/cg";
import { ImYoutube2 } from "react-icons/im";
import '../styles/Movie.css';

const Movies = () => {

  const[word, setWord] = useState('drone');
  const[movies,setMovies] = useState([])

  const onSearchSubmit= (event) =>{
    event.preventDefault()
    const onWordSubmit = async(word) => {
      try {
        const params = {
          key: process.env.REACT_APP_YOUTUBE_API_KEY,
          q:  word,
          type: "video",
          maxResults: "3"
        };
        const response = await axios.get("https://www.googleapis.com/youtube/v3/search",{params})
        console.log(response)
        setMovies(response.data.items)
        if(response.data.items===0){
          window.alert("動画はありません")
        }
      } catch (error) {
        window.alert("動画の取得に失敗")
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
        <div className='ytIcon'>
        <p htmlFor="" className='ytIcon'><ImYoutube2 /></p>
        </div>
        <div className='searchContainer'>
          <input type="text" value={word} onChange={(event)=>{setWord(event.target.value)}}/>
          <p onClick={onSearchSubmit} className='imageSearch' id='imageSearch'><CgSearchFound /></p>
        </div>
      </form>
      <MovieList movies = {movies} />
    </>
  )
}

export default Movies;