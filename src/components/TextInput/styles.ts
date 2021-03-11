import styled from 'styled-components'

const Input = styled.input`
  width: 300px;
  height: 60px;
  border: none;
  text-align: center;
  margin: ${({ theme: { spacing } }) => spacing(2)}px;
  border-radius: ${({ theme: { spacing } }) => spacing(4)}px;
  background-color: ${({ theme: { colors } }) => colors.white};
  box-shadow: ${({ theme: { shadows } }) => shadows.shadow1};
  color: ${({ theme: { colors } }) => colors.black};
  ${({ theme: { fontTypes } }) => fontTypes.body};
`

export default Input
