import React, { Component } from 'react'
import withPageWrapper from '../components/PageWrapper'
import Layout from '../components/Layout'
import Tagline from '../components/Tagline'


class Portfolio extends Component {
  constructor() {
    super()

    this.state = {
      isVisible: false,
    }
  }

  componentDidMount() {
    this.setState({ isVisible: true })
  }

  render() {
    return (
      <Layout {...this.props}>
        <div className="heading">
          <Tagline key="Tag">Portfolio</Tagline>
        </div>
      </Layout>
    )
  }
}

export default withPageWrapper(Portfolio)
