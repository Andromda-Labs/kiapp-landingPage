import React from 'react'

import { Container, ImgFhoto, Name, Depoiment, Cargo, Img } from './style'

//import image from '../../assets/images/foto.jpg'

function DepCard({ img, nome, text, cargo }) {
  return (
    <Container>
      <div className="top">
        <ImgFhoto>
          <Img src={img} />
        </ImgFhoto>
        <Name>{nome}</Name>
        <Depoiment>{text}</Depoiment>
      </div>

      <Cargo>{cargo}</Cargo>
    </Container>
  )
}

export default DepCard
