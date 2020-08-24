import styled from 'styled-components'

import { Constants } from '../../constants/constants'

import media from '../../responsive'

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: #3d3d3d;
  width: 100%;
  height: 600px;
  margin-top: 75px;
  padding-top: 150px;
  padding-right: 10%;
  padding-left: 10%;
  box-sizing: border-box;
  ${media.smallDevice} {
    padding-right: 5%;
    padding-left: 5%;
  }
  ${media.superSmallDevice} {
    padding-right: 5%;
    padding-left: 5%;
    height: auto;
    padding-bottom: 40px;
  }
`
export const FloatingDiv = styled.div`
  position: absolute;
  top: -75px;
  width: 80%;
  max-width: 1600px;
  height: 150px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.16);
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;

  ${media.superSmallDevice} {
    display: none;
  }
  ${media.smallDevice} {
    width: 90%;
  }
`
export const BottomDiv = styled.div`
  position: absolute;
  height: 40px;
  bottom: 40px;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  width: 70%;
  border-top: 1px solid #7a7373;
  ${media.superSmallDevice} {
    position: relative;
    bottom: 0;
  }
`
export const FooterCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  ${media.superSmallDevice} {
    padding-right: 5%;
    padding-left: 5%;
    flex-direction: column;
    height: auto;
  }
  ${media.bigDevice} {
    width: 70%;
  }
`
export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
`
export const ColumDiv = styled.div`
  display: flex;
  flex-direction: column;
`
export const Img = styled.img`
  width: 12%;
  height: 50px;
`
export const A = styled.a`
  width: 200px;
  color: #fff;
  font-size: 16px;
  font-family: 'Poppins';
  text-decoration: none;
  ${media.smallDevice} {
    width: 150px;
  }
  ${media.mobile} {
    width: 200px;
  }
`
export const P = styled.p`
  width: 200px;
  color: #fff;
  font-size: 16px;
  font-family: 'Poppins';
  margin-top: 20px;
  ${media.smallDevice} {
    width: 150px;
  }
  ${media.mobile} {
    width: 200px;
  }
`
export const FooterTitle = styled.p`
  width: 200px;
  color: ${Constants.bluecolor};
  font-size: 16px;
  font-family: 'Poppins';
  margin-top: 22px;
  ${media.smallDevice} {
    width: 150px;
  }
  ${media.mobile} {
    width: 200px;
  }
`
export const ButtonDiv = styled.button`
  width: 150px;
  display: flex;
  background-color: transparent;
  border: none;
  justify-content: flex-start;
  margin-left: -6px;
  ${media.superSmallDevice} {
    width: 250px;
  }
`
//StyleSheet

export const Logo = {
  width: 120,
  height: 70,
  marginBottom: 10
}

export const CopyrightText = {
  color: '#fff',
  fontSize: 20,
  fontFamily: 'Poppins',
  textAlign: 'center'
}

export const SocialLogo = {
  width: 25,
  height: 25,
  marginRight: 10
}

/**
 * export const P = {
  width: 200,
  color: '#fff',
  fontSize: 16,
  fontFamily: 'Poppins',
  marginTop: 20
}
 */
/**
 * export const A = {
  width: 200,
  color: '#fff',
  fontSize: 16,
  fontFamily: 'Poppins',
  textDecoration: 'none'
}
 */
export const Li = {
  marginBottom: 10,
  marginTop: 10,
  marginLeft: -40
}
/*
export const FooterTitle = {
  width: 200,
  color: `${Constants.bluecolor}`,
  fontSize: 16,
  fontFamily: 'Poppins',
  marginTop: 22
} */
export const IconStore = {
  width: 150,
  height: 55,
  marginBottom: 10
}
