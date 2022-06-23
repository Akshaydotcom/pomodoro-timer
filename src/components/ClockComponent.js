import React from 'react';
import {useState,useEffect} from 'react';

export const ClockComponent=(props)=> {
  const[minutes,SetMinutes]=useState(props.minutes);
  const[seconds,setSeconds]=useState(props.seconds);
  useEffect(()=>{
    SetMinutes(props.minutes);
    setSeconds(props.seconds);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  useEffect(()=>{
    const minutesInterval = setInterval(()=>{
      if(minutes>0)
        SetMinutes(minutes-1)
    },60000)
    return ()=>{
      clearInterval(minutesInterval)
    };
  },[minutes])

useEffect(() => {
  const secondsinterval = setInterval(() => {
    if(seconds>0)
      setSeconds(seconds-1)
    else if(seconds===0)
      setSeconds(59)}, 1000);
  
  return () => {
    clearInterval(secondsinterval);
  };
}, [seconds]);
  
  return (<div>
    <div>
          <div id="Minutes">{minutes}</div>
          <span id="mins">Minutes</span>
        </div>
        <div>
          <div id="Seconds">{seconds}</div>
          <span id="seconds">Seconds</span>
        </div>
      </div>);
}