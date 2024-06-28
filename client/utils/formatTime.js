export default function formatTime(milliseconds) {
    const minutes = Math.floor((milliseconds % 3600000) / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const ms = milliseconds % 1000;
  
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    const formattedMilliseconds = String(ms).padStart(3, '0');
  
    return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
  };
  