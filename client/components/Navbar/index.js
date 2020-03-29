import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'

import useWindowSize from '../../utils/hooks/useWindowSize'

import ButtonsAndBalance from './ButtonsAndBalance'
import TopLinks from './TopLinks'
import MainLinks from './MainLinks'
import MobileMenu from './MobileMenu'

import UserContext from '../../contexts/UserContext'

const Navbar = () => {
  const { isAuth } = useContext(UserContext)
  const [ open, setOpen ] = useState(false)
  const wSize = useWindowSize()

  useEffect(() => {
    setOpen(false)
  }, [ wSize ])

  const LoginButton = () => {
    return (
      <Link href='/auth/steam'>
        <a>
          <button className='btn-yellow mr-3 hover:bg-yellow-500'>Login</button>
        </a>
      </Link>
    )
  }

  return (
    <div id='nav'>
      {/* <TopLinks /> */}
      <div className='max-w-7xl mx-auto px-6 bg-cyan-blue'>
        <div className='relative flex items-center justify-between' style={{ height: '4.5rem' }}>
          <div className='absolute inset-y-0 left-0 flex items-center lg:hidden'>
            <button
              onClick={() => setOpen(!open)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:text-white transition duration-150 ease-in-out'
            >
              <svg className='h-6 w-6' stroke='currentColor' fill='none' viewBox='0 0 24 24'>
                <path
                  className={open ? 'hidden' : 'inline-flex'}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
                <path
                  className={open ? 'inline-flex' : 'hidden'}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <MainLinks />
          {isAuth ? <ButtonsAndBalance /> : <LoginButton />}
        </div>
      </div>
      <div className={'bg-cyan-blue ' + (open ? '' : 'hidden sm:hidden')}>
        <MobileMenu />
      </div>
    </div>
  )
}

export default Navbar
