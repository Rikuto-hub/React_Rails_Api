import React from 'react';

const MovieList = (props) => {
  const movie = props.movies.map((movie)=>{
  const url = 'https://www.youtube.com/embed/' + movie.id.videoId;
  return(
    <div className="movieView" key={movie.id.videoId}>
      <iframe title="ytmovie"
        id="ytplayer" 
        type="ytplayer" 
        width="480" 
        height="270"
        src={url}
        frameBorder="0"
        key={movie.id.videoId}
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