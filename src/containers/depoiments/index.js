import React from 'react'

import { Container } from './style'

import DepCard from '../../components/depCard'

import { dataDepoiment } from '../../data/index'

function Depoiments() {
  return (
    <Container id="depoimentos">
      {dataDepoiment.map((item) => {
        return (
          <DepCard
            img={item.img}
            nome={item.nome}
            text={item.testo}
            cargo={item.cargo}
          ></DepCard>
        )
      })}
    </Container>
  )
}

export default Depoiments
