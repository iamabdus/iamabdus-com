import React, { Component } from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import Fade from 'react-reveal/Fade'
import media from '../components/utility/media'
import theme from '../components/utility/theme'
import Tagline from '../components/Tagline'
import Title from '../components/Title'
import ImgIpad from '../images/portfolio/ipad.png'
import Imglaptop from '../images/portfolio/Laptop.png'

const Container = styled.div``

const StyledHeader = styled.div`
  width: 100%;
`

const PosedPortfolioContainer = posed.div({
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

const PortfolioContainer = styled(PosedPortfolioContainer)`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  margin-top: 100px;
`

const PortfolioItem = styled.div`
  height: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 50px;
`
const PortfolioItemEven = styled.div`
  height: 400px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 50px;
`

const PortfolioText = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  padding: 20px;
`

const PortfolioImage = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`

const PortfolioSerial = styled.div`
  opacity: 0.1;
  font-size: 70px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: 14px;
  color: #fff;
  margin-bottom: 20px;
`

const PortfolioTitle = styled.div`
  font-size: 30px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: 1.5px;
  color: #fff;
  margin-bottom: 10px;
`

const PortfolioDescription = styled.div`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.71;
  letter-spacing: 2.8px;
  color: ${theme.secondary};
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
            Some recent projects from over 8 years of digital innovation
          </Title>
        </StyledHeader>
        <PortfolioContainer initialPose="exit" pose="enter">
          <Fade>
            <PortfolioItem>
              <PortfolioText>
                <PortfolioSerial>01</PortfolioSerial>
                <PortfolioTitle>Sleek Dashboard</PortfolioTitle>
                <PortfolioDescription>
                  An open source dashboard template built on Bootstrap 4.
                </PortfolioDescription>
              </PortfolioText>
              <PortfolioImage>
                <img src={ImgIpad} />
              </PortfolioImage>
            </PortfolioItem>
          </Fade>

          <Fade>
            <PortfolioItemEven>
              <PortfolioText>
                <PortfolioSerial>02</PortfolioSerial>
                <PortfolioTitle>Angel WP</PortfolioTitle>
                <PortfolioDescription>
                  An open source wordpress template built on Bootstrap 4.
                </PortfolioDescription>
              </PortfolioText>
              <PortfolioImage>
                <img src={Imglaptop} />
              </PortfolioImage>
            </PortfolioItemEven>
          </Fade>
          <Fade>
            <PortfolioItem>
              <PortfolioText>
                <PortfolioSerial>01</PortfolioSerial>
                <PortfolioTitle>Sleek Dashboard</PortfolioTitle>
                <PortfolioDescription>
                  An open source dashboard template built on Bootstrap 4.
                </PortfolioDescription>
              </PortfolioText>
              <PortfolioImage>
                <img src={ImgIpad} />
              </PortfolioImage>
            </PortfolioItem>
          </Fade>

          <Fade>
            <PortfolioItemEven>
              <PortfolioText>
                <PortfolioSerial>02</PortfolioSerial>
                <PortfolioTitle>Angel WP</PortfolioTitle>
                <PortfolioDescription>
                  An open source wordpress template built on Bootstrap 4.
                </PortfolioDescription>
              </PortfolioText>
              <PortfolioImage>
                <img src={Imglaptop} />
              </PortfolioImage>
            </PortfolioItemEven>
          </Fade>
          <Fade>
            <PortfolioItem>
              <PortfolioText>
                <PortfolioSerial>01</PortfolioSerial>
                <PortfolioTitle>Sleek Dashboard</PortfolioTitle>
                <PortfolioDescription>
                  An open source dashboard template built on Bootstrap 4.
                </PortfolioDescription>
              </PortfolioText>
              <PortfolioImage>
                <img src={ImgIpad} />
              </PortfolioImage>
            </PortfolioItem>
          </Fade>

          <Fade>
            <PortfolioItemEven>
              <PortfolioText>
                <PortfolioSerial>02</PortfolioSerial>
                <PortfolioTitle>Angel WP</PortfolioTitle>
                <PortfolioDescription>
                  An open source wordpress template built on Bootstrap 4.
                </PortfolioDescription>
              </PortfolioText>
              <PortfolioImage>
                <img src={Imglaptop} />
              </PortfolioImage>
            </PortfolioItemEven>
          </Fade>
        </PortfolioContainer>
      </Container>
    )
  }
}

export default Portfolio
