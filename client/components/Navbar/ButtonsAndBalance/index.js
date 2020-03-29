import { useContext } from 'react'
import Link from 'next/link'
import useWindowSize from '../../../utils/hooks/useWindowSize'
import { sendToast } from '../../Toast'
import { formatNumber } from '../../../utils/helpers'

import UserContext from '../../../contexts/UserContext'

export const DepositWithdrawButtons = () => (
  <>
    <button
      className='btn-second bg-gray-800 flex-1 sm:bg-transparent hover:bg-gray-800'
      onClick={() => sendToast('error', 'Error', 'Withdraw error')}
    >
      Withdraw
    </button>
    <button
      className='btn-yellow ml-3 flex-1 hover:bg-yellow-500'
      onClick={() => sendToast('success', 'Deposit', 'Deposit success')}
    >
      Deposit
    </button>
  </>
)

export const Balance = ({ bal }) => {
  const balFirst = parseFloat(bal / 100)
    .toFixed(2)
    .split('.')[0]
  const balLast = parseFloat(bal / 100)
    .toFixed(2)
    .split('.')[1]

  return (
    <div className='div-inset bg-blue-highlight border border-blue-mid'>
      <Link href='/'>
        <a>
          <span className='flex items-center justify-center'>
            <img className='h-4 mr-2' src={require('../../../public/balance-symbol.svg')} />
            <span className='balance-full'>{formatNumber(balFirst)}</span>
            <span className='balance-remainder'>.{balLast || '00'}</span>
          </span>
        </a>
      </Link>
    </div>
  )
}

export const User = ({ user }) => {
  return (
    <Link href={`/profile/${user.uuid}`}>
      <a>
        <div className='user-wrapper'>
          <img className='user-avatar mr-0' src={user.steam.avatarfull} />
          <span className='user-username'>{user.site.displayName}</span>
        </div>
      </a>
    </Link>
  )
}

const ButtonsAndBalance = () => {
  const wSize = useWindowSize()
  const { data } = useContext(UserContext)

  return (
    <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
      {wSize.width < 640 ? (
        <Balance bal={parseFloat(data.user.site.balance)} />
      ) : (
        <>
          <DepositWithdrawButtons />
          <Balance bal={parseFloat(data.user.site.balance)} />
          <User user={data.user} />
        </>
      )}
    </div>
  )
}

export default ButtonsAndBalance
