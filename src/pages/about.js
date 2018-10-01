import React from 'react'

import { Link } from 'gatsby'

import Layout from '../components/layout'


const AboutPage = (props) => (
  <Layout {...props}>
    <h1>About Page</h1>
    <p>Now go build something great.</p>
    <Link to="/">Home</Link>
    <Link to="/portfolio/">Portfolio</Link>
    <Link to="/blog/">Blog</Link>
    <Link to="/contact/">Contact</Link>
  </Layout>
)

export default AboutPage