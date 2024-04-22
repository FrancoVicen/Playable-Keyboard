import React, { useState, useEffect } from "react";

export function KeyboardKeyWhite({ children, onClick, keyToPress, soundFile, previousSiblingClass, volume }) {
  const [isPressed, setIsPressed] = useState(false);
  const [audio, setAudio] = useState(null);

  // const keyClass = `${className} ${previousSiblingClass === 'key white' ? 'key black' : 'key white'}`;
  // const keyClass =
  // children && children.props && children.props.className
  //   ? `${children.props.className} ${previousSiblingClass === 'key white' ? 'key black' : ''}`
  //   : previousSiblingClass === 'key white' ? 'key black' : '';

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
    audio.volume = e.target.value; // passing the range slider value as an audio volume
}

  const startSound = () => {
    const newAudio = new Audio(`./src/sounds/${soundFile}`);
    newAudio.loop = true; // Reproducir en bucle mientras se mantiene presionado
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
    // <ul className="piano-keys">
      <li
      // className={`keyboard-key ${isPressed ? "is-pressed" : ""}`}
      className="key white"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <span>{children}</span>
    </li>
    // </ul>
    
  );
}

export default KeyboardKeyWhite;