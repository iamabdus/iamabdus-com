import React from 'react'
import withPageWrapper from '../components/PageWrapper'
import Layout from '../components/Layout'
import Tagline from '../components/Tagline'



const Contact = props => (
  <Layout {...props}>
    <div className="heading">
      <Tagline>contact</Tagline>
    </div>
  </Layout>
)

export default withPageWrapper(Contact)
