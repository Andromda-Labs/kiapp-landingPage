import React from 'react'

import { TextArea } from './style'

function KTextArea({ width, height, pHolder, onChange }) {
  return (
    <TextArea
      width={width}
      height={height}
      placeholder={pHolder}
      onChange={onChange}
    />
  )
}

export default KTextArea
