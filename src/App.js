import React, {useState} from 'react'
import './App.css';
import Panzer from './components/Panzer'

const App = () => {
    const [size, setSize] = useState('normal')
    const [speed, setSpeed] = useState(3)

    const handleChangeSpeed = (event) => {
        const value = event.target.value
        if (Number(value)) {
            setSpeed(value)
        }
    }

    return (
        <div className="App">
            <p style={{
                color: '#FFFFFF',
                fontSize: '2rem'
            }}>Funny Loaders</p>
            <p style={{
                color: '#FFFFFF'
            }}>Click to change panzer size</p>
            <div style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '1rem',
            }}>
                <button
                    style={{
                    width: '4rem',
                    height: '2rem'
                }}
                    onClick={()=> {setSize('small')}}
                >
                    small
                </button>
                <button
                    onClick={()=> {setSize('normal')}}
                    style={{
                        width: '4rem',
                        height: '2rem'
                    }}
                >
                    normal
                </button>
                <button
                    onClick={()=> {setSize('big')}}
                    style={{
                        width: '4rem',
                        height: '2rem'
                    }}
                >
                    big
                </button>
            </div>
            <p style={{
                color: '#FFFFFF'
            }}>Insert value in seconds to change panzer speed</p>
            <div style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '12rem',
            }}>
                <input onChange={handleChangeSpeed} />
            </div>
            <Panzer patrolPathLength={24} size={size} panzerSpeed={speed}/>
        </div>
    );
    }

export default App;
