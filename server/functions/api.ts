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
            let buffer = Buffer.alloc(0);
            console.log(`Receiving file: ${filename}, MIME type: ${mimeType}`);

            file.on('data', (data) => {
                console.log(`File data chunk received, size: ${data.length}`);
                buffer = Buffer.concat([buffer, data]);
            });

            file.on('end', () => {
                console.log(`File upload complete, total size: ${buffer.length}`);
                fields.audio.push({
                    filename,
                    type: mimeType,
                    content: buffer,
                });
            });
        });

        bb.on('close', () => {
            console.log('Form parsing complete.');
            resolve(fields);
        });

        bb.end(Buffer.from(event.body, 'base64'));
    });
}

function bufferToAudioBuffer(audioContext, buffer) {
    return new Promise((resolve, reject) => {
        audioContext.decodeAudioData(buffer, (audioBuffer) => {
            resolve(audioBuffer);
        }, (error) => {
            console.error('Error decoding audio data:', error);
            reject(error);
        });
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
            console.log('Handling POST request.');
            const fields = await parseMultipartForm(event);

            if (!fields || !fields.audio) {
                throw new Error('Unable to parse audio');
            }

            console.log('Parsed fields:', fields);

            const buffer = fields.audio[0].content;
            console.log('Buffer length:', buffer.length);

            const arrayBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
            console.log('Converted to ArrayBuffer, length:', arrayBuffer.byteLength);

            const audioContext = new (globalThis.AudioContext || globalThis.webkitAudioContext)();
            const audioBuffer = await bufferToAudioBuffer(audioContext, arrayBuffer);

            console.log('AudioBuffer:', audioBuffer);

            const tempo = await analyze(audioBuffer.getChannelData(0)); // Get channel data for tempo analysis

            console.log('Tempo:', tempo);

            return {
                statusCode: 200,
                body: JSON.stringify({ message: 'Audio processed successfully!', tempo }), // Return JSON response
            };
        } catch (error) {
            console.error('Error processing audio:', error);
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
