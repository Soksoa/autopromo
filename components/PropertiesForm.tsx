import * as FileSystem from 'expo-file-system';
import { Alert, TextInput, Button, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed'
import { useState } from 'react'
import { createProject } from '@/utils/createProject';

export default function PropertiesForm({pagerRef}) {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleNextPage = () => {
    if (name.trim() === '') {
      Alert.alert('Validation Error', 'Project name is required.');
      return;
    }
    // Navigate to the next page
    if (pagerRef && pagerRef.current) {
      pagerRef.current.setPage(1);
    }
  };

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
    <Button title="Next" onPress={handleNextPage} /></View>
  )
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
});
