import React from 'react'

import { Container, DivText, Img } from './style'

import image from '../../assets/images/Grupo 27.png'

function FindAway() {
  return (
    <Container>
      <Img src={image} />
      <DivText>
        <h1 style={{ color: '#000', fontFamily: 'poppins' }}>
          Encurtando
          <br />
          O Caminho Para
          <br />
          Todos
        </h1>

        <p style={{ color: '#000', fontFamily: 'poppins', fontSize: 25 }}>
          A Comunicação entre
          <br />
          Cliente e Farmácia nunca <br />
          foi tão simples.
          <br />
          Sabiba onde e Quanto é!
        </p>
      </DivText>
    </Container>
  )
}

export default FindAway
