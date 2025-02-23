import { FlatList, StyleSheet, Text } from "react-native"

interface IPropt {
    dataDS: DanhSach[]
}
const DanhSach = (props: IPropt) => {
    const { dataDS } = props
    return (
        <>
        <FlatList
              style={styles.info} 
              data={dataDS}
              keyExtractor={(item) => item.id + ''}
              renderItem={({ item }) => {
                return (
                  <Text style={styles.text}>
                    {item.name} - {item.age}
                  </Text>
                )
              }}
              />
        </>
    )
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    borderBlockColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: '90%'
  },
  info: {
    fontWeight: 'bold',
    borderBlockColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});
export default DanhSach;