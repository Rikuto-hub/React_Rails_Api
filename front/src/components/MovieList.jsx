import React from 'react';
import '../styles/Movie.css';

const MovieList = (props) => {
  const movie = props.movies.map((movie)=>{
  const url = 'https://www.youtube.com/embed/' + movie.id.videoId;
    console.log(props)
  return(
    <div className="iframe">
      <iframe title="ytmovie"
        id="ytplayer" 
        type="ytplayer" 
        width="480" 
        height="270"
        src={url}
        frameBorder="0"
      />
    </div>
  )
})

  return(
    <div key={movie.etag}>
      {movie}
    </div>
  )
}

export default MovieList;