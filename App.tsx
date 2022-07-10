import React from 'react'
import {
  View,
  Text,
} from 'react-native'
import styled from 'styled-components/native'

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

const App = () => {
  return (
    <Container>
      <Text>
        Hello World!
      </Text>
    </Container>
  )
}

export default App;
