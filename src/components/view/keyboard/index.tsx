import React from "react"
import {
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from "react-native"

interface Props {
  children: React.ReactNode
}

const KeyboardView = ({ children }: Props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
      >
        {children}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default KeyboardView;
