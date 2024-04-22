import React, { useState, useEffect } from 'react';

const BaseButton = () => {
  const [audio] = useState(new Audio('./src/sounds/ambient-piano.mp3'));
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0; // Reinicia la posición del audio para evitar que se reanude desde donde se pausó
    } else {
      audio.loop = true;
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleKeyPress = (event) => {
    if (event.key === ' ') {
      toggleAudio();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <button onClick={toggleAudio}>
      {isPlaying ? 'Detener Música (Espacio)' : 'Reproducir Música (Espacio)'}
    </button>
  );
};

export default BaseButton;