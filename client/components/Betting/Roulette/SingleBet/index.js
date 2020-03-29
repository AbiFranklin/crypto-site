import Link from 'next/link'
import { formatNumber } from '../../../../utils/helpers'

const SingleBet = ({ user }) => {
  const { amount, id, avatar, level, name } = user
  const betFirst = parseFloat(amount / 100)
    .toFixed(2)
    .split('.')[0]
  const betLast = parseFloat(amount / 100)
    .toFixed(2)
    .split('.')[1]

  return (
    <div className='bet-wrapper'>
      <div className='flex flex-1'>
        <Link href={`/profile/${id}`}>
          <a>
            <img className='user-avatar' src={avatar} />
          </a>
        </Link>
        <span className='user-level'>{level}</span>
        <span className='user-username'>{name}</span>
      </div>
      <div className='user-bet'>
        <img className='h-4 mr-1' src={require('../../../../public/balance-symbol.svg')} />
        <span className='user-bet--amount-first'>{formatNumber(betFirst)}</span>
        <span className='user-bet--amount-last'>.{betLast}</span>
      </div>
    </div>
  )
}

export default SingleBet
