import React from "react"
import KeyboardView from "../../view/keyboard"
import styled from "styled-components/native"

const Container = styled.View`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
`

const EmailInput = styled.TextInput`
  width: 80%;
  align-self: center;
  border-radius: 15px;
  height: 50px;
  background-color: #ebebeb;
  margin-bottom: 50px;
  padding: 10px;
`

interface Props {
  password: string
  setPassword: (text: string) => void
}

const Password = ({ password, setPassword }: Props) => {
  return (
    <KeyboardView>
      <Container>
        <EmailInput
          placeholder="Contraseña"
          value={password}
          onChangeText={(text: string) => setPassword(text)}
        />
      </Container>
    </KeyboardView>
  )
}

export default Password;
