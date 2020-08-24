import React, { useState } from 'react'

import {
  Container,
  ToBeClientDiv,
  ReclamationDiv,
  Row,
  ClientLi,
  ReclamtLi
} from './style'

import Input from '../../components/input'
import TeaxtArea from '../../components/textArea'
import Button from '../../components/button'

import { Constants } from '../../constants/constants'

import media from '../../responsive'

function FormSection() {
  const [optionSelected, setOptionSelected] = useState('client')
  let displayClient
  let displayReclam
  let inputWidth

  function SetOptions(id) {
    if (id === 'client') {
      setOptionSelected('client')
    } else if (id === 'reclam') {
      setOptionSelected('reclam')
    }
  }

  if (optionSelected === 'client') {
    displayClient = 'flex'
    displayReclam = 'none'
  } else if (optionSelected === 'reclam') {
    displayClient = 'none'
    displayReclam = 'flex'
  }

  return (
    <Container id="reclameAqui">
      <ul
        style={{
          listStyle: 'none'
        }}
      >
        <ClientLi
          color={optionSelected === 'client' ? Constants.bluecolor : '#000'}
          onClick={() => SetOptions('client')}
        >
          Quero ser cliente
        </ClientLi>
        <ReclamtLi
          color={
            optionSelected === 'reclam' ? Constants.greenBlueColor : '#000'
          }
          onClick={() => SetOptions('reclam')}
        >
          Fazer reclamações
        </ReclamtLi>
      </ul>
      <ToBeClientDiv display={displayClient}>
        <Row>
          <Input width={200} height={37} pHolder="Primeiro nome" />
          <Input width={200} height={37} pHolder="Último nome" />
        </Row>
        <Row>
          <Input width={200} height={37} pHolder="Nome da empres" />
          <Input width={200} height={37} pHolder="E-mail" />
        </Row>
        <Row>
          <Input width={200} height={37} pHolder="Endereço da empresa" />
          <Input width={200} height={37} pHolder="Telefone" />
        </Row>
        <TeaxtArea width={420} height={100} pHolder="Mensagem" />
        <Button
          width={200}
          height={37}
          text="Enviar"
          textSize={12}
          background={Constants.bluecolor}
        />
      </ToBeClientDiv>
      <ReclamationDiv display={displayReclam}>
        <Row>
          <Input width={200} height={37} pHolder="Primeiro nome" />
          <Input width={200} height={37} pHolder="Último nome" />
        </Row>
        <Row>
          <Input width={200} height={37} pHolder="Tipo de utilização" />
          <Input width={200} height={37} pHolder="Telefone" />
        </Row>
        <TeaxtArea width={420} height={100} pHolder="Mensagem" />
        <Button
          width={200}
          height={37}
          text="Enviar"
          textSize={12}
          background={Constants.greenBlueColor}
        />
      </ReclamationDiv>
    </Container>
  )
}

export default FormSection
