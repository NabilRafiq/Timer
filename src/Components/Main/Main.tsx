import React, { useState, useEffect } from 'react';
import './Main.css';
import calculateTimer from '../../Helper/Timer';
import Controls from '../Controls/Controls'; 
function Main() {


    const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
    const [timeArray, setTimeArray] = useState<Array<number | string>>([]);
    useEffect(() => {
        let timeArray: Array<number | string> = calculateTimer(timeInSeconds);
        setTimeArray(timeArray);
    }, [timeInSeconds])
    
    
    return (
        <main>
       <section className="time-container">
            <p className="timer-text">{timeArray[0]}</p>
            <span>:</span>
            <p className="timer-text">{timeArray[1]}</p>
            <span>:</span>
            <p className="timer-text">{timeArray[2]}</p>
        </section>
            <Controls setTimeInSeconds={setTimeInSeconds}/>
        </main>
 
    )
}
export default Main;