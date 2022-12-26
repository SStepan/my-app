import React from 'react';
import './Test.scss'

export default function Test() {

    const [dice, setDice] = React.useState(100)

    var slideFunc = () => {
        
    }

    return (
        <div className="component">

            <div className="slider">
                <div className='container'>
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

            <button onClick={() => } className='slide-button'>
                scroll
            </button>
        </div>
    );
}
