import React, { useRef, useState } from 'react';
import {Text, View} from '@/components/Themed'
import { StyleSheet, TextInput, Button} from 'react-native';
import PagerView from 'react-native-pager-view'
import { createProject } from '@/utils/createProject';
import * as DocumentPicker from 'expo-document-picker'
import {uploadAudio} from '@/utils/uploadAudio'


export default function CreateProjectScreen() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [song, setSong] = useState('')
  const [bpm, setBpm] = useState(null);
  const [error, setError] = useState(null);

  const handleUploadSong = async () => {
    const options = {
      type: 'audio/*'
    }

    try {
      const song = await DocumentPicker.getDocumentAsync(options);

      const audioName = song.assets[0].name
      const audioUri = song.assets[0].uri
      const audioMimeType = song.assets[0].mimeType

      uploadAudio(audioUri, audioName, audioMimeType)
    
    } catch (error) {
      console.error("Error picking document:", error);
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
      <Button title="Upload song" onPress={handleUploadSong} />
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
