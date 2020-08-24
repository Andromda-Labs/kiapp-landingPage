import React from 'react'
import { Container, RowDiv, Img } from './style'

import img from '../../assets/images/01.png'

import KButton from '../../components/button'

import { Constants } from '../../constants/constants'

function FirstCont() {
  return (
    <Container>
      <div className="divText">
        <h1>
          A Melhor Forma De <br />
          Saber O Melhor Orçamento <br />
          Das Suas Receitas
        </h1>
        <h1>Vá Ao Local Certo</h1>
        <p>
          O KIAPP oferece-te uma forma <br /> rápida e simples de comunicar{' '}
          <br /> com as farmácias
        </p>
        <KButton
          width={200}
          height={40}
          text="Baixar App"
          textSize={12}
          background={Constants.bluecolor}
        />
      </div>

      <Img src={img} />
    </Container>
  )
}

export default FirstCont
