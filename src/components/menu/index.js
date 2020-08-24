import React, { useState } from 'react'

import {
  DivMenu,
  TopMenu,
  Logo,
  Ul,
  Li,
  LiBtn,
  ElementWithRightBorder,
  BluegreenText,
  IconMenu,
  UlMobile
} from './style'

import KButton from '../button'

import logo from '../../assets/images/logo.png'
import iconClose from '../../assets/images/iconClose.png'
import iconMenu from '../../assets/images/iconMenu.png'

import { Constants } from '../../constants/constants'

function Menu() {
  const [menuMoblie, setMenuMobile] = useState(false)

  function ToShow() {
    setMenuMobile(true)
  }
  function ToHiddem() {
    setMenuMobile(false)
  }
  return (
    <>
      {menuMoblie ? (
        <UlMobile>
          <li>
            {' '}
            <a href="#quemUsa">Quem usa</a>
          </li>
          <li>
            {' '}
            <a href="#oqueHaDeBom">O que há de bom</a>
          </li>
          <li>
            <a href="#depoimentos">O que dizem</a>
          </li>
          <li>
            {' '}
            <a href="#reclameAqui">Reclame aqui</a>
          </li>
          <img src={iconClose} onClick={ToHiddem} />
        </UlMobile>
      ) : (
        <DivMenu>
          <TopMenu>
            <ul>
              <ElementWithRightBorder>Apoio ao cliente</ElementWithRightBorder>
              <li className="li">ligue:</li>
              <BluegreenText>999222333</BluegreenText>
            </ul>
          </TopMenu>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%'
            }}
          >
            <Logo src={logo}></Logo>

            <IconMenu src={iconMenu} onClick={ToShow} />
            <Ul>
              <Li>
                <a href="#quemUsa">Quem usa</a>
              </Li>
              <Li>
                <a href="#oqueHaDeBom">O que há de bom</a>
              </Li>
              <Li>
                <a href="#depoimentos">O que dizem</a>
              </Li>
              <Li>
                <a href="#reclameAqui">Reclame aqui</a>
              </Li>
              <LiBtn>
                <a href="#reclameAqui">
                  <KButton
                    width={130}
                    height={30}
                    text="Quero ser cilente"
                    textSize={12}
                    background={Constants.bluecolor}
                  />
                </a>
              </LiBtn>
            </Ul>
          </div>
        </DivMenu>
      )}
    </>
  )
}

export default Menu
