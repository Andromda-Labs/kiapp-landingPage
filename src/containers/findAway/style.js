import styled from 'styled-components'

import { Constants } from '../../constants/constants'

import media from '../../responsive'

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  min-height: 800px;
  ${media.smallDevice} {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
    align-items: flex-start;
    padding-top: 20px;
    height: auto !important;
  }
  ${media.bigDevice} {
    min-height: 1000px !important;
  }
`
export const DivText = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding-left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  h1 {
    font-size: ${Constants.TitleSize}px;
  }

  ${media.superSmallDevice} {
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
    h1 {
      font-size: ${Constants.TitleSizeMobile}px;
    }
  }
  ${media.smallDevice} {
    width: 100%;
    padding-left: 10%;
    justify-content: flex-end;
    padding-top: 20px;
    height: auto;
    position: relative;
  }
`
export const Img = styled.img`
  width: 100%;

  ${media.smallDevice} {
    width: 100%;
    height: auto;
  }
`
