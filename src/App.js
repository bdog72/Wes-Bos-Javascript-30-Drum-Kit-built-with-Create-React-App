import React, { Component } from 'react'

import sound1 from '../src/sounds/clap.wav'
import sound2 from '../src/sounds/hihat.wav'
import sound3 from '../src/sounds/kick.wav'
import sound4 from '../src/sounds/openhat.wav'
import sound5 from '../src/sounds/boom.wav'
import sound6 from '../src/sounds/ride.wav'
import sound7 from '../src/sounds/snare.wav'
import sound8 from '../src/sounds/tom.wav'
import sound9 from '../src/sounds/tink.wav'

class App extends Component {
    render() {
        window.addEventListener('keydown', function(e) {
            const audio = document.querySelector(
                `audio[data-key='${e.keyCode}']`
            )
            const key = document.querySelector(`.key[data-key='${e.keyCode}']`)
            if (!audio) return
            audio.currentTime = 0
            audio.play()
            key.classList.add('playing')
        })

        // function removeTransition(e) {
        //     if (e.propertyName !== 'transform') return
        //     this.classList.remove('playing')
        // }

        function removeTransition(e) {
            if (e.propertyName !== 'transform') {
                return
            } else {
                this.classList.remove('playing')
            }
        }

        const keys = document.querySelectorAll('.key')
        keys.forEach(key =>
            key.addEventListener('transitionend', removeTransition)
        )

        return (
            <div>
                <div className="keys">
                    <div data-key="65" className="key">
                        <kbd>A</kbd>
                        <span className="sound">clap</span>
                    </div>
                    <div data-key="83" className="key">
                        <kbd>S</kbd>
                        <span className="sound">hihat</span>
                    </div>
                    <div data-key="68" className="key">
                        <kbd>D</kbd>
                        <span className="sound">kick</span>
                    </div>
                    <div data-key="70" className="key">
                        <kbd>F</kbd>
                        <span className="sound">openhat</span>
                    </div>
                    <div data-key="71" className="key">
                        <kbd>G</kbd>
                        <span className="sound">boom</span>
                    </div>
                    <div data-key="72" className="key">
                        <kbd>H</kbd>
                        <span className="sound">ride</span>
                    </div>
                    <div data-key="74" className="key">
                        <kbd>J</kbd>
                        <span className="sound">snare</span>
                    </div>
                    <div data-key="75" className="key">
                        <kbd>K</kbd>
                        <span className="sound">tom</span>
                    </div>
                    <div data-key="76" className="key">
                        <kbd>L</kbd>
                        <span className="sound">tink</span>
                    </div>
                </div>

                <audio data-key="65" src={sound1} />
                <audio data-key="83" src={sound2} />
                <audio data-key="68" src={sound3} />
                <audio data-key="70" src={sound4} />
                <audio data-key="71" src={sound5} />
                <audio data-key="72" src={sound6} />
                <audio data-key="74" src={sound7} />
                <audio data-key="75" src={sound8} />
                <audio data-key="76" src={sound9} />
            </div>
        )
    }
}

export default App
