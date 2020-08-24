import styled from 'styled-components'

import { Constants } from '../../constants/constants'

import media from '../../responsive'

export const Input = styled.input`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  background-color: ${Constants.greyColorForInput};
  font-size: 12px;
  color: #000;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  ${media.superSmallDevice} {
    width: 100%;
  }
`
