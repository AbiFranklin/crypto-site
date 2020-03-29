import { useContext } from 'react'
import Link from 'next/link'

import UserContext from '../../../contexts/UserContext'

const TopLinks = () => {
  const { isAuth, usersOnline } = useContext(UserContext)

  return (
    <div className='max-w-7xl mx-auto px-6 bg-blue-highlight'>
      <div className='flex-1 flex items-center justify-between h-10'>
        <div className='flex'>
          <Link href='/'>
            <a className='px-3 py-2 text-xs font-medium text-gray-500 hover:text-white transition duration-150 ease-in-out'>
              Giveaway
            </a>
          </Link>
          <Link href='/'>
            <a className='ml-2 px-3 py-2 text-xs font-medium text-gray-500 hover:text-white transition duration-150 ease-in-out'>
              Support
            </a>
          </Link>
          <Link href='/'>
            <a className='ml-2 px-3 py-2 text-xs font-medium text-gray-500 hover:text-white transition duration-150 ease-in-out'>
              Info
            </a>
          </Link>
          {isAuth && (
            <Link href='/logout'>
              <a className='ml-2 px-3 py-2 text-xs font-medium text-gray-500 hover:text-white transition duration-150 ease-in-out'>
                Logout
              </a>
            </Link>
          )}
        </div>
        <div className='flex'>
          <span className='text-xs font-medium text-gray-500'>{usersOnline} Users Online</span>
        </div>
      </div>
    </div>
  )
}

export default TopLinks
