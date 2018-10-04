import React, {Component} from 'react'
import styled from 'styled-components'
// import { Link } from 'gatsby'
import posed, { PoseGroup } from 'react-pose'
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
    const { isVisible } = this.state
    return (
      <Layout>
 
          <div className="heading">
            <PoseGroup>
              {isVisible && [<Tagline key="Tag">Portfolio</Tagline>]}
              {isVisible && [<Tagline key="Tag1">Portfolio 2</Tagline>]}
              {isVisible && [<Tagline key="Tag2">Portfolio 4</Tagline>]}
            </PoseGroup>
          </div>
  
      </Layout>
    )
  }
}

export default Portfolio
