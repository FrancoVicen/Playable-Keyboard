import React, { useState, useEffect } from 'react';

const BaseButton = () => {
  const [audio] = useState(new Audio('../../sounds/base.mp3'));
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
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
    <button className='sound-base' onClick={toggleAudio}>
      {isPlaying ? 'Stop Base' : 'Play Base (Space Bar)'}
    </button>
  );
};

export default BaseButton;