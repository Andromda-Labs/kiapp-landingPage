import React from 'react'

import {
  Container,
  FloatingDiv,
  BottomDiv,
  FooterCont,
  RowDiv,
  ColumDiv,
  CopyrightText,
  SocialLogo,
  Logo,
  FooterTitle,
  Img,
  P,
  A,
  Li,
  IconStore,
  ButtonDiv
} from './style'

import WhiteLogo from '../../assets/images/WhiteLogo.png'
import FacebookIcon from '../../assets/images/FacebookIcon.png'
import InstaIcon from '../../assets/images/InstaIcon.png'
import TwitterIcon from '../../assets/images/TwitterIcon.png'
import WhatAppIcon from '../../assets/images/WhatAppIcon.png'
import AppStore from '../../assets/images/AppStore.png'
import GooglePlay from '../../assets/images/GooglePlay.png'

import { Constants } from '../../constants/constants'
import KButton from '../../components/button'

import img01 from '../../assets/images/03.png'
import img02 from '../../assets/images/04.png'
import img03 from '../../assets/images/05.png'
import img04 from '../../assets/images/06.png'
import img05 from '../../assets/images/07.png'
import img06 from '../../assets/images/08.png'

function Footer() {
  const LIGreen = { ...Li, color: `${Constants.greenBlueColor}` }

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
    <Container>
      <FloatingDiv>{imgs}</FloatingDiv>

      <FooterCont>
        <ColumDiv>
          <img src={WhiteLogo} style={Logo} />
          <RowDiv>
            <img src={FacebookIcon} style={SocialLogo} />
            <img src={TwitterIcon} style={SocialLogo} />
            <img src={WhatAppIcon} style={SocialLogo} />
            <img src={InstaIcon} style={SocialLogo} />
          </RowDiv>
          <P>Kiapp Saúde /0001-58 Rua da cuca - São Paulo, SP - 05409-000</P>
        </ColumDiv>

        <ColumDiv>
          <FooterTitle>Navegação</FooterTitle>
          <ul
            style={{
              textDecoration: 'none',
              listStyle: 'none'
            }}
          >
            <li style={Li}>
              <A href="#quemUsa">Quem usa</A>
            </li>
            <li style={Li}>
              <A href="#oqueHaDeBom">O que há de bom</A>
            </li>
            <li style={Li}>
              <A href="#depoimentos">O que dizem</A>
            </li>
            <li style={Li}>
              <A href="#reclameAqui">Reclame aqui</A>
            </li>
          </ul>
          <ButtonDiv>
            <a href="#reclameAqui">
              <KButton
                width={130}
                height={30}
                text="Quero ser cilente"
                textSize={12}
                background={Constants.greenBlueColor}
              />
            </a>
          </ButtonDiv>
        </ColumDiv>
        <ColumDiv>
          <FooterTitle>Suporte</FooterTitle>
          <ul
            style={{
              textDecoration: 'none',
              listStyle: 'none'
            }}
          >
            <li style={Li}>
              <A href="">Facebook</A>
            </li>
            <li style={Li}>
              <A href="">WhatApp</A>
            </li>
            <li style={Li}>
              <A href="">Reclame aqui</A>
            </li>
            <li style={LIGreen}>999222111</li>
          </ul>
        </ColumDiv>

        <ColumDiv>
          <FooterTitle>Aplicações</FooterTitle>
          <P>Kiapp Farmácias</P>
          <img src={AppStore} style={IconStore} />
          <img src={GooglePlay} style={IconStore} />
        </ColumDiv>
      </FooterCont>

      <BottomDiv>
        <p style={CopyrightText}> &copy; AndromedaLabs - 2019</p>
      </BottomDiv>
    </Container>
  )
}

export default Footer
