import { useEffect } from 'react';

const useKeyboardSound = (key, soundFile) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === key) {
        const audio = new Audio(`../../src/sounds/${soundFile}`);
        audio.play();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [key, soundFile]);
};

export default useKeyboardSound;