import React from 'react';
import '../styles/Movie.css';

const MovieList = (props) => {
  const movie = props.movies.map((movie)=>{
  const url = 'https://www.youtube.com/embed/' + movie.id.videoId;
    console.log(props)
  return(
    <div className="movieView">
      <iframe title="ytmovie"
        id="ytplayer" 
        type="ytplayer" 
        width="480" 
        height="270"
        src={url}
        frameBorder="0"
        key={movie.etag}
      />
    </div>
  )
})

  return(
    <div key={movie.id}>
      {movie}
    </div>
  )
}

export default MovieList;