import styles from './Countdown.module.css'
import React, { useState } from 'react'

const targetDate = "Mar 19, 2024 00:00:00"

export const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({days: 0, hours: 0, minutes: 0, seconds: 0})

    // Code for updating the timer values
    const updateTimer = () => {
        const countDownDate = new Date(targetDate).getTime();
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({days: days, hours: hours, minutes: minutes, seconds: seconds})
    }

    // Update the timer every second
    setInterval(updateTimer, 1000);

    return(
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
    )
}
