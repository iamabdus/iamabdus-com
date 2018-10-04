import React, {Component} from 'react'
import styled from 'styled-components'
import media from '../components/utility/media'
import SplitText from 'react-pose-text'


const StyledTitle = styled(SplitText)`
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

const charPoses = {
  first: { opacity: 0 },
  middle: {
    opacity: 1,
    delay: ({ charIndex }) => charIndex * 100,
  },
}
const charPosesNew = {
  middle: { opacity: 1 },
  last: {
    opacity: 0,
    delay: ({ charIndex, numChars }) => {
      return (numChars - charIndex) * 100
    },
  },
}

class Title extends Component {
  state = {
    isFirst: true,
    text: 'React Text',
    count: 1,
  }

  FireMe = () => {
    if (this.state.count < this.state.text.length - 1) {
      this.setState(prevState => {
        return {
          count: prevState.count + 1,
        }
      })
    } else {
      this.setState({ isFirst: false })
    }
  }
  render() {
    return (
      <div>
        {this.state.isFirst ? (
          <StyledTitle
            key={'splittext' + this.state.isFirst}
            onPoseComplete={() => this.FireMe()}
            initialPose="first"
            pose="middle"
            charPoses={charPoses}
          >
            {this.state.text}
          </StyledTitle>
        ) : (
          <StyledTitle
            key={'splittext' + this.state.isFirst}
            initialPose="middle"
            pose="last"
            charPoses={charPosesNew}
          >
            {this.state.text}
          </StyledTitle>
        )}
      </div>
    )
  }
}

export default Title
