import React, { useState, useRef, useEffect } from 'react'

const CountdownTimer = ({ fn }) => {
  // We need ref in this, because we are dealing
  // with JS setInterval to keep track of it and
  // stop it when needed
  const Ref = useRef(null)

  // The state for our timer
  const [days, setDays] = useState('00')
  const [hours, setHours] = useState('00')
  const [minutes, setMinutes] = useState('00')
  const [seconds, setSeconds] = useState('00')

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date())
    const seconds = Math.floor((total / 1000) % 60)
    const minutes = Math.floor((total / 1000 / 60) % 60)
    const hours = Math.floor((total / 1000 / 60 / 60) % 24)
    const days = Math.floor(total / 1000 / 60 / 60 / 24)

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    }
  }

  const startTimer = (e) => {
    let { total, days, hours, minutes, seconds } = getTimeRemaining(e)
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the begining of the variable
      setDays(days > 9 ? days : '0' + days)
      setHours(hours > 9 ? hours : '0' + hours)
      setMinutes(minutes > 9 ? minutes : '0' + minutes)
      setSeconds(seconds > 9 ? seconds : '0' + seconds)
    }
  }

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setDays('00')
    setHours('00')
    setMinutes('00')
    setSeconds('00')

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current)
    const id = setInterval(() => {
      startTimer(e)
    }, 1000)
    Ref.current = id
  }

  const getDeadTime = () => {
    let deadline = new Date('05/18/2022 09:00:00')

    // This is where you need to adjust if
    // you entend to add more time
    return deadline
  }

  const isExpired = () => {
    if (
      days === '00' &&
      hours === '00' &&
      minutes === '00' &&
      seconds === '00'
    ) {
      fn(true)
      return true
    }

    fn(false)
    return false
  }

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
    clearTimer(getDeadTime())
  }, [])

  return (
    <>
      {isExpired ? (
        <div className="py-10"></div>
      ) : (
        <div className="my-6 flex w-full flex-wrap justify-between rounded-lg bg-white/30 text-center">
          <div className="w-1/2 p-4 sm:w-1/4">
            <h2 className="title-font text-6xl font-bold text-v-yellow sm:text-4xl">
              {days}
            </h2>
            <p className="text-2xl font-medium text-white">Days</p>
          </div>
          <div className="w-1/2 p-4 sm:w-1/4">
            <h2 className="title-font text-6xl font-bold text-v-yellow sm:text-4xl">
              {hours}
            </h2>
            <p className="text-2xl font-medium text-white">Hours</p>
          </div>
          <div className="w-1/2 p-4 sm:w-1/4">
            <h2 className="title-font text-6xl font-bold text-v-yellow sm:text-4xl">
              {minutes}
            </h2>
            <p className="text-2xl font-medium text-white">Minutes</p>
          </div>
          <div className="w-1/2 p-4 sm:w-1/4">
            <h2 className="title-font text-6xl font-bold text-v-yellow sm:text-4xl">
              {seconds}
            </h2>
            <p className="text-2xl font-medium text-white">Seconds</p>
          </div>
        </div>
      )}
    </>
  )
}

export default CountdownTimer
