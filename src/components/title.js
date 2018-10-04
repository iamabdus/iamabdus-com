import React, { Component } from 'react'
import styled from 'styled-components'
import media from './utility/media'
import SplitText from 'react-pose-text'

const StyledTitle = styled(SplitText)`
    font-family: 'Abril Fatface', cursive;
      font-size: 36px;
      font-weight: normal;
      font-style: normal;
      line-height: 1;
      color: #ffffff;
      margin: 0;
      margin-left: -5px;
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
  first: {
    opacity: 0,
    marginLeft: ({ children }) => {
      return /-/.test(children) ? '-10px' : '1px'
    },
    x: 1,
  },
  middle: {
    opacity: ({ children }) => {
      return /-/.test(children) ? 0 : 1
    },
    marginLeft: ({ children }) => {
      return /-/.test(children) ? '-10px' : '1px'
    },
    x: 1,
    delay: ({ charIndex }) => charIndex * 80,
    transition: {
      ease: 'easeOut',
    }
  },
}
const charPosesLater = {
  middle: {
    opacity: ({ children }) => {
      return /-/.test(children) ? 0 : 1
    },
    marginLeft: ({ children }) => {
      return /-/.test(children) ? '-10px' : '1px'
    },
    x: 1,
  },
  last: {
    opacity: 0,
    marginLeft: ({ children }) => {
      return /-/.test(children) ? '-10px' : '1px'
    },
    x: 0,
    delay: ({ charIndex, numChars }) => {
      return (numChars - charIndex) * 50
    },
    transition: {
      ease: 'easeOut',
    },
  },
}

class Title extends Component {
  state = {
    isFirst: true,
    text: this.props.titles[0],
    count: 1,
    currentTitleIndex: 0,
  }

  FireMe = () => {
    const textLength = this.state.text.replace(/\s/g, '').length

    if (this.state.count < textLength - 1) {
      this.setState(prevState => {
        return {
          count: prevState.count + 1,
        }
      })
    } else {
      if (this.state.count === textLength - 1) {
        //Set delay after first round animation
        setTimeout(() => {
          this.setState(prevState => {
            return {
              isFirst: false,
            }
          })
        }, 3000)
      }

      this.setState(prevState => {
        return {
          count: prevState.count + 1,
        }
      })
    }

    //For new text item
    if (this.state.count >= textLength * 2 - 1) {
      this.setState(prevState => {
        let newIndex =
          (prevState.currentTitleIndex + 1) % this.props.titles.length

        return {
          currentTitleIndex: newIndex,
          count: 1,
          isFirst: true,
          text: this.props.titles[newIndex],
        }
      })
    }
  }

  render() {
    return (
      <div>
        {this.state.isFirst ? (
          <StyledTitle
            key={'splittext' + this.state.text + this.state.isFirst}
            onPoseComplete={() => this.FireMe()}
            initialPose="first"
            pose="middle"
            charPoses={charPoses}
          >
            {this.state.text}
          </StyledTitle>
        ) : (
          <StyledTitle
            key={'splittext' + this.state.text + this.state.isFirst}
            onPoseComplete={() => this.FireMe()}
            initialPose="middle"
            pose="last"
            charPoses={charPosesLater}
          >
            {this.state.text}
          </StyledTitle>
        )}
      </div>
    )
  }
}

export default Title
