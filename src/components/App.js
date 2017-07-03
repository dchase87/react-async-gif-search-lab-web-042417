import React from 'react'
import GifListContainer from '../containers/GifListContainer'
import NavBar from './NavBar'

// the App component should render out the GifListContainer component

function App() {
  return (
    <div>
        <NavBar color='black' title="Giphy Search" />
        <GifListContainer apiKey='&api_key=dc6zaTOxFJmzC' baseUrl='http://api.giphy.com/v1/gifs/search?q=' />
    </div>
  )
}

export default App
