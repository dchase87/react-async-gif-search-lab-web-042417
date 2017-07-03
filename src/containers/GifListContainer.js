import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {
  constructor () {
    super()

    this.state = {
      gifList: []
    }

    this.getGifs = this.getGifs.bind(this)
}

  getGifs(input) {
    fetch(this.props.baseUrl + input + this.props.apiKey)
      .then(resp => resp.json())
      .then(gifs => this.setState({ gifList: gifs["data"].slice(0, 3) }))
  }

  render () {
    return (
      <div>
        <GifSearch getGifs={this.getGifs} />
        <GifList gifs={this.state.gifList} />
      </div>
    )
  }
}
