import * as React from 'react'
import { View } from 'utopia-api'
import '../public/globals.css'

export var Playground = ({ style }) => {
  return (
    <div
      style={{
        height: 759,
        width: 700,
        contain: 'layout',
        ...style,
      }}
    />
  )
}
