import { useState } from 'react'
import KeyboardKeyWhite from './components/keyboard-key-white'
import KeyboardKeyBlack from './components/keyboard-key-black'
import WriterTitle from './components/writer-title'
import TurnButton from './components/turn-button'
import VolumeControl from './components/volume-control'//eliminar si no sirve
import BaseButton from './components/base-button'
import './App.css'

function App() {
  //const [isOn, setIsOn] = useState(initialIsOn)
  const [volume, setVolume] = useState(50)
  //const [isMuted, setIsMuted] = useState(false); // Estado inicial del botón de encendido/apagado


  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  //const handleVolumeChange = (event) => {
  //  setVolume(Number(event.target.value)); // Convierte el valor del rango a número y actualiza el estado del volumen
  //};

  const handleClick = () => {
    console.log("Botón clickeado");
  };

  const handleKeyUp = () => {
    console.log("Botón soltado");
  }

  const handleVolume = (e) => {
    audio.volume = e.target.value; 
  }

  return (
    <>
     <div>
     <WriterTitle/>
     <br />
     <br />
      <section className='body'>
        <div className="wrapper">
          <aside className='header'>
            <h2>Keyboard 1.0</h2>
            <div className="column volume-slider">
              <span>Volume</span>
              <input type="range" 
              min="0" max="100" 
              value={volume} 
              onChange={handleVolumeChange}/>
              <span>{volume}</span>
            </div>
              <BaseButton/>
                <TurnButton initialIsOn={false}>
                </TurnButton>
          </aside>
           <ul className="piano-keys">
            {/* 1 to 5 - first group of keys - 3 white y 2 black */}
            <KeyboardKeyWhite
              keyToPress="c" soundFile="A0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                C1
            </KeyboardKeyWhite>
            <KeyboardKeyBlack
              keyToPress="b" soundFile="As0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                B
            </KeyboardKeyBlack>
            <KeyboardKeyWhite
              keyToPress="a" soundFile="B0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            <KeyboardKeyBlack
              keyToPress="b" soundFile="Cs1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                B
            </KeyboardKeyBlack>
            <KeyboardKeyWhite
              keyToPress="a" soundFile="C0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            {/* 6 to 12 -second group of keys - 4 white y 3 black */}
            <KeyboardKeyWhite
              keyToPress="a" soundFile="D0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            <KeyboardKeyBlack
              keyToPress="b" soundFile="D1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                B
            </KeyboardKeyBlack>
            <KeyboardKeyWhite
              keyToPress="a" soundFile="E0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            <KeyboardKeyBlack
              keyToPress="b" soundFile="As0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                B
            </KeyboardKeyBlack>
            <KeyboardKeyWhite
              keyToPress="a" soundFile="F0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            <KeyboardKeyBlack
              keyToPress="b" soundFile="Cs1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                B
            </KeyboardKeyBlack>
            <KeyboardKeyWhite
              keyToPress="a" soundFile="G0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            {/* 13 to 17 - third group of keys - 3 white y 2 black */}
            <KeyboardKeyWhite
              keyToPress="a" soundFile="A1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            <KeyboardKeyBlack
              keyToPress="b" soundFile="Ds1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                B
            </KeyboardKeyBlack>
            <KeyboardKeyWhite
              keyToPress="a" soundFile="B1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            <KeyboardKeyBlack
              keyToPress="b" soundFile="As0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                B
            </KeyboardKeyBlack>
            <KeyboardKeyWhite
              keyToPress="a" soundFile="C1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            {/* 18 to 24 - fourth group of keys - 4 blacas y 3 negras */}
            <KeyboardKeyWhite
              keyToPress="a" soundFile="D1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            <KeyboardKeyBlack
              keyToPress="b" soundFile="Cs1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                B
            </KeyboardKeyBlack>
            <KeyboardKeyWhite
              keyToPress="a" soundFile="E1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            <KeyboardKeyBlack
              keyToPress="b" soundFile="Ds1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                B
            </KeyboardKeyBlack>
            <KeyboardKeyWhite
              keyToPress="a" soundFile="F1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            <KeyboardKeyBlack
              keyToPress="b" soundFile="Cs1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                B
            </KeyboardKeyBlack>
            <KeyboardKeyWhite
              keyToPress="a" soundFile="G1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            {/* 25 to 29 - fifth group of keys - 3 white y 2 black */}
            <KeyboardKeyWhite
              keyToPress="a" soundFile="A2.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            <KeyboardKeyBlack
              keyToPress="b" soundFile="Cs1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                B
            </KeyboardKeyBlack>
            <KeyboardKeyWhite
              keyToPress="a" soundFile="B2.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            <KeyboardKeyBlack
              keyToPress="b" soundFile="Cs1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                B
            </KeyboardKeyBlack>
            <KeyboardKeyWhite
              keyToPress="a" soundFile="C2.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            {/* 30 to 36 - sixth group of keys - 4 blacas y 3 negras */}
            <KeyboardKeyWhite
              keyToPress="a" soundFile="D2.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            <KeyboardKeyBlack
              keyToPress="b" soundFile="Cs1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                B
            </KeyboardKeyBlack>
            <KeyboardKeyWhite
              keyToPress="a" soundFile="E2.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            <KeyboardKeyBlack
              keyToPress="b" soundFile="As0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                B
            </KeyboardKeyBlack>
            <KeyboardKeyWhite
              keyToPress="a" soundFile="F2.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            <KeyboardKeyBlack
              keyToPress="b" soundFile="As0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                B
            </KeyboardKeyBlack>
            <KeyboardKeyWhite
              keyToPress="a" soundFile="G2.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            {/* 37 to 41 - seventh group of keys - 3 white y 2 black */}
            <KeyboardKeyWhite
              keyToPress="a" soundFile="A3.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            <KeyboardKeyBlack
              keyToPress="b" soundFile="As0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                B
            </KeyboardKeyBlack>
            <KeyboardKeyWhite
              keyToPress="a" soundFile="B3.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            <KeyboardKeyBlack
              keyToPress="b" soundFile="As0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                B
            </KeyboardKeyBlack>
            <KeyboardKeyWhite
              keyToPress="a" soundFile="C3.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            {/* 42 to 48 - eighth group of keys - 4 blacas y 3 negras */}
            <KeyboardKeyWhite
              keyToPress="a" soundFile="D3.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            <KeyboardKeyBlack
              keyToPress="b" soundFile="As0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                B
            </KeyboardKeyBlack>
            <KeyboardKeyWhite
              keyToPress="a" soundFile="E3.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            <KeyboardKeyBlack
              keyToPress="b" soundFile="As0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                B
            </KeyboardKeyBlack>
            <KeyboardKeyWhite
              keyToPress="a" soundFile="F3.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            <KeyboardKeyBlack
              keyToPress="b" soundFile="As0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                B
            </KeyboardKeyBlack>
            <KeyboardKeyWhite
              keyToPress="a" soundFile="G3.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            {/* 49 to 53 - nineth group of keys - 3 white y 2 black */}
            <KeyboardKeyWhite
              keyToPress="a" soundFile="A4.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            <KeyboardKeyBlack
              keyToPress="b" soundFile="As0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                B
            </KeyboardKeyBlack>
            <KeyboardKeyWhite
              keyToPress="a" soundFile="B4.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            <KeyboardKeyBlack
              keyToPress="b" soundFile="As0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                B
            </KeyboardKeyBlack>
            <KeyboardKeyWhite
              keyToPress="a" soundFile="C4.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            {/* 54 to 60 - prefinal group of keys - 4 blacas y 3 negras */}
            <KeyboardKeyWhite
              keyToPress="a" soundFile="D4.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            <KeyboardKeyBlack
              keyToPress="b" soundFile="As0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                B
            </KeyboardKeyBlack>
            <KeyboardKeyWhite
              keyToPress="a" soundFile="E4.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            <KeyboardKeyBlack
              keyToPress="b" soundFile="Ds1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                B
            </KeyboardKeyBlack>
            <KeyboardKeyWhite
              keyToPress="a" soundFile="F4.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            <KeyboardKeyBlack
              keyToPress="b" soundFile="Ds1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                B
            </KeyboardKeyBlack>
            <KeyboardKeyWhite
              keyToPress="a" soundFile="G4.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
            {/* 61 - final group of keys - 1 white do */}
            <KeyboardKeyWhite
              keyToPress="a" soundFile="A5.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A
            </KeyboardKeyWhite>
          </ul>
        </div>
        <footer className="footer-container">
          <p className='footer-text'>© 2024 Franco Vicente</p>
        </footer>
      </section>
     </div>
    </>
  )
}

export default App
