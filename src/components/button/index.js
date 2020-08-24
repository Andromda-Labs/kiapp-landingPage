import React from 'react'

import { Button } from './style'

function KButton({ width, height, text, textSize, background, onClick }) {
  const color = background

  return (
    <Button
      width={width}
      height={height}
      textSize={textSize}
      background={color}
      onClick={onClick}
    >
      {text}
    </Button>
  )
}

export default KButton
