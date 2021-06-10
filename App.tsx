import React, { useState } from "react";
import { StyleSheet, View, Text, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Alert, Keyboard } from "react-native";
import { Entypo } from '@expo/vector-icons';

import Task from "./components/task";

const App = () => {
  const [form, setForm] = useState<string>('')
  const [tasks, setTasks] = useState<string[]>([])
  const handleSubmit = () => {
    if (form.length < 1) {
      Alert.alert("Warning", "Empty input!")
    } else if (!!tasks.find(el => el === form) === false) {
      setTasks([...tasks, form])
    } else {
      Alert.alert("Error", "Task already exists!")
    }
    Keyboard.dismiss()
    setForm('')
  }
  const handleDestroy = (task: string) => {
    setTasks(tasks.filter(el => el !== task))
  }
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.header}>VOKURA</Text>
        <View style={styles.list}>
          {tasks.map((el, index) => (
            <Task key={index} title={el} handleDestroy={handleDestroy} />
          ))}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputWrapper}
      >
        <TextInput style={styles.input} placeholder="Task name." value={form} onChangeText={(value) => setForm(value)} />
        <TouchableOpacity onPress={() => handleSubmit()}>
          <View style={styles.iconWrapper}>
            <Entypo name="plus" size={32} color="#6a7efc" />
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  wrapper: {
    padding: 80,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "lightgray",
    textAlign: "center"
  },
  list: {
    marginTop: 30,
  },
  inputWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    width: 250,
    backgroundColor: '#edf2f6',
    borderRadius: 20,
  },
  iconWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#edf2f6',
    shadowOpacity: 0.6,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App
