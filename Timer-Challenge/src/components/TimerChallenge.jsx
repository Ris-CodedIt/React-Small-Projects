import React, { useState , useRef} from 'react'
import ResultModal from './ResultModal'

const TimerChallenge = ({title, targetTime}) => {
  
  const [timerRemaining, setTimerRemaining]= useState(targetTime* 1000)
 
  const timer = useRef()
  const dialog = useRef()
 
  const timerIsActive = timerRemaining > 0 && timerRemaining < targetTime* 1000

  if(timerRemaining <=0){
    clearInterval(timer.current)
   
    dialog.current.open()
  }
  const handleReset=()=>{setTimerRemaining(targetTime* 1000)}

  const handleStart = ()=>{
    timer.current = setInterval(()=>{
      setTimerRemaining(prevTimeRem=> prevTimeRem-10)  
    },10)
  }

  const handleStop =()=>{
      dialog.current.open()
     clearInterval(timer.current)
     
  }
  return (
    <>
        <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timerRemaining}  onReset={handleReset}/>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">{targetTime} second{targetTime > 1 ?"s":""}</p>
            <button onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ? "Stop" : "Start" }Timer</button>
            <p className={timerIsActive ? 'active' : undefined}>
                {timerIsActive ? "Time is running" : "Timer inactive"}
            </p>
        </section>
    </>
  )
}

export default TimerChallenge