import React, { Component } from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import media from '../components/utility/media'
import theme from '../components/utility/theme'
import Tagline from '../components/Tagline'
import Text from '../components/Text'
import CustomFooterNav from '../components/CustomFooterNav'

const Header = styled.div`
  width: 771px;
  font-family: ${theme.tit};
  font-size: 48px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: 2.4px;
  text-align: left;
  color: var(--white);
`

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

class Portfolio extends Component {
  render() {
    const { isFirstLoad, timingOffset, ...rest } = this.props
    return (
      <>
        <div className="heading">
          <Tagline initialPose="exit" pose="enter">
            i am abdus
          </Tagline>
        </div>
        <Content>
          <PosedFeatures initialPose="exit" pose="enter">
            <Text>Father of two boys</Text>
            <Text>Husband of a talent lady</Text>
            <Text>Founder of TAF Technology</Text>
            <Text>Promoting FreeCodeCamp Rajshahi</Text>
            <Text>Learning new technologies everyday</Text>
          </PosedFeatures>
        </Content>
        <PosedFooter className="footer" initialPose="exit" pose="enter">
          <CustomFooterNav {...rest} />
        </PosedFooter>
      </>
    )
  }
}

export default Portfolio
