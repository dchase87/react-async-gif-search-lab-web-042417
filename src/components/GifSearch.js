import React from 'react'

class GifSearch extends React.Component {
  constructor () {
    super()

    this.state = {
      gifs: [],
      value: ''
    }

    this.submitHandler = this.submitHandler.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  submitHandler(e) {
    this.props.getGifs(this.state.value)
    e.preventDefault()
    this.setState({ value: '' })
  }

  render () {
    return (
      <div className="gif-search">
        <form onSubmit={this.submitHandler}>
          <input type="text" name="search" value={this.state.value} onChange={this.handleChange} placeholder="Search"/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default GifSearch
