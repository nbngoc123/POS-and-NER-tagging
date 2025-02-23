import { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput} from 'react-native';

export default function App() {
  const [per, setper] = useState<any>()

  return (
    <View style={styles.container}>
      <TextInput keyboardType='numeric' onChangeText={value => setper(value)} style={styles.input}></TextInput>
      <Text style={styles.text}>{per}</Text>
      <Button
    title="Click me"
  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    borderBlockColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});