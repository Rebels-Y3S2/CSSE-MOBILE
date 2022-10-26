import { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function Starting () {
  const [goal, setGoal] = useState('')
  const [goals, setGoals] = useState([])

  function hanldeTextInput (val) {
    console.log(val)
    setGoal(val)
  }

  function handleOnPress () {
    setGoals([...goals, goal])
    setGoal('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Enter your goals' onChangeText={hanldeTextInput} />
        <Button title="Add Goal" onPress={handleOnPress} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 20,
    height: '100%'
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#CCCCCC'
  },
  goalsContainer: {
    flex: 4
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    width: '65 %',
    padding: 8
  }
})
