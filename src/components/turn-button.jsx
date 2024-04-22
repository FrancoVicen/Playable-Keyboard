import { useState } from "react";
import KeyboardKeyBlack from "./keyboard-key-black";

function TurnButton({initialIsOn}) {

  const [isOn, setIsOn] = useState(initialIsOn);
  //const [volume, setVolume] = useState(volume);

  const handleClick1 = () => {
    setIsOn(!isOn);
    //setVolume(isOn ? 0 : 50)
  };
  const text = isOn ? "On" : "Off";
  const buttonClassName = isOn
    ? "keyboard-setings-turnOnOff-button is-on"
    : "keyboard-setings-turnOnOff-button";

  return (
    <>
      <button className={buttonClassName} onClick={handleClick1}>
        <span className="keyboard-setings-turnOnOff-text">{text}</span>
        <span className="keyboard-setings-turnOnOff-stopOn">Turn</span>
      </button>
    </>
  );
}

export default TurnButton;