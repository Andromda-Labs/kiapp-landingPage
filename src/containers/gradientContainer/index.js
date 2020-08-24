import React, { useState } from 'react'

import { Container, DivCont } from './style'

import image from '../../assets/images/Grupo 28.png'
import imageM from '../../assets/images/imgM.png'

import media from '../../responsive'

function Gradient() {
  return (
    <Container>
      <img className="mobile" src={imageM} style={{ width: '100%' }} />
      <img className="normal" src={image} style={{ width: '100%' }} />
      <DivCont>
        <h1 style={{ color: '#fff', fontFamily: 'poppins' }}>
          O Melhor
          <br />
          Facilitador Para <br />
          Todos
        </h1>
        <p style={{ color: '#fff', fontFamily: 'poppins', fontSize: 25 }}>
          A partir de qalquer lugart
        </p>
        <p style={{ color: '#000', fontFamily: 'poppins', fontSize: 25 }}>
          Não importa o lugar e <br />
          a hora, o KIAPP está <br />
          sempre contigo!
        </p>
      </DivCont>
    </Container>
  )
}

export default Gradient
