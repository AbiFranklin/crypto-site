import { useState, useEffect, useContext } from 'react'
import UserContext from '../../../../contexts/UserContext'

const createWheel = () => {
  let wheel = []

  for (let i = 0; i < 29; i++) {
    wheel.push(
      <div className='row' key={i}>
        <div className='card red'>1</div>
        <div className='card black'>14</div>
        <div className='card red'>2</div>
        <div className='card black'>13</div>
        <div className='card red'>3</div>
        <div className='card black'>12</div>
        <div className='card red'>4</div>
        <div className='card green'>0</div>
        <div className='card black'>11</div>
        <div className='card red'>5</div>
        <div className='card black'>10</div>
        <div className='card red'>6</div>
        <div className='card black'>9</div>
        <div className='card red'>7</div>
        <div className='card black'>8</div>
      </div>
    )
  }
  return wheel
}

const RouletteWheel = () => {
  const { rouletteRoll, rouletteRolling, setRouletteRolling } = useContext(UserContext)
  const [ styles, setStyles ] = useState({})

  useEffect(() => {
    if (rouletteRolling) return
    setRouletteRolling(true)
    spinWheel(rouletteRoll)
    setTimeout(() => {
      setRouletteRolling(false)
    }, 20000)
  }, [ rouletteRoll ])

  const spinWheel = roll => {
    const order = [ 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4 ]
    const position = order.indexOf(roll)

    const rows = 12
    const card = 75 + 2 * 2
    let landingPosition = rows * 15 * card + position * card
    const randomize = Math.floor(Math.random() * 25) - 25 / 2
    landingPosition = landingPosition + randomize

    setStyles({
      transitionTimingFunction: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
      transitionDuration: '6s',
      transform: `translate3d(-${landingPosition}px, 0px, 0px)`
    })

    setTimeout(() => {
      setStyles({
        transitionTimingFunction: '',
        transitionDuration: ''
      })

      const resetTo = -(position * card + randomize)
      setStyles({
        transform: `translate3d(${resetTo}px, 0px, 0px)`
      })
    }, 6000)
  }

  return (
    <div className='row-wrapper'>
      <div className='relative w-full'>
        <div className='game-holder'>
          <div className='roulette-wrapper'>
            <div className='selector'></div>
            <div className='wheel' style={styles}>
              {createWheel()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RouletteWheel
