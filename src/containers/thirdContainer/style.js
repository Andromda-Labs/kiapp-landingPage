import styled from 'styled-components'

import { Constants } from '../../constants/constants'

import media from '../../responsive'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  width: 100%;
  height: 100vh;
  min-height: 800px;

  padding-right: 10%;
  padding-left: 10%;
  box-sizing: border-box;
  ${media.smallDevice} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-right: 10%;
    padding-left: 10%;
    padding-top: 80px;
    padding-bottom: 50px;
    height: auto;
  }
  ${media.bigDevice} {
    min-height: 1800px;
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
  width: 900px;
  height: 550px;
  ${media.smallDevice} {
    width: 100%;
    height: auto;
  }
  ${media.mobile} {
    width: 640px;
    height: 430px;
  }
  ${media.desktop} {
    width: 800px;
    height: 500px;
  }
  ${media.bigDevice} {
    width: 60%;
    height: auto;
    max-height: 60%;
  }
`
