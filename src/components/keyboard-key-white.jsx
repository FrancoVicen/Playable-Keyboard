import React, { useState, useEffect } from "react";

export function KeyboardKeyWhite({ children, index, onClick, keyToPress, soundFile, previousSiblingClass, volume }) {
  const [isPressed, setIsPressed] = useState(false);
  const [audio, setAudio] = useState(null);
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

  const handleMouseDown = () => {
    setIsPressed(true);
    startSound();
  };

  const handleMouseUp = () => {
    setIsPressed(false);
    stopSound();
  };

  const handleKeyPress = (event) => {
    if (event.key.toLowerCase() === keyToPress.toLowerCase()) {
      setIsPressed(true);
      startSound();
    }
  };

  const handleVolume = (e) => {
    audio.volume = e.target.value;
}

  const startSound = () => {
    const newAudio = new Audio(`./src/sounds/${soundFile}`);
    newAudio.loop = true;
    newAudio.volume = volume / 100;
    newAudio.play();
    setAudio(newAudio);
  };

  const stopSound = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setAudio(null);
    }
  };

  useEffect(() => {
    window.addEventListener("keypress", handleKeyPress);
    window.addEventListener("keyup", stopSound);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
      window.removeEventListener("keyup", stopSound);
      window.removeEventListener("mouseup", handleMouseUp);
      stopSound();
    };
  }, [keyToPress, soundFile, volume]);

  return (
      <li
      className={`key white ${groupClass}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <span>{children}</span>
    </li>
    
  );
}

export default KeyboardKeyWhite;