import axios from 'axios';

export const testApi = async () => {
    const startTime = new Date();
    console.log(`[${startTime.toISOString()}] Testing API connectivity...`);

    try {
        const response = await axios.get('https://wondrous-selkie-3d1dbf.netlify.app/.netlify/functions/api');
        const endTime = new Date();
        const elapsedTime = endTime - startTime;

        console.log(`[${endTime.toISOString()}] API Test Response (Status ${response.status}):`, response.data);
        console.log(`[${endTime.toISOString()}] API Test completed in ${elapsedTime}ms`);
        
        return true; // API is reachable
    } catch (error) {
        const endTime = new Date();
        console.error(`[${endTime.toISOString()}] Error testing API:`, error.message);
        
        return false; // API is not reachable
    }
};
