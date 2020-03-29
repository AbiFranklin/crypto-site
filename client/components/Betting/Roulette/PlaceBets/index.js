import { useState, useContext } from 'react'
import { isString, formatNumber } from '../../../../utils/helpers'
// import useWindowSize from '../../../utils/hooks/useWindowSize'
// import Decimal from 'decimal.js-light'
import SingleBet from '../SingleBet'

import UserContext from '../../../../contexts/UserContext'

const PlaceBets = () => {
  const { data, isAuth } = useContext(UserContext)
  const [ currentBet, setCurrentBet ] = useState(0)
  // const wSize = useWindowSize()

  const jan = {
    name: 'jan',
    id: 'r4nD0M57r1nG',
    avatar:
      'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/98/980ae0da2e088c32605d3e0c11f21ed05d0c4f7f_full.jpg',
    level: 30,
    amount: 1500
  }

  const user = {
    name: 'not jan',
    id: 'r4nD0M57r1nG',
    avatar:
      'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/ae/ae8d2230c5fba80baf0a82301a5ba3278d83a148_full.jpg',
    level: 7,
    amount: 25837
  }

  const handleBetInput = e => {
    const { value } = e.target
    if (isNaN(value)) return

    setCurrentBet(value)
  }

  const setBetAmount = val => {
    if (!isAuth) return
    if (isString(val)) {
      if (val === 'clear') setCurrentBet(parseFloat(0))
      if (val === 'half') setCurrentBet(parseFloat(currentBet / 2))
      if (val === 'x2') setCurrentBet(parseFloat(currentBet * 2))
      if (val === 'max') isAuth ? setCurrentBet(data.user.site.balance) : setCurrentBet(parseFloat(0))
    }

    if (val === 1) setCurrentBet(parseFloat(currentBet + 1))
    if (val === 10) setCurrentBet(parseFloat(currentBet + 10))
    if (val === 100) setCurrentBet(parseFloat(currentBet + 100))
    if (val === 1000) setCurrentBet(parseFloat(currentBet + 1000))
    if (val === 10000) setCurrentBet(parseFloat(currentBet + 10000))
  }

  const BetButton = ({ onClick, text }) => {
    return (
      <button className='btn-bet' onClick={() => setBetAmount(onClick)}>
        {text}
      </button>
    )
  }

  return (
    <>
      <div className='row-wrapper mt-5'>
        <div className='relative w-11/12'>
          <input
            className='bet-input'
            id='bet-input'
            type='number'
            pattern='\d.*'
            autoComplete='off'
            placeholder='Amount'
            value={(currentBet / 100).toFixed(2)}
            onChange={e => handleBetInput(e)}
          />
          <div className='btn-bet-wrapper'>
            <button className='btn-bet-clear' onClick={() => setBetAmount('clear')}>
              Clear
            </button>
            <BetButton onClick={1} text='+0.01' />
            <BetButton onClick={10} text='+0.1' />
            <BetButton onClick={100} text='+1' />
            <BetButton onClick={1000} text='+10' />
            <BetButton onClick={10000} text='+100' />
            <BetButton onClick='half' text='1/2' />
            <BetButton onClick='x2' text='x2' />
            <BetButton onClick='max' text='Max' />
          </div>
        </div>
      </div>
      <div className='row-wrapper mt-5'>
        <div className='relative w-11/12'>
          <div className='bets-wrapper'>
            <div className='placebet mr-3'>
              <button className='btn-placebet btn-placebet-red sm:py-3 sm:px-8' onClick={() => setBetAmount('clear')}>
                Win 2x
              </button>
            </div>
            <div className='placebet mx-3'>
              <button className='btn-placebet btn-placebet-green sm:py-3 sm:px-8' onClick={() => setBetAmount('clear')}>
                Win 14x
              </button>
            </div>
            <div className='placebet ml-3'>
              <button className='btn-placebet btn-placebet-black sm:py-3 sm:px-8' onClick={() => setBetAmount('clear')}>
                Win 2x
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='row-wrapper mt-2'>
        <div className='relative w-11/12'>
          <div className='bets-wrapper'>
            <div className='current-bets mx-2'>
              <header className='current-bets-header flex-1 px-2 pb-2'>
                <div className='current-bets-inner flex-1'>
                  <img className='h-4 mr-1' src={require('../../../../public/chip_red.svg')} />
                  <span className='current-bets__amount'>3 Bets</span>
                </div>
                <div className='current-bets-inner'>
                  <img className='h-4 mr-1' src={require('../../../../public/balance-symbol.svg')} />
                  <span className='current-bets__amount-first'>{formatNumber(531)}</span>
                  <span className='current-bets__amount-remainder'>.74</span>
                </div>
              </header>
              <SingleBet user={jan} />
              <SingleBet user={user} />
            </div>
            <div className='current-bets mx-4'>
              <header className='current-bets-header flex-1 px-2 pb-2'>
                <div className='current-bets-inner flex-1'>
                  <img className='h-4 mr-1' src={require('../../../../public/chip_green.svg')} />
                  <span className='current-bets__amount'>1 Bet</span>
                </div>
                <div className='current-bets-inner'>
                  <img className='h-4 mr-1' src={require('../../../../public/balance-symbol.svg')} />
                  <span className='current-bets__amount-first'>{formatNumber(15)}</span>
                  <span className='current-bets__amount-remainder'>.00</span>
                </div>
              </header>
              <SingleBet user={jan} />
            </div>
            <div className='current-bets mx-2'>
              <header className='current-bets-header flex-1 px-2 pb-2'>
                <div className='current-bets-inner flex-1'>
                  <img className='h-4 mr-1' src={require('../../../../public/chip_black.svg')} />
                  <span className='current-bets__amount'>2 Bets</span>
                </div>
                <div className='current-bets-inner'>
                  <img className='h-4 mr-1' src={require('../../../../public/balance-symbol.svg')} />
                  <span className='current-bets__amount-first'>{formatNumber(266)}</span>
                  <span className='current-bets__amount-remainder'>.28</span>
                </div>
              </header>
              <SingleBet user={user} />
              <SingleBet user={jan} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PlaceBets
