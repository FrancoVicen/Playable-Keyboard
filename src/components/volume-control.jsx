import React, { useState } from 'react';

const VolumeControl = () => {
    const [volume, setVolume] = useState(50)
  
    const handleVolumeChange = (event) => {
      setVolume(event.target.value);
  };

  return (
    <div className="column volume-slider">
        <span>Volume</span>
        <input type="range" 
        min="0" max="100" 
        value={volume} 
        onChange={handleVolumeChange}/>
        <span>{volume}</span>
    </div>
  );
};

export default VolumeControl;