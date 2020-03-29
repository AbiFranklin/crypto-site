// import Link from 'next/link'
import CustomLink from '../CustomLink'

const MainLinks = () => {
  return (
    <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
      <div className='hidden lg:block'>
        <div className='flex'>
          <CustomLink href='/' activeClassName='nav-button-active'>
            <a className='nav-button ml-3 hover:text-gray-100 focus:outline-none focus:text-gray-100'>Roulette</a>
          </CustomLink>
          <CustomLink href='/a' activeClassName='nav-button-active'>
            <a className='nav-button ml-4 hover:text-gray-100 focus:outline-none focus:text-gray-100'>Link</a>
          </CustomLink>
          <CustomLink href='/b' activeClassName='nav-button-active'>
            <a className='nav-button ml-4 hover:text-gray-100 focus:outline-none focus:text-gray-100'>Link</a>
          </CustomLink>
          <CustomLink href='/c' activeClassName='nav-button-active'>
            <a className='nav-button ml-4 hover:text-gray-100 focus:outline-none focus:text-gray-100'>Link</a>
          </CustomLink>
        </div>
      </div>
    </div>
  )
}

export default MainLinks
