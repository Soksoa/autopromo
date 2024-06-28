import busboy from 'busboy';
import { Handler } from '@netlify/functions';
import tempo from 'tempo';

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

async function detectBPM(audioBuffer: Buffer): Promise<number> {
    const audioData = new Uint8Array(audioBuffer);
    const detectedBPM = await tempo(audioData);
    return detectedBPM;
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

            const audioBuffer = fields.audio[0].content; // Assuming only one audio file is uploaded

            // Detect BPM
            const bpm = await detectBPM(audioBuffer);

            return {
                statusCode: 200,
                body: JSON.stringify({ bpm }), // Return detected BPM
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
