import { useEffect, useContext } from 'react'
import Link from 'next/link'
import UserContext from '../../../../contexts/UserContext'

const PreviousRolls = () => {
  const { rouletteRoll, previousRolls, setPreviousRolls, lastHundred } = useContext(UserContext)

  useEffect(() => {
    setTimeout(() => {
      if (rouletteRoll === undefined || rouletteRoll === null) return

      if (previousRolls.length >= 10) {
        previousRolls.shift()
        setPreviousRolls(prevArray => [ ...prevArray, rouletteRoll ])
      } else {
        setPreviousRolls(prevArray => [ ...prevArray, rouletteRoll ])
      }
    }, 6000)
  }, [ rouletteRoll ])

  const getColor = roll => {
    if (roll === 0) return 'roll-green'
    return roll >= 8 ? 'roll-black' : 'roll-red'
  }

  return (
    <div className='row-wrapper'>
      <div className='relative w-full'>
        <div className='previous-roll-wrapper'>
          <div className='flex-center flex-1'>
            <div className='font-semibold text-xs mr-2'>Last 100</div>
            <div className='flex-center font-bold text-white mr-2'>
              <div className='last-hundred-roll roll-black mr-2'></div>
              {lastHundred.black}
            </div>
            <div className='flex-center font-bold text-white mr-2'>
              <div className='last-hundred-roll roll-green mr-2'></div>
              {lastHundred.green}
            </div>
            <div className='flex-center font-bold text-white'>
              <div className='last-hundred-roll roll-red'></div>
              {lastHundred.red}
            </div>
          </div>
          <div className='flex-justify-center'>
            {previousRolls.map((roll, i) => {
              return (
                <Link href='/roulette/history' key={i}>
                  <a>
                    <div className={`previous-roll ${getColor(roll)}`}>{roll}</div>
                  </a>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreviousRolls
