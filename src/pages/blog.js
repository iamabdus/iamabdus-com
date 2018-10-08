import React from 'react'
import withPageWrapper from '../components/PageWrapper'
import Layout from '../components/Layout'
import Tagline from '../components/Tagline'

const Blog = props => (
  <Layout {...props}>
    <div className="heading">
      <Tagline>blog</Tagline>
    </div>
  </Layout>
)

export default withPageWrapper(Blog)
