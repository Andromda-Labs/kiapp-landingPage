import styled from 'styled-components'

import media from '../../responsive'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  min-height: 800px;
  background-color: #fff;
  ${media.bigDevice} {
    min-height: 1800px;
  }
`
export const ToBeClientDiv = styled.div`
  display: ${(props) => `${props.display}`};
  flex-direction: column;
  align-items: center;
  width: 420px;
  height: 500px;
  ${media.superSmallDevice} {
    width: 250px;
    height: 500px;
  }
`
export const ReclamationDiv = styled.div`
  display: ${(props) => `${props.display}`};
  flex-direction: column;
  align-items: center;
  width: 420px;
  height: 500px;
  padding-bottom: 37px;
  ${media.superSmallDevice} {
    width: 250px;
    height: 500px;
  }
`
export const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  ${media.superSmallDevice} {
    flex-direction: column;
  }
`
export const ClientLi = styled.li`
  display: inline-block;
  cursor: pointer;
  border-right-width: 1px;
  border-right-color: #cccccc;
  border-right-style: solid;
  padding-right: 10px;
  margin-left: -30px;
  color: ${(props) => `${props.color}`};
`
export const ReclamtLi = styled.li`
  display: inline-block;
  cursor: pointer;
  color: ${(props) => `${props.color}`};
  margin-left: 10px;
`
