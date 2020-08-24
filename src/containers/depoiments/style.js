import styled from 'styled-components'

import media from '../../responsive'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 1290px;
  height: 100vh;
  min-height: 800px;
  align-self: center;
  padding-top: 120px;
  background: #fff;
  padding-bottom: 20px;

  ${media.superSmallDevice} {
    display: block;
    background-color: #fff;
    width: 270px !important;
    height: auto;
  }
  ${media.smallDevice} {
    display: block;
    padding-top: 20px !important;
    width: 540px;
    height: auto;
    padding-bottom: 40px;
  }
  ${media.mobile} {
    width: 1000px;
  }

  ${media.desktop} {
    width: 1290px;
  }
  ${media.bigDevice} {
    min-height: 1800px;
  }
`

/**
 * export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 1400px;
  height: 100vh;
  min-height: 800px;
  align-self: center;
  padding-top: 120px;
  background: #fff;
  padding-bottom: 20px;

  ${media.superSmallDevice} {
    flex-direction: column;

    width: 300px;
    height: auto;
    padding: 10%;
  }
  ${media.smallDevice} {
    flex-direction: column;
    flex-flow: wrap;
    width: 680px;
    height: auto;
  }
  ${media.mobile} {
    display: flex;
    flex-flow: wrap;
    width: 680px;
    height: auto;

    background-color: #ff4;
  }
  ${media.desktop} {
    display: flex;
    flex-flow: row;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 1400px;
    background-color: #f4f;
    height: 100vh;
    min-height: 800px;
    align-self: center;
    padding-top: 120px;
  }
`

 */
