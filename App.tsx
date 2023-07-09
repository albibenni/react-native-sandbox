import React, { useState } from 'react';
import {
  NativePointerEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
import { Path, Svg } from 'react-native-svg';
const { height, width } = Dimensions.get('window');

export default function App(): JSX.Element {
  const [goal, setGoal] = useState<string>('');
  const [courseGoals, setCourseGoals] = useState<string[]>([]);
  const [path, setPath] = useState<string[]>([]);

  const onMove = (event: NativeSyntheticEvent<NativePointerEvent>): void => {
    const {
      nativeEvent: { offsetX, offsetY },
    } = event;
    const newPath = [...path];

    // Create a new point
    const newPoint = `${newPath.length === 0 ? 'M' : ''}${offsetX.toFixed(
      0
    )},${offsetY.toFixed(0)} `;

    // Add new point to existing points
    newPath.push(newPoint);
    setPath(newPath);
  };
  // const handleAddGoal = () => {
  //   setCourseGoals(prev => [...prev, goal]);
  //   setGoal('');
  // };
  // const handleAddGoal = (event: GestureResponderEvent) => {
  //   const isPencilTouch = !!event.nativeEvent.altitudeAngle;
  // };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Draw Something</Text>
      <View style={styles.wrapper} onPointerMove={onMove}>
        <Svg height={height * 0.8} width={width}>
          <Path
            d={path.join('')}
            stroke={'blue'}
            fill={'transparent'}
            strokeWidth={2}
            strokeLinejoin={'round'}
            strokeLinecap={'round'}
          />
        </Svg>
      </View>

      {/* <View style={styles.inputContainer}>
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
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderColor: 'blue',
    borderWidth: 2,
    height: height * 0.8,
    width,
  },
  label: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
  },
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
