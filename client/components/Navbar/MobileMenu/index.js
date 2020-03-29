import { useContext } from 'react'
import Link from 'next/link'
import useWindowSize from '../../../utils/hooks/useWindowSize'
import { DepositWithdrawButtons } from '../ButtonsAndBalance'

import UserContext from '../../../contexts/UserContext'

const MobileMenu = () => {
  const { isAuth } = useContext(UserContext)
  const wSize = useWindowSize()

  return (
    <div className='px-2 pb-3'>
      <Link href='/'>
        <a className='dropdown-menu hover:text-white'>Dashboard</a>
      </Link>
      <Link href='/counter'>
        <a className='mt-1 dropdown-menu hover:text-white'>Counter</a>
      </Link>
      <Link href='/b'>
        <a className='mt-1 dropdown-menu hover:text-white'>Projects</a>
      </Link>
      <Link href='/c'>
        <a className='mt-1 dropdown-menu hover:text-white'>Calendar</a>
      </Link>
      {isAuth && wSize.width < 640 && (
        <div className='mt-2 px-3 flex'>
          <DepositWithdrawButtons />
        </div>
      )}
    </div>
  )
}

export default MobileMenu
