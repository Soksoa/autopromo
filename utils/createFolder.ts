import * as FileSystem from 'expo-file-system';

export const createFolder = async (folderName: string) => {
  const folderUri = `${FileSystem.documentDirectory}${folderName}`;

  const folderInfo = await FileSystem.getInfoAsync(folderUri);

  if (!folderInfo.exists) {
    try {
      await FileSystem.makeDirectoryAsync(folderUri, { intermediates: true });
      console.log('Folder created successfully');
    } catch (error) {
      console.error('Error creating folder', error);
    }
  } else {
    console.log('Folder already exists');
  }
};
