import React, { useState } from 'react';
import {Text, View} from '@/components/Themed'
import { StyleSheet, TextInput, Button} from 'react-native';
import { createProject } from '@/utils/createProject';

export default function CreateProjectScreen() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateProject = async () => {
    if (name.trim() === '') {
      Alert.alert('Validation Error', 'Project name is required.');
      return;
    }

    await createProject({ name, description });
  };

  return (
    <View style={styles.container}>
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
      <Button title="Create project" onPress={handleCreateProject} />
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
