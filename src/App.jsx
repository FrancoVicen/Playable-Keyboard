import { useState } from 'react'
import KeyboardKeyWhite from './components/keyboard-key-white'
import KeyboardKeyBlack from './components/keyboard-key-black'
import WriterTitle from './components/writer-title'
import TurnButton from './components/turn-button'
import BaseButton from './components/base-button'
import './App.css'

function App() {
  const [volume, setVolume] = useState(50)


  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  const handleClick = () => {
    console.log("Botón clickeado");
  };

  const handleKeyUp = () => {
    console.log("Botón soltado");
  };

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
            <div >
              <span className='volume-text'>Volume</span>
              <input  className="volume-input" type="range" 
              min="0" max="100" 
              value={volume} 
              onChange={handleVolumeChange}/>
              <span className='volume-input-valueText'>{volume}</span>
            </div>
              <BaseButton/>
                <TurnButton initialIsOn={false}>
                </TurnButton>
          </aside>
           <ul className="piano-keys">
            {/* 1 to 5 - first group of keys - 3 white y 2 black */}
            <KeyboardKeyWhite index={10}
              keyCode="a" soundFile="A0.ogg" onClick={handleClick} onKeyUp={handleKeyUp}  setKeyVolume={setVolume} volume={volume}>
                A
            </KeyboardKeyWhite>
            <KeyboardKeyBlack index={10}
              keyCode="q" soundFile="As0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                Q
            </KeyboardKeyBlack>
            <KeyboardKeyWhite index={10}
              keyCode="s" soundFile="B0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                S
            </KeyboardKeyWhite>
            <KeyboardKeyBlack index={10}
              keyCode="w" soundFile="Cs1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                W
            </KeyboardKeyBlack>
            <KeyboardKeyWhite index={10}
              keyCode="d" soundFile="C0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                D
            </KeyboardKeyWhite>
            {/* 6 to 12 -second group of keys - 4 white y 3 black */}
            <KeyboardKeyWhite index={10}
              keyCode="f" soundFile="D0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                F
            </KeyboardKeyWhite>
            <KeyboardKeyBlack index={10}
              keyCode="e" soundFile="Ds1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                E
            </KeyboardKeyBlack>
            <KeyboardKeyWhite index={10}
              keyCode="g" soundFile="E0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                G
            </KeyboardKeyWhite>
            <KeyboardKeyBlack index={10}
              keyCode="r" soundFile="As0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                R
            </KeyboardKeyBlack>
            <KeyboardKeyWhite index={10}
              keyCode="h" soundFile="F0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                H
            </KeyboardKeyWhite>
            <KeyboardKeyBlack index={10}
              keyCode="t" soundFile="Cs1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                T
            </KeyboardKeyBlack>
            <KeyboardKeyWhite index={10}
              keyCode="j" soundFile="G0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                J
            </KeyboardKeyWhite>
            {/* 13 to 17 - third group of keys - 3 white y 2 black */}
            <KeyboardKeyWhite index={1}
              keyCode="k" soundFile="A1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                K
            </KeyboardKeyWhite>
            <KeyboardKeyBlack index={1}
              keyCode="y" soundFile="Ds1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                Y
            </KeyboardKeyBlack>
            <KeyboardKeyWhite index={1}
              keyCode="l" soundFile="B1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                L
            </KeyboardKeyWhite>
            <KeyboardKeyBlack index={1}
              keyCode="u" soundFile="As0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                U
            </KeyboardKeyBlack>
            <KeyboardKeyWhite index={1}
              keyCode="ñ" soundFile="C1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                Ñ
            </KeyboardKeyWhite>
            {/* 18 to 24 - fourth group of keys - 4 blacas y 3 negras */}
            <KeyboardKeyWhite index={2}
              keyCode="z" soundFile="D1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                Z
            </KeyboardKeyWhite>
            <KeyboardKeyBlack index={2}
              keyCode="y" soundFile="Cs1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                Y
            </KeyboardKeyBlack>
            <KeyboardKeyWhite index={2}
              keyCode="x" soundFile="E1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                X
            </KeyboardKeyWhite>
            <KeyboardKeyBlack index={2}
              keyCode="o" soundFile="Ds1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                O
            </KeyboardKeyBlack>
            <KeyboardKeyWhite index={2}
              keyCode="c" soundFile="F1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                C
            </KeyboardKeyWhite>
            <KeyboardKeyBlack index={2}
              keyCode="p" soundFile="Cs1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                P
            </KeyboardKeyBlack>
            <KeyboardKeyWhite index={2}
              keyCode="v" soundFile="G1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                V
            </KeyboardKeyWhite>
            {/* 25 to 29 - fifth group of keys - 3 white y 2 black */}
            <KeyboardKeyWhite index={3}
              keyCode="b" soundFile="A2.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                B
            </KeyboardKeyWhite>
            <KeyboardKeyBlack index={3}
              keyCode="e" soundFile="Cs1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                E
            </KeyboardKeyBlack>
            <KeyboardKeyWhite index={3}
              keyCode="n" soundFile="B2.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                N
            </KeyboardKeyWhite>
            <KeyboardKeyBlack index={3}
              keyCode="r" soundFile="Cs1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                R
            </KeyboardKeyBlack>
            <KeyboardKeyWhite index={3}
              keyCode="a1" soundFile="C2.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A1
            </KeyboardKeyWhite>
            {/* 30 to 36 - sixth group of keys - 4 blacas y 3 negras */}
            <KeyboardKeyWhite index={3}
              kkeyCode="s1" soundFile="D2.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                S1
            </KeyboardKeyWhite>
            <KeyboardKeyBlack index={3}
              keyCode="t" soundFile="Cs1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                T
            </KeyboardKeyBlack>
            <KeyboardKeyWhite index={3}
              keyCode="d1" soundFile="E2.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                D1
            </KeyboardKeyWhite>
            <KeyboardKeyBlack index={3}
              keyCode="y" soundFile="As0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                Y
            </KeyboardKeyBlack>
            <KeyboardKeyWhite index={3}
              keyCode="f1" soundFile="F2.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                F1
            </KeyboardKeyWhite>
            <KeyboardKeyBlack index={3}
              keyCode="u" soundFile="As0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                U
            </KeyboardKeyBlack>
            <KeyboardKeyWhite index={3}
              keyCode="g" soundFile="G2.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                G1
            </KeyboardKeyWhite>
            {/* 37 to 41 - seventh group of keys - 3 white y 2 black */}
            <KeyboardKeyWhite index={4}
              keyCode="h1" soundFile="A3.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                H1
            </KeyboardKeyWhite>
            <KeyboardKeyBlack index={4}
              keyCode="i" soundFile="As0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                I
            </KeyboardKeyBlack>
            <KeyboardKeyWhite index={4}
              keyCode="j1" soundFile="B3.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                J1
            </KeyboardKeyWhite>
            <KeyboardKeyBlack index={4}
              keyCode="p" soundFile="As0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                P
            </KeyboardKeyBlack>
            <KeyboardKeyWhite index={4}
              keyCode="k1" soundFile="C3.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                K1
            </KeyboardKeyWhite>
            {/* 42 to 48 - eighth group of keys - 4 blacas y 3 negras */}
            <KeyboardKeyWhite index={4}
              keyCode="l1" soundFile="D3.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                L1
            </KeyboardKeyWhite>
            <KeyboardKeyBlack index={4}
              keyCode="e" soundFile="As0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                E
            </KeyboardKeyBlack>
            <KeyboardKeyWhite index={4}
              keyCode="ñ1" soundFile="E3.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                Ñ1
            </KeyboardKeyWhite>
            <KeyboardKeyBlack index={4}
              keyCode="r" soundFile="As0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                R
            </KeyboardKeyBlack>
            <KeyboardKeyWhite index={4}
              keyCode="z1" soundFile="F3.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                Z1
            </KeyboardKeyWhite>
            <KeyboardKeyBlack index={4}
              keyCode="t" soundFile="As0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                T
            </KeyboardKeyBlack>
            <KeyboardKeyWhite index={4}
              keyCode="x1" soundFile="G3.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                X1
            </KeyboardKeyWhite>
            {/* 49 to 53 - nineth group of keys - 3 white y 2 black */}
            <KeyboardKeyWhite index={5}
              keyCode="c1" soundFile="A4.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                C1
            </KeyboardKeyWhite>
            <KeyboardKeyBlack index={5}
              keyCode="y" soundFile="As0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                Y
            </KeyboardKeyBlack>
            <KeyboardKeyWhite index={5}
              keyCode="v1" soundFile="B4.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                V1
            </KeyboardKeyWhite>
            <KeyboardKeyBlack index={5}
              keyCode="b" soundFile="As0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                B
            </KeyboardKeyBlack>
            <KeyboardKeyWhite index={5}
              keyCode="b1" soundFile="C4.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                B1
            </KeyboardKeyWhite>
            {/* 54 to 60 - prefinal group of keys - 4 blacas y 3 negras */}
            <KeyboardKeyWhite index={5}
              keyCode="n1" soundFile="D4.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                N1
            </KeyboardKeyWhite>
            <KeyboardKeyBlack index={5}
              keyCode="rt" soundFile="As0.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                RT
            </KeyboardKeyBlack>
            <KeyboardKeyWhite index={5}
              keyCode="m1" soundFile="E4.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                M1
            </KeyboardKeyWhite>
            <KeyboardKeyBlack index={5}
              keyCode="et" soundFile="Ds1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                ET
            </KeyboardKeyBlack>
            <KeyboardKeyWhite index={5}
              keyCode="a2" soundFile="F4.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                A2
            </KeyboardKeyWhite>
            <KeyboardKeyBlack index={5}
              keyToPress="ut" soundFile="Ds1.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                UT
            </KeyboardKeyBlack>
            <KeyboardKeyWhite index={5}
              keyCode="s2" soundFile="G4.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                S2
            </KeyboardKeyWhite>
            {/* 61 - final group of keys - 1 white do */}
            <KeyboardKeyWhite index={0}
              keyCode="m" soundFile="A5.ogg" onClick={handleClick} onKeyUp={handleKeyUp} volume={volume}>
                M
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
