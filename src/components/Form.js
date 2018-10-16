import React, { Component } from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import theme from '../components/utility/theme'
import Input from '../components/Input'

const InputContainer = styled.form``

class Form extends Component {
  state = {
    user: {
      name: '',
      email: '',
      age: '',
      gender: '',
      expertise: '',
      about: '',
    },

    genderOptions: ['Male', 'Female', 'Others'],
    skillOptions: ['Programming', 'Development', 'Design', 'Testing'],
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

  render() {
    const { isFirstLoad, timingOffset, ...rest } = this.props
    return (
      <InputContainer>
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
      </InputContainer>
    )
  }
}

export default Form
