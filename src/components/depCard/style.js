import styled from 'styled-components'

import { Constants } from '../../constants/constants'

const media = {
  superSmallDevice: '@media(max-width: 700px)',
  smallDevice: '@media(max-width: 1000px)',
  mobile: '@media(min-width: 1000px)',
  desktop: '@media(min-width: 1400px)',
  bigDevice: '@media(min-width: 1800px)'
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 70%;
  max-height: 700px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0px 9px 55px rgba(0, 0, 0, 0.16);
  padding-top: 50px;
  padding-bottom: 10px;
  float: left;
  margin: 0 10px;
  ${media.smallDevice} {
    margin-top: 20px;
    width: 250px;
    border-radius: 8px;
    min-height: 400px;
  }
  ${media.mobile} {
    margin-top: 20px;
    width: 250px;
    height: 420px;
  }
  ${media.desktop} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 500px;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0px 9px 55px rgba(0, 0, 0, 0.16);
    padding-top: 50px;
    padding-bottom: 20px;
  }

  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export const ImgFhoto = styled.div`
  width: 130px;
  height: 130px;
  border: solid 1px ${Constants.greenBlueColor};
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.smallDevice} {
    width: 100px;
    height: 100px;
  }
  ${media.mobile} {
    width: 100px;
    height: 100px;
  }
  ${media.desktop} {
    width: 130px;
    height: 130px;
    border: solid 1px ${Constants.greenBlueColor};
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const Img = styled.img`
  width: 94%;
  height: 94%;
  border-radius: 100px;
`
export const Name = styled.p`
  font-size: 20px;
  font-family: 'poppins';
  color: ${Constants.greenBlueColor};
`
export const Depoiment = styled.p`
  font-size: 14px;
  font-family: 'poppins';
  color: #707070;
  text-align: center;
  width: 220px;
  height: 60px;
`
export const Cargo = styled.p`
  font-size: 14px;
  font-family: 'poppins';
  color: #707070;
  text-align: center;
  width: 220px;
  border-top: 1px solid #b9b9b9;
  padding-top: 5px;
`

export const img = {}
