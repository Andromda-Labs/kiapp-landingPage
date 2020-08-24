import styled from 'styled-components'

import media from '../../responsive'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DivCont = styled.div`
  width: 80%;
  max-width: 1600px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${media.superSmallDevice} {
    flex-direction: column;
    width: 150px !important;
    height: auto;
  }
  ${media.smallDevice} {
    width: 90%;
  }
  ${media.mobile} {
    width: 90%;
    height: 250px;
    padding-top: 150px;
  }
  ${media.bigDevice} {
    width: 70%;
  }
`
export const Img = styled.img`
  width: 12%;
  height: 50px;
  margin: 0 10px;
  ${media.superSmallDevice} {
    width: 100%;
    margin: 10px 0;
  }
`
