import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>My view</Text>
      </View>
      <Text style={styles.text}>Is it working?</Text>
      <Button title="My button" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    margin: 16,
    padding: 16,
    borderWidth: 1,
    backgroundColor: 'red',
  },
});
