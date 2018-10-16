import React, { Component } from 'react'
import styled from 'styled-components'
import theme from '../components/utility/theme'
import Input from '../components/Input'
import TextArea from '../components/TextArea'

const Form = styled.form``

const InputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const ButtonSubmit = styled.button`
  width: 100%;
  margin: 0px 50px 100px 0;
  background-color: ${theme.primary} !important;
  padding: 18px 0;
  outline: 0;
  border: 0;
  color: #fff;
  cursor: pointer;
`

class CustomForm extends Component {
  state = {
    user: {
      name: '',
      email: '',
      projectDetails: '',
    },
  }
  handleFullName = e => {
    let value = e.target.value.trim()
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        name: value,
      },
    }))
  }

  handleEmail = e => {
    let value = e.target.value.trim()
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        email: value,
      },
    }))
  }

  handleProjectDetails = e => {
    let value = e.target.value
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        projectDetails: value,
      },
    }))
  }

  render() {
    const { isFirstLoad, timingOffset, ...rest } = this.props
    return (
      <Form>
        <InputsContainer>
          <Input
            type={'text'}
            name={'name'}
            value={this.state.user.name}
            placeholder={'Your Name'}
            handleChange={this.handleFullName}
          />
          <Input
            type={'email'}
            name={'email'}
            value={this.state.user.email}
            placeholder={'Your Email'}
            handleChange={this.handleEmail}
          />
        </InputsContainer>

        <InputsContainer>
          <TextArea
            name={'projectDetails'}
            value={this.state.user.projectDetails}
            placeholder={'Say something about project'}
            handleChange={this.handleProjectDetails}
            width={100}
          />
        </InputsContainer>

        <InputsContainer>
          <ButtonSubmit type="button">Send to Abdus</ButtonSubmit>
        </InputsContainer>
      </Form>
    )
  }
}

export default CustomForm
