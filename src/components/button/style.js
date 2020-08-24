import styled from 'styled-components'

import media from '../../responsive'

export const Button = styled.button`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  font-size: ${(props) => `${props.textSize}px`};
  background-color: ${(props) => `${props.background}`};
  color: #fff;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  ${media.superSmallDevice} {
    width: 100%;
  }
`
