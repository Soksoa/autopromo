import axios from 'axios';

export const detectBpm = async (uri) => {
  console.log('URI received:', uri); // Log the URI received

  let formData = new FormData();
  formData.append('audio', {
    uri,
    name: 'audiofile.mp3', // Name of the file
    type: 'audio/mpeg', // Adjust the type according to your audio file type
  });

  try {
    console.log('Sending request to upload API...');
    const response = await axios.post('https://wondrous-selkie-3d1dbf.netlify.app/.netlify/functions/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('Response received from upload API:', response.data); // Log the response data
    // Assuming setBpm and setError are defined elsewhere
    setBpm(response.data.bpm); // Assuming the response contains a 'bpm' field
    setError(null);
  } catch (err) {
    console.error('Error occurred during upload:', err); // Log any errors that occur
    setError(err.message);
    setBpm(null);
  }
};
