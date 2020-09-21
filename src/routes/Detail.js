import React from 'react'
import './Detail.css'
class Detail extends React.Component {
  componentDidMount () {
    const { location, history } = this.props
    if (location.state === undefined) {
      history.push('/')
    }
  }

  render () {
    const { location } = this.props
    if (location.state) {
      return (
        <div className='movie' >
          <div className='Detail__container'>
            <img
              src={location.state.poster}
              alt={location.state.title}
              title={location.state.title}
            />
            <h3 className='movie__title'>{location.state.title}</h3>
            <h3 className='movie__year'>{location.state.summary}</h3>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default Detail
