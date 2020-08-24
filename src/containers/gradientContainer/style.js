import styled from 'styled-components'

import { Constants } from '../../constants/constants'

import media from '../../responsive'

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  min-height: 800px;
  ${media.smallDevice} {
    .mobile {
      display: flex !important;
    }
    .normal {
      display: none !important;
    }
  }
  ${media.bigDevice} {
    min-height: 1000px !important;
  }
  .mobile {
    display: none;
  }
  .normal {
    display: flex;
  }
`
export const DivCont = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding-left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${media.bigDevice} {
    min-height: 1000px !important;
  }
  h1 {
    font-size: ${Constants.TitleSize}px;
    ${media.superSmallDevice} {
      font-size: ${Constants.TitleSizeMobile}px;
    }
  }
`
