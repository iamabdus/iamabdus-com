import React, { Component } from 'react'
import styled from 'styled-components'
import * as emailjs from 'emailjs-com'
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
    submitText: 'Send to Abdus',
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

  sendMail = e => {
    e.preventDefault()
    this.setState({ submitText: 'Sending' })
    const { name, email, projectDetails } = this.state.user
    const template = {
      reply_to: email,
      from_name: name,
      message_html: projectDetails,
    }
    emailjs
      .send(
        'gmail',
        'template_eayL0uQ3',
        template,
        'user_77wMH3M35ZMRZmzP3kuYO'
      )
      .then(
        response => {
          this.setState({ submitText: 'Successfully Sent' })
        },
        err => {
          this.setState({ submitText: 'Failed! Try Again' })
          console.log('FAILED...Please Try again', err)
        }
      )
  }

  render() {
    const { isFirstLoad, timingOffset, ...rest } = this.props
    const { user, submitText } = this.state
    return (
      <Form>
        <InputsContainer>
          <Input
            type={'text'}
            name={'name'}
            value={user.name}
            placeholder={'Your Name'}
            handleChange={this.handleFullName}
          />
          <Input
            type={'email'}
            name={'email'}
            value={user.email}
            placeholder={'Your Email'}
            handleChange={this.handleEmail}
          />
        </InputsContainer>

        <InputsContainer>
          <TextArea
            name={'projectDetails'}
            value={user.projectDetails}
            placeholder={'Say something about project'}
            handleChange={this.handleProjectDetails}
            width={100}
          />
        </InputsContainer>

        <InputsContainer>
          <ButtonSubmit type="button" onClick={this.sendMail}>
            {submitText}
          </ButtonSubmit>
        </InputsContainer>
      </Form>
    )
  }
}

export default CustomForm
