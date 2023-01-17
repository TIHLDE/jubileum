import styles from './Countdown.module.css'
import React, { useEffect, useState } from 'react'

const targetDate = "Mar 19, 2023 00:00:00"

export const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({days: 0, hours: 0, minutes: 0, seconds: 0});
    const [visible, setVisible] = useState(true);

    // Code for updating the timer values
    const updateTimer = () => {
        const countDownDate = new Date(targetDate).getTime();
        const now = new Date().getTime();
        const distance = countDownDate - now;

        // If the date has alredy passed, we do not want to calculate the
        // remaining time left, but instead set the values to 0
        console.log(distance)
        if(distance <= 0) {
            setTimeLeft({days: 0, hours: 0, minutes: 0, seconds: 0})
            if(!visible) {
                setVisible(true);
            }
            return;
        }

        // Calculate the remaining time left, ensuring the values
        // are not negative
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        days = days < 0 ? 0 : days;
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        hours = hours < 0 ? 0 : hours;
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        minutes = minutes < 0 ? 0 : minutes;
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        seconds = seconds < 0 ? 0 : seconds;

        setTimeLeft({days: days, hours: hours, minutes: minutes, seconds: seconds})
    }

    useEffect(()=>{
        // Fix this code to make it better and stuff.
        // Curent behavior: The timer is updated after one second. This causes the countdown to display
        // zero for one second before the countdown is updated. This is not ideal.
        // Desired behavior: The timer is updated immediately, and then updated every second 👌.
        setTimeout(updateTimer, 1000);

        // Check if the timer has reached zero, and if so, fire some confetti!
        if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {

            // TODO: Fire confetti 🎉
        }
    })


    return(
        <div className={`${styles.wrapper}` + 
            (()=>{
                return visible ? ` ${styles.show}` : ``;
            })()}>
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
