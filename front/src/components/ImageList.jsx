import React from 'react';

const ImageList = (props) => {
  console.log(props)
  const images = props.images.map((image)=>{
    return(
      <a href={image.pageURL} key={image.id} target="_Blank" rel="noopener noreferrer">
        <img src={image.webformatURL} alt={image.tags}/>
      </a>
    )
  })

  return(
    <>
      <div className='search'>
        {images}
        <p></p>
      </div>
    </>
  )
}

export default ImageList;