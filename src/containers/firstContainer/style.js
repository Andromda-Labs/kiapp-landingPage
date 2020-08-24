import styled from 'styled-components'

import { Constants } from '../../constants/constants'
import media from '../../responsive'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: 100vh;
  min-height: 800px;
  padding-right: 150px;
  padding-left: 150px;
  box-sizing: border-box;
  ${media.superSmallDevice} {
    padding-top: 10px !important;
    height: auto;
  }
  ${media.smallDevice} {
    padding-top: 100px;
    padding-right: 10%;
    padding-left: 10%;
    padding-bottom: 50px;
    height: auto;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
  ${media.mobile} {
    padding-right: 10%;
    padding-left: 10%;
  }
  ${media.desktop} {
    padding-right: 10%;
    padding-left: 10%;
  }
  ${media.bigDevice} {
    width: 100%;
    height: 100vh;
    min-height: 1800px !important;
    padding-top: 150px;
    padding-right: 10%;
    padding-left: 10%;
  }
  .divText {
    text-align: start;
    ${media.smallDevice} {
      text-align: center;
    }
    h1 {
      font-size: ${Constants.TitleSize}px;
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      ${media.superSmallDevice} {
        font-size: 20px !important;
      }
      ${media.smallDevice} {
        font-size: ${Constants.TitleSizeMobile}px;
      }
    }
  }
`
export const Img = styled.img`
  width: 764px;
  height: 600px;
  ${media.smallDevice} {
    width: 100%;
    height: auto;
  }
  ${media.mobile} {
    width: 564px;
    height: 400px;
  }
  ${media.desktop} {
    width: 664px;
    height: 500px;
  }
  ${media.bigDevice} {
    width: 60%;
    height: auto;
    max-height: 70%;
  }
`
