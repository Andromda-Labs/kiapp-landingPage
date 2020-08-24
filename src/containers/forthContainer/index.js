import React from 'react'
import { Container, Title, SubTitle, Img } from './style'

import img from '../../assets/images/Grupo 26.png'

import KButton from '../../components/button'

import { Constants } from '../../constants/constants'

function ForthCont() {
  return (
    <Container>
      <div>
        <Title>
          Oferecendo
          <br />
          A Melhor Experiência
          <br />
          Para Todos
        </Title>
        <SubTitle>Apartir de qualquer lugar</SubTitle>
        <p>
          O KIAPP oferece as pessoas <br />
          uma experiência simplesmente <br />
          incrível! <br />
          Com uma simples foto, consegue <br />
          saber o orçamento da tua receita <br />
          médica.
        </p>
        <a href="#reclameAqui">
          <KButton
            width={200}
            height={40}
            text="Quero ser cliente"
            textSize={12}
            background={Constants.greenBlueColor}
          />
        </a>
      </div>

      <Img src={img} />
    </Container>
  )
}

export default ForthCont
