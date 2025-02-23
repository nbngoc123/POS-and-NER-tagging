import DanhSach from '@/components/danhsach/danhsach';
import Input from '@/components/input/input';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const [data, setdata] = useState<DanhSach[]>([{ id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 35 },
    { id: 4, name: 'Alice', age: 20 },
    { id: 5, name: 'Mike', age: 40 },])

  return (
    <View style={styles.container}>
      <Input />
    <View>
      <Text style={{fontSize: 30, backgroundColor: "#3f3f7f"}}>danh sách</Text>
      <DanhSach dataDS={data} />
    </View>
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
    width: '90%'
  },
});