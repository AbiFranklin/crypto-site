import Link from 'next/link'

import User from './User'

const Sidebar = () => {
  return (
    <>
      <nav className='hidden lg:left-0 lg:block lg:fixed lg:top-0 lg:bottom-0 lg:overflow-y-auto lg:flex-row lg:flex-no-wrap lg:overflow-hidden bg-cyan-blue flex flex-wrap items-center justify-between relative lg:w-64 z-10 py-4 px-6'>
        <div className='lg:flex-col lg:items-stretch lg:min-h-full lg:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto'>
          <Link href='/'>
            <a>
              <img
                className='w-full h-24 object-cover rounded'
                src='https://pngimage.net/wp-content/uploads/2018/06/logo-placeholder-png-3.png'
              />
            </a>
          </Link>
          <div className='lg:flex lg:flex-col lg:items-stretch lg:opacity-100 lg:relative lg:mt-4 absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded'>
            <User />
            {/* Live chat */}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Sidebar
