import React, { useState } from 'react'
import {
  View,
  Text,
} from 'react-native'
import styled from 'styled-components/native'
import SignUp from './src/components/auth/signup'

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

const App = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false)
  if (!isAuth) {
    return <SignUp />
  }
  return (
    <Container>
      <Text>
        Hello World
      </Text>
    </Container>
  )
}

export default App;
