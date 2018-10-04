import React from 'react'
import styled from 'styled-components'
// import { Link } from 'gatsby'
import media from '../components/utility/media'
import Layout from '../components/Layout'
import Tagline from '../components/Tagline'

const Title = styled.h1`
  font-family: 'Abril Fatface', cursive;
    font-size: 36px;
    font-weight: normal;
    font-style: normal;
    line-height: 1;
    color: #ffffff;
    margin: 0;
    line-height: 1.83;
    letter-spacing: 3.6px;
    @media(min-width: ${media.md}){
      font-size: 60px;
      letter-spacing: 6px;
    }
    @media(min-width: ${media.xl}){
      font-size: 105px;
      font-size: 105px;
      line-height: 1.04;
      letter-spacing: 10.5px;
    }
  }
`

const Contact = props => (
  <Layout>
    <div className="heading">
      <Tagline>contact</Tagline>
      <Title>Contact</Title>
    </div>
  </Layout>
)

export default Contact
