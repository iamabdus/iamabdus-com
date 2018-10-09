/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
// Move Typography.js styles to the top of the head section so they're loaded first.

import React from 'react'
import PageWrapper from './src/components/wrappers/PageWrapper'

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <PageWrapper {...props}>{element}</PageWrapper>
}
