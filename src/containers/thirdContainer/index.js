import React from 'react'
import { Container, Title, SubTitle, Img } from './style'

import img from '../../assets/images/computer-image.png'

function ThirdCont() {
  return (
    <Container>
      <Img src={img} />

      <div>
        <Title>
          Responda Aos <br />
          Cliesntes
        </Title>
        <SubTitle>Apartir de qualquer lugar</SubTitle>
        <p>
          Esteja mais proxímo dos <br />
          dos seus clientes, ajude-
          <br />
          os sempre, faça-os sentir
          <br />
          especiais. Dessa forma <br />
          consegue mostrar que tu
          <br />
          te importas com eles.
          <br />
          <br />
          A Saúde dos seus clientes
          <br />
          deve ser sua prioridade,
          <br />
          esteja sempre pronto a<br />
          oferecer um ajuda.
          <br />
        </p>
      </div>
    </Container>
  )
}

export default ThirdCont
