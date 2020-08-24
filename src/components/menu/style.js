import styled from 'styled-components'

import { Constants } from '../../constants/constants'

import media from '../../responsive'

export const DivMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #fff;
  position: fixed;
  z-index: 2000;
  padding-right: 150px;
  padding-left: 150px;
  box-sizing: border-box;
  ${media.superSmallDevice} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 10%;
    padding-left: 10%;
  }
  ${media.smallDevice} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 10%;
    padding-left: 10%;
    height: 70px;
  }
  ${media.mobile} {
    justify-content: space-between;
    align-items: center;
    padding-right: 10%;
    padding-left: 10%;
  }
  ${media.tablet} {
    justify-content: space-between;
    align-items: center;
  }
`
export const TopMenu = styled.div`
  display: flex;
  align-self: flex-end;
  height: 20px;
  ul {
    text-decoration: none;
    ${media.smallDevice} {
      display: none;
    }
  }
  ${media.smallDevice} {
    display: none;
  }
  ${media.mobile} {
    display: flex;
  }
  ${media.tablet} {
    display: flex;
  }
  .li {
    display: inline-block;
    font-size: 12px;
    font-family: 'Lato';
  }
`
export const Logo = styled.img`
  width: 93px;
  height: 50px;
  src: url(${(props) => props.src});
  ${media.smallDevice} {
    margin: auto 0;
    width: 65px;
    height: 30px;
  }
`
export const Ul = styled.ul`
  display: flex;
  text-decoration: none;
  ${media.smallDevice} {
    display: none !important;
  }
  ${media.mobile} {
    display: flex;
  }
  ${media.tablet} {
    display: flex;
  }
`
export const Li = styled.li`
  display: inline-block;
  margin: 0 10px;
  cursor: pointer;
  a {
    font-family: 'Poppins' sans-serif;
    text-decoration: none;
    color: #000;
  }
`
export const LiBtn = styled.li`
  display: inline-block;
  margin-left: 60px;
`
export const BluegreenText = styled.li`
  font-size: 12px;
  color: ${Constants.subMenuColor};
  display: inline-block;
  margin-left: 10px;
`
export const ElementWithRightBorder = styled.li`
  font-size: 12px;
  color: ${Constants.subMenuColor};
  border-right: 1px solid #cccccc;
  display: inline-block;
  margin-right: 20px;
  padding-right: 20px;
`
export const IconMenu = styled.img`
  width: 22px;
  height: 16px;
  display: none;
  ${media.smallDevice} {
    display: flex !important;
    align-self: center;
  }
  ${media.mobile} {
    display: none;
  }
  ${media.tablet} {
    display: none;
  }
`
export const UlMobile = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: -20px;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: 2000;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
  li {
    font-size: 16px;
    font-family: 'Lato';
    cursor: pointer;
    color: #fff;
    text-align: center;
    margin-top: 20px;
    a {
      font-family: 'Poppins' sans-serif;
      text-decoration: none;
      color: #fff;
    }
  }
  img {
    width: 24px;
    height: 26px;
    position: absolute;
    right: 20px;
    top: 40px;
  }
`
