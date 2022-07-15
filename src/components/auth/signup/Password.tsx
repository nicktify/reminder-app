import React from "react"
import KeyboardView from "../../view/keyboard"
import Input from './Input'
import styled from "styled-components/native"

const Container = styled.View`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
`

interface Props {
  password: string;
  setPassword: (text: string) => void;
  step: number;
  setStep: (step: number) => void;
}

const Password = ({
  password,
  setPassword,
  step,
  setStep,
}: Props) => {
  return (
    <KeyboardView>
      <Container>
        <Input
          placeholder="Contraseña"
          value={password}
          onChangeText={(text: string) => setPassword(text)}
          onSubmitEditing={() => setStep(step + 1)}
          autoFocus
          returnKeyType="next"
        />
      </Container>
    </KeyboardView>
  )
}

export default Password;

