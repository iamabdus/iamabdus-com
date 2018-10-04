import React, { Component } from 'react'
import { GlobalContext } from './GlobalContext'
class GlobalContextProvider extends Component {
  state = {
    isfirstLoad: true,
  }

  componentDidUpdate(PrevProps) {
    if (this.props !== PrevProps) {
      this.setState({
        isfirstLoad: false,
      })
    }
  }

  render() {
    return (
      <GlobalContext.Provider value={{ isfirstLoad: this.state.isfirstLoad, props: this.props }}>
        {this.props.children}
      </GlobalContext.Provider>
    )
  }
}

export default GlobalContextProvider
