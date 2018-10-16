import React, { Component } from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import theme from '../components/utility/theme'
import Tagline from '../components/Tagline'
import Title from '../components/Title'
import Form from '../components/Form'

const Container = styled.div``

const StyledHeader = styled.div`
  width: 100%;
`

const PosedText = posed.p({
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      opacity: { ease: 'easeOut', duration: 200, delay: 400 },
      x: { ease: 'easeOut', duration: 500, delay: 400 },
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

const StyledText = styled(PosedText)`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.71;
  letter-spacing: 2.8px;
  text-align: left;
  color: ${theme.secondary};
  margin-top: 15px;
  & a {
    color: #fff;
  }
`

const PosedContactContainer = posed.div({
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
      opacity: { ease: 'easeIn', duration: 300 },
      x: { ease: 'easeIn', duration: 500 },
    },
  },
})

const StyledContactContainer = styled(PosedContactContainer)`
  margin-top: 104px;
  color: #fff;
`

class Portfolio extends Component {
  render() {
    const { isFirstLoad, timingOffset, ...rest } = this.props
    return (
      <Container>
        <StyledHeader>
          <Tagline initialPose="exit" pose="enter">
            Portfolio
          </Tagline>
          <Title initialPose="exit" pose="enter">
            Want to talk about your project?
          </Title>
          <StyledText>
            You can email me at{' '}
            <a href="mailto:hello@iamabdus.com">hello@iamabdus.com</a> or submit
            this form:
          </StyledText>
        </StyledHeader>
        <StyledContactContainer initialPose="exit" pose="enter">
          <Form />
        </StyledContactContainer>
      </Container>
    )
  }
}

export default Portfolio
