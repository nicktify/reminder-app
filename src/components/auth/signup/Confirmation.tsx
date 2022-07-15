import React, { useState } from "react"
import { Text } from "react-native"
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
  step: number
  setStep: (step: number) => void
}

const Confirmation = ({ step, setStep }: Props) => {
  const [code, setCode] = useState("")
  return (
    <KeyboardView>
      <Container>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 20,
            textAlign: "center",
            opacity: 0.8,
          }}
        >
          Ingresa el código que te enviamos a tu correo electrónico
        </Text>
        <Input
          placeholder="Código de confirmación"
          keyboardType="email-address"
          value={code}
          onChangeText={(text: string) => setCode(text)}
          autoFocus
        />
      </Container>
    </KeyboardView>
  )
}

export default Confirmation;

