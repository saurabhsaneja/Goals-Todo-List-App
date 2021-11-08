import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

const GoalItem = ({ itemData, onDelete }) => {
    // console.log("itemData.uid", itemData.item.uid)
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onDelete.bind(this, itemData.item.uid)}>
            <View style={styles.listItem}>
                <Text>{itemData.item.value}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: "#ccc",
        borderColor: "black",
        borderWidth: 1
    }
});


export default GoalItem
