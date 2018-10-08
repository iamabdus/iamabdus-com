import React from 'react'
import GlobalContextProvider from './src/contexts/GlobalContextProvider'

const onClientEntry = () => {
  console.log("I've started!")
}

let currentLocation = ''

const onPreRouteUpdate = ({ location }) => {
  currentLocation = location.pathname
}

const wrapPageElement = ({ element, props }) => {
  return (
    <GlobalContextProvider {...props} location={currentLocation}>
      {element}
    </GlobalContextProvider>
  )
}

export { onClientEntry, onPreRouteUpdate, wrapPageElement }
