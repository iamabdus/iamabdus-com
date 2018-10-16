import React, { Component } from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import theme from './utility/theme'

const InputContainer = styled.div`
  position: relative;
`

const StyledInput = styled.input`
  width: 100%;
  font-size: 30px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.18;
  letter-spacing: 1.8px;
  text-align: left;
  color: #fff;
  background: transparent;
  outline: none;
  border: none;
  border-bottom: 5px solid ${theme.inputBorderColor};
  padding-bottom: 8px;
`

const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.54;
  letter-spacing: 2.8px;
  text-align: left;
  color: #fff;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-out;
`

const labelStyle = {
  opacity: 1,
  visibility: 'visible',
}

class Input extends Component {
  render() {
    const { name, type, placeholder, value, handleChange } = this.props
    return (
      <InputContainer>
        <StyledInput
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onClick={this.clickHandler}
        />
        <StyledLabel
          htmlFor={name}
          style={value.length > 0 ? labelStyle : null}
        >
          {placeholder}
        </StyledLabel>
      </InputContainer>
    )
  }
}

export default Input
