import React from 'react'

const GifList = (props) => {
  return (
    <ul className="gif-list">
      {props.gifs.map(gif => <li key={gif.images.fixed_height.url}><img src={gif.images.fixed_height.url} /></li>)}
    </ul>
  )
}

export default GifList
