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
      </View>
      <View style={styles.goals}>
        <Text>List of Goals..</Text>
      </View>
      {courseGoals.map(g => (
        <Text>{g}</Text>
      ))}
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
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#cccc',
  },
  goals: {
    flex: 4,
  },
});
