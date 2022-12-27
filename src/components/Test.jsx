import React, { useRef } from 'react';
import './Test.scss'

export default function Test() {

    const [dice, setDice] = React.useState(0)
    const [width, setWidth] = React.useState(0)

    var slideFunc = () => {
        setDice((oldDice) => oldDice + 50)
        console.log('translate: ' + dice);
        setWidth(ref.current.offsetWidth);
        console.log('offsetWidth: ' + ref.current.offsetWidth);
        console.log(ref)
    }

    const ref = useRef();
   
    return (
        <div className="component">

            <div className="slider">
                <div className='container' ref={ref} style={{transform:`translateX(-${dice}px)`}}>
                    <div className='select-item'>
                        NoCopyrightSounds {dice}
                    </div>
                    <div className='select-item'>
                        Watched
                    </div>
                    <div className='select-item'>
                        Related
                    </div>
                    <div className='select-item'>
                        Recently uploaded
                    </div>
                    <div className='select-item'>
                        NoCopyrightSounds
                    </div>
                    <div className='select-item'>
                        Watched
                    </div>
                    <div className='select-item'>
                        Related
                    </div>
                    <div className='select-item'>
                        Recently uploaded
                    </div>
                </div>
            </div>

            

            <button onClick={() => slideFunc()} className='slide-button'>
                scroll
            </button>
            <p>width {width}</p>
        </div>
        
    );
}
