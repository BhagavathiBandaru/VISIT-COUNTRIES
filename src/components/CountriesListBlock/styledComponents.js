import styled from 'styled-components'

export const ButtonEle = styled.button`
  font-family: 'Roboto';
  min-width: 120px;
  max-width: 150px;
  border-radius: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${props => (props.bgColor ? 'transparent' : '#3b82f6')};
  color: ${props => (props.color ? '#334155' : '#ffffff')};
  font-size: 26px;
  margin: 5px;
  height: 45px;
`
