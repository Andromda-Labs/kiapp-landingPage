import React from 'react'

import { Input } from './style'

function KInput({ width, height, pHolder, onChange }) {
  return (
    <Input
      width={width}
      height={height}
      placeholder={pHolder}
      onChange={onChange}
    />
  )
}

export default KInput
