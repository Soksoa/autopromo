import * as FileSystem from 'expo-file-system';
import { Alert } from 'react-native';

export const createProject = async ({ name, audio }) => {
  try {
    const projectName = name; // Replace with user input or generated name
    const projectDirectory = `${FileSystem.documentDirectory}${projectName}/`;

    // Define the structure (you can customize this as needed)
    const folders = ['Recordings', 'Audio'];

    // Create the project directory
    await FileSystem.makeDirectoryAsync(projectDirectory, { intermediates: true });

    // Create subdirectories inside the project directory
    for (let folder of folders) {
      await FileSystem.makeDirectoryAsync(projectDirectory + folder, { intermediates: true });
    }

    // Define project data
    const projectData = {
      name: projectName,
      audioFiles: audio || [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // Path to the JSON file
    const projectDataFilePath = `${projectDirectory}projectData.json`;

    // Write project data to the JSON file
    await FileSystem.writeAsStringAsync(projectDataFilePath, JSON.stringify(projectData));

    console.log('Success', 'Project created successfully with project data file!');
    Alert.alert('Success', 'Project created successfully!');
  } catch (error) {
    console.error('Error creating project:', error);
    Alert.alert('Error', 'Failed to create project. Please try again.');
  }
};
