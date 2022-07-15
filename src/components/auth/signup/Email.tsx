import React from "react"
import KeyboardView from "../../view/keyboard"
import styled from "styled-components/native"
import Input from './Input'

const Container = styled.View`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
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
        <Input
          placeholder="Ingrese su correo electrónico"
          keyboardType="email-address"
          value={email}
          onChangeText={(text: string) => setEmail(text)}
          autoFocus
          returnKeyType="next"
          onSubmitEditing={() => setStep(step + 1)}
        />
      </Container>
    </KeyboardView>
  )
}

export default Email;
