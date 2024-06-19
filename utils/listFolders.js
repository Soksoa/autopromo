import * as FileSystem from 'expo-file-system';

const listFolders = async () => {
    try {
      const directoryUri = FileSystem.documentDirectory;
      const items = await FileSystem.readDirectoryAsync(directoryUri);
      const folders = items.filter(item => item.isDirectory);
  
      console.log('Folders in directory:', folders);
    } catch (error) {
      console.error('Error listing folders:', error);
    }
  };
  