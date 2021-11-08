import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList, } from 'react-native';
import GoalInput from "./components/GoalInput"
import GoalItem from "./components/GoalItem"

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])
  const [showModal, setShowModal] = useState(false)

  const goalinputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    if (enteredGoal) {
      setCourseGoals(currentGoals => [...currentGoals, { uid: Math.random().toString(), value: enteredGoal }])
      console.log(courseGoals)
      setEnteredGoal('')
      setShowModal(modalState => !modalState)
    }
  }

  const deleteGoalHandler = (goalId) => {
    // console.log("goalid", goalId)
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.uid !== goalId)
    })
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setShowModal(modalState => !modalState)} />
      <GoalInput showModal={showModal} setShowModal={setShowModal} goalinputHandler={goalinputHandler} addGoalHandler={addGoalHandler} enteredGoal={enteredGoal} />

      <FlatList
        data={courseGoals}
        keyExtractor={(item, index) => item.uid}
        renderItem={itemData => (
          <GoalItem itemData={itemData} onDelete={deleteGoalHandler} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
