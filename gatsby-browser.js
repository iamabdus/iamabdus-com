import React from 'react'
import PageWrapper from './src/components/wrappers/PageWrapper';

let isFirstLoad

const onClientEntry = () => {
  console.log("I've started!")
  isFirstLoad = true
}

const onRouteUpdate = ({ location }) => {
  isFirstLoad = false
}

const wrapPageElement = ({ element, props }) => {
  return (
    <PageWrapper {...props} isFirstLoad={isFirstLoad}>
      {element}
    </PageWrapper>
  )
}

export { onClientEntry, onRouteUpdate, wrapPageElement }
