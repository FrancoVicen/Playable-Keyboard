// import { useEffect, useRef, useState } from 'react';

// const useMouseSound = (audioFile) => {
//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   useEffect(() => {
//     const handleMouseUp = () => {
//       if (audioRef.current && !isPlaying) {
//         audioRef.current.currentTime = 0; // Reinicia el audio al inicio
//         audioRef.current.play();
//         setIsPlaying(true);
//       }
//     };

//     const handleAudioEnded = () => {
//       setIsPlaying(false);
//     };

//     if (audioRef.current) {
//       audioRef.current.addEventListener('ended', handleAudioEnded);
//     }

//     window.addEventListener('mouseup', handleMouseUp);

//     return () => {
//       if (audioRef.current) {
//         audioRef.current.removeEventListener('ended', handleAudioEnded);
//       }
//       window.removeEventListener('mouseup', handleMouseUp);
//     };
//   }, [audioFile, isPlaying]);

//   return audioRef;
// };

// export default useMouseSound;
import { useEffect, useRef, useState } from 'react';

const useMouseSound = (soundFile) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleMouseUp = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.currentTime = 0; // Reinicia el audio al inicio
        audioRef.current.play();
        setIsPlaying(true);
      }
    };

    const handleAudioEnded = () => {
      setIsPlaying(false);
    };

    if (!audioRef.current) {
      audioRef.current = new Audio(`../../src/sounds/${soundFile}`);
      audioRef.current.addEventListener('ended', handleAudioEnded);
    }

    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleAudioEnded);
      }
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [soundFile, isPlaying]);

  return audioRef;
};

export default useMouseSound;