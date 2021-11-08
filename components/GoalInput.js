import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button, Modal, TouchableWithoutFeedback, Keyboard } from "react-native"


const GoalInput = ({ goalinputHandler, addGoalHandler, enteredGoal, showModal, setShowModal }) => {

    console.log("showModal", showModal)
    return (
        <Modal visible={showModal} animationType="slide">
            {/* <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}> */}
            <View style={styles.inputContainer}>
                <TextInput
                    placehoder="Course Goal"
                    style={styles.input}
                    onChangeText={goalinputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler} style={styles.button} />
                    </View>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={() => setShowModal(modalState => !modalState)} />
                    </View>
                </View>
            </View>
            {/* </TouchableWithoutFeedback> */}
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: "80%",
        marginBottom: 10,
        padding: 10,
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row-reverse',
        justifyContent: "space-between",
        width: "60%",
    },
    button: {
        width: "40%"
    }
});

export default GoalInput
