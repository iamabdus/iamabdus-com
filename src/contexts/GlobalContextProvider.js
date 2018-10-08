import React, { Component } from 'react'
import { GlobalContext } from './GlobalContext'
class GlobalContextProvider extends Component {
  constructor() {
    super()
    this.state = {
      isfirstLoad: true,
    }
  }

  componentDidMount() {
    this.setState({
      isfirstLoad: false,
    })
  }

  shouldComponentUpdate(nextProps) {
    const currentPath = this.props.children.props.location.pathname
    const nextPath = nextProps.children.props.location.pathname
    return currentPath !== nextPath
  }

  componentDidUpdate(prevProps) {
  }

  render() {
    return (
      <GlobalContext.Provider
        value={{ isfirstLoad: this.state.isfirstLoad, props: this.props }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    )
  }
}

export default GlobalContextProvider
