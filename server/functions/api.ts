import busboy from 'busboy';
import { Handler } from '@netlify/functions';
import { analyze } from 'web-audio-beat-detector';

type Fields = {
    audio: {
        filename: string;
        type: string;
        content: Buffer;
    }[];
};

function parseMultipartForm(event): Promise<Fields> {
    return new Promise((resolve) => {
        const fields = { audio: [] };
        const bb = busboy({ headers: event.headers });

        bb.on('file', (name, file, info) => {
            const { filename, mimeType } = info;

            file.on('data', (data) => {
                if (!fields[name]) fields[name] = [];

                fields[name].push({
                    filename,
                    type: mimeType,
                    content: data,
                });
            });
        });

        bb.on('close', () => {
            resolve(fields);
        });

        bb.end(Buffer.from(event.body, 'base64'));
    });
}

export const handler: Handler = async (event) => {
    if (event.httpMethod === 'GET') {
        // Handle GET request
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'API is working!' }), // Return JSON response
        };
    } else if (event.httpMethod === 'POST') {
        // Handle POST request
        try {
            const fields = await parseMultipartForm(event);

            if (!fields || !fields.audio) {
                throw new Error('Unable to parse audio');
            }

            console.log('fields is: ', fields);
            console.log('audio is: ', fields.audio);

            // Process audio data here...

            return {
                statusCode: 200,
                body: JSON.stringify({ message: 'Audio processed successfully!' }), // Return JSON response
            };
        } catch (error) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: error.message }), // Return JSON response
            };
        }
    } else {
        // Handle unsupported methods
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method Not Allowed' }), // Return JSON response
        };
    }
};
