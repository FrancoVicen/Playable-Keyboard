import React, { useRef, useState, useEffect } from 'react';
import useKeyboardSound from '../customHooks/use-keyboard-sound';
import useMouseSound from '../customHooks/use-mouse-sound';

const KeyboardKeyWhite = ({ keyCode, soundFile, children, index, volume = 1, setKeyVolume }) => {
  const audioRef = useRef(null);
  useKeyboardSound(keyCode, soundFile);
  const mouseSoundRef = useMouseSound(soundFile);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const handleMouseUp = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = Math.max(0, Math.min(1, volume));
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  let groupClass = '';

  switch (index) {
    case 0:
      groupClass = 'group-0';
      break;
    case 1:
      groupClass = 'group-1';
      break;
    case 2:
      groupClass = 'group-2';
      break;
    case 3:
      groupClass = 'group-3';
      break;
    case 4:
      groupClass = 'group-4';
      break;
    case 5:
      groupClass = 'group-5';
      break;
    default:
      groupClass = '';
      break;
  }

  return (
    <li
      className={`key white ${groupClass}`}
      onMouseUp={handleMouseUp}
    >
      <span>{children}</span>
      <audio ref={audioRef} src={`./src/sounds/${soundFile}`} onEnded={handleAudioEnded} />
    </li>
  );
};

export default KeyboardKeyWhite;
