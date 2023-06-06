import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder="Your course goal" />
        <Button title="Add goal" />
      </View>
      <View>
        <Text>List of Goals..</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    margin: 16,
    padding: 16,
    borderWidth: 1,
    backgroundColor: 'red',
  },
});
