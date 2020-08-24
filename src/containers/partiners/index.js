import React from 'react'

import { Container, DivCont, Img } from './style'

import img01 from '../../assets/images/03.png'
import img02 from '../../assets/images/04.png'
import img03 from '../../assets/images/05.png'
import img04 from '../../assets/images/06.png'
import img05 from '../../assets/images/07.png'
import img06 from '../../assets/images/08.png'

function Partiners() {
  const data = [
    { img: img01 },
    { img: img02 },
    { img: img03 },
    { img: img04 },
    { img: img05 },
    { img: img06 }
  ]

  const imgs = data.map((item) => {
    return <Img src={item.img} />
  })
  return (
    <Container id="quemUsa">
      <DivCont>{imgs}</DivCont>
    </Container>
  )
}

export default Partiners
