import React, { useRef, useState } from 'react';
import {Text, View} from '@/components/Themed'
import { StyleSheet, TextInput, Button} from 'react-native';
import PagerView from 'react-native-pager-view'
import { createProject } from '@/utils/createProject';



export default function CreateProjectScreen() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [bpm, setBpm] = useState('');
  const [song, setSong] = useState('')

  return (
    <View>
      <Text style={styles.title}>Create New Project</Text>
    <TextInput
      style={styles.input}
      placeholder="Project Name"
      value={name}  
      onChangeText={setName}
    />
    <TextInput
      style={styles.input}
      placeholder="Project Description"
      value={description}
      onChangeText={setDescription}
    />

  <TextInput
      style={styles.input}
      placeholder="Beats per minute"
      value={name}  
      onChangeText={setName}
      inputMode='numeric'
    />
      <Button title="Upload song" />
      <Text>Song selected:</Text>
      <View style={styles.separator} />
      <Button title="Create project" />
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagerView: {
    width: "100%",
    height: "100%",
  },

  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
    borderRadius: 4,
    color: 'white'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
