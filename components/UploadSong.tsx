import * as FileSystem from 'expo-file-system';
import { Alert, TextInput, StyleSheet, Button } from 'react-native';
import { Text, View } from '@/components/Themed'
import { createProject } from '@/utils/createProject';

export default function UploadSong() {

    const handleCreateProject = async () => {
        if (name.trim() === '') {
          Alert.alert('Validation Error', 'Project name is required.');
          return;
        }
    
        await createProject({ name, description });
      };

    return (
        <View>
            <Text style={styles.title}>Upload song for peak generation</Text>
            <Button title="Create project" onPress={handleCreateProject} />
        </View>
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
  