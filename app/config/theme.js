import styled from 'styled-components'

const Button = styled.TouchableOpacity`
  color: palevioletred;
  font-size: 1;
  height: 20px;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const theme = {
  color: {
    primary: '#336699',
    secondary: '#000000',
    white: '#FFFFFF'
  }
}
export { Button, theme }
