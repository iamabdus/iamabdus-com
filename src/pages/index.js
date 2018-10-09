import React, { Component } from 'react'
import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose'
import withPageWrapper from '../components/PageWrapper'
import media from '../components/utility/media'
import Layout from '../components/Layout'
import Tagline from '../components/Tagline'
import Title from '../components/Title'
import Text from '../components/Text'
import CustomFooterNav from '../components/CustomFooterNav'

const titles = ['UX-Designer', 'UI-Designer', 'Enterpreneur']

const Content = styled.div`
  display: flex;
  align-items: stretch;
  flex: 1 1 auto;
  flex-direction: column;
`

const Features = styled.div`
  padding-top: 110px;
  @media (min-width: ${media.xl}) {
    padding-top: 166px;
  }
`

const PosedFeatures = posed(Features)({
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      opacity: { ease: 'easeOut', duration: 200, delay: 350 },
      x: { ease: 'easeOut', duration: 500, delay: 350 },
    },
  },
  exit: {
    x: -25,
    opacity: 0,
    transition: {
      opacity: { ease: 'easeIn', duration: 300 },
      x: { ease: 'easeIn', duration: 500 },
    },
  },
})

const PosedFooter = posed.div({
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      opacity: { ease: 'easeOut', duration: 200, delay: 550 },
      x: { ease: 'easeOut', duration: 500, delay: 550 },
    },
  },
  exit: {
    x: -25,
    opacity: 0,
    transition: {
      opacity: { ease: 'easeIn', duration: 200 },
      x: { ease: 'easeIn', duration: 500 },
    },
  },
})

class IndexPage extends Component {
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
    const { isfirstLoad, timingOffset } = this.props
    const { isVisible } = this.state
    return (
      <Layout {...this.props}>
        <Content>
          <div className="heading">
            <Tagline>i am abdus</Tagline>
            <PoseGroup>
              {isVisible && [
                <Title
                  key="title"
                  customDelay={isfirstLoad ? timingOffset + 200 : 200}
                  titles={titles}
                />,
              ]}
            </PoseGroup>
          </div>

          <PosedFeatures>
            <Text>Father of two boys</Text>
            <Text>Husband of a talent lady</Text>
            <Text>Founder of TAF Technology</Text>
            <Text>Promoting FreeCodeCamp Rajshahi</Text>
            <Text>Learning new technologies everyday</Text>
          </PosedFeatures>
        </Content>
        <PosedFooter className="footer" initialPose="exit" pose="enter">
          <CustomFooterNav />
        </PosedFooter>
        ,
      </Layout>
    )
  }
}

export default withPageWrapper(IndexPage)
