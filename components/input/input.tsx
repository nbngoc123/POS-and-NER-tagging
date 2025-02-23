import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native"

const Input = () => {
      const [per, setper] = useState<any>()
    return (
        <>
            <TextInput keyboardType='numeric' onChangeText={value => setper(value)} style={styles.input}></TextInput>
            <Button
            title="Click me"
          />
        </>
    )
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default Input;
