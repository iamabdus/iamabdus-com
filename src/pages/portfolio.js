import React, { Component } from 'react'
import Tagline from '../components/Tagline'

class Portfolio extends Component {
  render() {
    return (
      <>
        <div className="heading">
          <Tagline key="Tag" initialPose="exit" pose="enter">Portfolio</Tagline>
        </div>
      </>
    )
  }
}

export default Portfolio
