import React from 'react'
import {
  Text,
} from "react-native"
import styled from 'styled-components/native'
import Email from './Email'
import Password from './Password'
import Confirmation from './Confirmation'

const SignUp = () => {
  const [step, setStep] = React.useState<number>(1)
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')

  if (step === 1) {
    return (
      <Email
        email={email}
        setEmail={setEmail}
        step={step}
        setStep={setStep}
      />
    )
  }
  if (step === 2) {
    return (
      <Password
        password={password}
        setPassword={setPassword}
        step={step}
        setStep={setStep}
      />
    )
  }
  if (step === 3) {
    return (
      <Confirmation
        step={step}
        setStep={setStep}
      />
    )
  }
  return <Text>Error</Text>
}

export default SignUp;

