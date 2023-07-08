import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App(): JSX.Element {
  const [goal, setGoal] = useState<string>('');
  const [courseGoals, setCourseGoals] = useState<string[]>([]);

  const handleAddGoal = () => {
    setCourseGoals(prev => [...prev, goal]);
    setGoal('');
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={goal}
          style={styles.textInput}
          placeholder="Your course goal"
          onChange={e => setGoal(e.nativeEvent.text)}
        />
        <Button title="Add goal" onPress={handleAddGoal} />
        <Button title="Reset goals" onPress={() => setCourseGoals([])} />
      </View>
      <View style={styles.goalContainer}>
        {courseGoals.map(g => (
          <View key={g} style={styles.textGoal}>
            <Text>{g}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  textInput: {
    borderWidth: 1,
    backgroundColor: '#cccc',
    width: '80%',
    marginRight: 8,
    padding: 8,
  },
  goalContainer: {
    flex: 5,
  },
  textGoal: {
    borderRadius: 6,
    backgroundColor: 'grey',
    margin: 8,
    padding: 8,
    color: 'white',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#cccc',
  },
});
