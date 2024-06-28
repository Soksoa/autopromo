import React, { useEffect, useState } from 'react';
import { StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { Text, View } from '../../components/Themed';
import { router } from 'expo-router'

import { createProject } from '@/utils/createProject';

export default function ProjectsTabScreen() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const projectDirectory = FileSystem.documentDirectory;
      const projectsList = await FileSystem.readDirectoryAsync(projectDirectory);
      setProjects(projectsList);
    } catch (error) {
      console.error('Error loading projects:', error);
      console.log('Error', 'Failed to load projects. Please try again.');
    }
  };

  const handleCreateProject = async () => {
    await router.navigate('/createProjectModal');
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.itemText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      
      <Button onPress={handleCreateProject} title="Create project!" />
      <FlatList
        data={projects}
        keyExtractor={(item) => item}
        renderItem={renderItem}
        style={styles.list}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  list: {
    width: '100%',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
});
