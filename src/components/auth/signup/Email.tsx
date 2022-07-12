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
  email: string
  setEmail: (text: string) => void
  step: number
  setStep: (step: number) => void
}

const Email = ({ email, setEmail, step, setStep }: Props) => {
  return (
    <KeyboardView>
      <Container>
        <EmailInput
          placeholder="Ingrese su correo electrónico"
          keyboardType="email-address"
          value={email}
          onChangeText={(text: string) => setEmail(text)}
          autoFocus={true}
          returnKeyType="next"
          onSubmitEditing={() => setStep(step + 1)}
        />
      </Container>
    </KeyboardView>
  )
}

export default Email;
