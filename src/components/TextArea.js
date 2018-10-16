import React from 'react'
import styled from 'styled-components'
import theme from './utility/theme'

const InputContainer = styled.div`
  width: ${({ width }) => width + '%'};
  padding: 0px 50px 0 0;
  margin-bottom: 100px;
`

const StyledTextArea = styled.textarea`
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


const TextArea = props => {
  const { name, placeholder, value, handleChange, width = 50 } = props
  return (
    <InputContainer width={width}>
      <StyledTextArea
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        rows={2}
      />
      <StyledLabel htmlFor={name} style={value.length > 0 ? labelStyle : null}>
        {placeholder}
      </StyledLabel>
    </InputContainer>
  )
}

export default TextArea
