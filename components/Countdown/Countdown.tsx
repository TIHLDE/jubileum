import styles from './Countdown.module.css';
import React, { useEffect, useState, ReactNode } from 'react';
import { intervalToDuration } from 'date-fns';
import { useConfetti } from '../hooks/Confetti';

export const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState<Duration>({years: undefined, months: undefined, days: undefined, hours: undefined, minutes: undefined, seconds: undefined});
    const [confettiFired, setConfettiFired] = useState(false);
    const { run } = useConfetti();

    // Define a target date for the countdown timer
    const targetDate = new Date("Mar 20, 2023 12:00:00");


    // Code for updating the timer values
    const updateTimer = () => {
        if (targetDate.getTime() - new Date().getTime() <= 0) {
            // There is no remaining time!
            setTimeLeft({years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0});

        // If the date has alredy passed, we do not want to calculate the
        // remaining time left, but instead set the values to 0
        if(distance <= 0) {
            setTimeLeft({days: 0, hours: 0, minutes: 0, seconds: 0})
            if(!visible) {
                setVisible(true);
            }

            return;
        }

        // Update the timeLeft hook
        setTimeLeft(intervalToDuration({end: targetDate, start: new Date()}))        
    }
    
    useEffect(()=>{
        // Update the time remaining immedeately upon component mount
        updateTimer();

        // Create an interval which updates the component every second
        const interval = setInterval(updateTimer, 1000);
        
        // Clear the interval when the component is unmounted
        return () => clearInterval(interval);
    },[confettiFired]);
    

    return(
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <span>
                    <h1>{timeLeft.days}</h1>
                    <p>Dager</p>
                </span>
                <span>
                    <h1>{timeLeft.hours}</h1>
                    <p>Timer</p>
                </span>
                <span>
                    <h1>{timeLeft.minutes}</h1>
                    <p>Minutter</p>
                </span>
                <span>
                    <h1>{timeLeft.seconds}</h1>
                    <p>Sekunder</p>
                </span>
            </div>
        </div>
    )
}