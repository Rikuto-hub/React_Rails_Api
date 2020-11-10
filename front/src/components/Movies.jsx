import React, {useState} from 'react';
import axios from 'axios';

const Movies = () => {

  const[word, setWord] = useState('');
  const[movies,setMovies] = useState([])

  const onSearchSubmit= (event) =>{
    event.preventDefault()
    const onWordSubmit = async(word) => {
      try {
        const params = {
          key: process.env.REACT_APP_YOUTUBE_API_KEY,
          q:  word,
          type: "video",
          maxResults: "5"
        };
        const response = await axios.get("https://www.googleapis.com/youtube/v3/search",{params})
        console.log(response)
        setMovies(response.data.kind)
        if(response.data.items===0){
          window.alert("動画はありません")
        }
      } catch (error) {
        window.alert("動画の取得に失敗")
      }
    }
    onWordSubmit(word)
  }
  https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${keyword}&maxResults=3&key=${YOUTUBE_API_KEY}
  return(
    <>
      <form onSubmit={onSearchSubmit} className='search'>
        <label htmlFor="">動画検索</label>
        <input type="text" value={word} onChange={(event)=>{setWord(event.target.value)}}/>
      </form>
    </>
  )

}

export default Movies;