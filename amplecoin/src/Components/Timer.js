import React from 'react';
import { useState, useEffect } from 'react';
import './Timer.css'

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "April, 31, 2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer">
        <h5>Pre-sale Ends In</h5>
      <div className='timer-container'> 
        <div>
        {days}
          <label>Days</label>
        </div>

         <div>
          {hours}
          <label>Hours</label>
          </div>

        <div>
          {minutes}
          <label>Minutes</label>
        </div>

       <div>
        {seconds}
        <label>Seconds</label>
      </div>


      </div>  

    </div>
   
  );
};

export default Timer;