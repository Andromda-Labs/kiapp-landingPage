import styled from 'styled-components'

import { Constants } from '../../constants/constants'

import media from '../../responsive'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #f1f1f1;
  width: 100%;
  height: 100vh;
  min-height: 800px;
  padding-top: 120px;
  padding-right: 10%;
  padding-left: 10%;
  box-sizing: border-box;
  ${media.smallDevice} {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    padding-right: 10%;
    padding-left: 10%;
    padding-bottom: 50px;
    height: auto;
  }
  ${media.bigDevice} {
    min-height: 1800px !important;
  }
`
export const Title = styled.p`
  font-size: ${Constants.TitleSize}px;
  color: ${Constants.bluecolor};
  ${media.smallDevice} {
    font-size: ${Constants.TitleSizeMobile}px;
  }
`
export const SubTitle = styled.p`
  font-size: 20px;
  color: ${Constants.greenBlueColor};
`
export const Img = styled.img`
  width: 764px;
  height: 500px;
  ${media.smallDevice} {
    width: 100%;
    height: auto;
  }
  ${media.mobile} {
    width: 664px;
    height: 400px;
  }
  ${media.desktop} {
    width: 700px;
    height: 450px;
  }
  ${media.bigDevice} {
    width: 60%;
    height: auto;
    max-height: 65%;
  }
`
