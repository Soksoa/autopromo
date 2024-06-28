const apiUrl = 'https://wondrous-selkie-3d1dbf.netlify.app/.netlify/functions/api'; // Adjust the URL based on your local Netlify Dev server or production URL

// Example function to upload audio file
export const uploadAudio = async (fileUri, filename, mimeType) => {
  try {
    let formData = new FormData();
    formData.append('file', {
      uri: fileUri,
      name: filename,
      type: mimeType,
    });

    let response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json',
        'Netlify-Function': 'true', // Optional header if needed by your Netlify function
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let result = await response.json();
    console.log('Upload successful:', result);
    return result;
  } catch (error) {
    console.error('Error uploading audio:', error);
    throw error;
  }
};
