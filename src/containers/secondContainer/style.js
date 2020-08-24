import styled from 'styled-components'

import { Constants } from '../../constants/constants'

import media from '../../responsive'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f1f1f1;
  justify-content: space-around;
  align-items: center;
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
    padding-bottom: 50px;
    height: auto;
    padding-top: 80px;
  }
  ${media.bigDevice} {
    min-height: 1800px;
  }
`
export const Title = styled.p`
  font-size: ${Constants.TitleSize}px;
  color: ${Constants.bluecolor};
  margin-top: 100px;
  ${media.smallDevice} {
    margin-top: 0px;
    font-size: ${Constants.TitleSizeMobile}px;
  }
`
export const SubTitle = styled.p`
  font-size: 20px;
  color: ${Constants.greenBlueColor};
`
export const Img = styled.img`
  width: 700px;
  height: 700px;
  ${media.smallDevice} {
    width: 100%;
    height: auto;
  }
  ${media.mobile} {
    width: 500px;
    height: 500px;
  }
  ${media.desktop} {
    width: 600px;
    height: 600px;
  }
  ${media.bigDevice} {
    width: 50%;
    height: auto;
    max-height: 75%;
  }
`
