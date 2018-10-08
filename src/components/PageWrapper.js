import React from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

const withPageWrapper = WrappedComponent => {
  const GlobalConsumer = props => {
    return (
      <GlobalContext.Consumer>
        {({ isfirstLoad }) => {
          return (
            <WrappedComponent
              isfirstLoad={isfirstLoad}
              {...props}
              timingOffset={500}
            />
          )
        }}
      </GlobalContext.Consumer>
    )
  }

  return GlobalConsumer
}

export default withPageWrapper
