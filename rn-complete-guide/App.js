import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);
    
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };
    
    const addGoalHandler = () => {
        setCourseGoals(currentGoals => [
            ...courseGoals,
            { key: enteredGoal}
        ]);
    };
    
  return (
    <View style={styles.screen}>
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Course Goals"
                style={styles.textInput}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button
                title="Add"
                onPress={addGoalHandler}
            />
        </View>
        <FlatList
            data={courseGoals} renderItem={itemData => (
                <View style={styles.listItem}>
                    <Text>{itemData.item}</Text>
                </View>
            )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textInput: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10
    },
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});
