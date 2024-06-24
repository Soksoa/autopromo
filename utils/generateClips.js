// utils/generateClips.js
export default function generateClips(duration, bpm) {
  const clips = [];
  const beatsPerClip = 1; // You can adjust this to change the number of beats per clip

  // Calculate milliseconds per beat
  const msPerBeat = 60000 / bpm;

  // Calculate number of clips
  const numberOfClips = Math.ceil(duration / msPerBeat / beatsPerClip);

  // Generate clips
  for (let i = 0; i < numberOfClips; i++) {
    const start = i * msPerBeat * beatsPerClip;
    const end = (i + 1) * msPerBeat * beatsPerClip - 1; // Subtract 1 to have inclusive end

    const clip = {
      start,
      end,
      clip: `path/to/clip_${i + 1}` // Example path
    };

    clips.push(clip);
  }

  return clips;
};
