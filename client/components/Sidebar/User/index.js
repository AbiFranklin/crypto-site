import { useContext } from 'react'

import UserContext from '../../../contexts/UserContext'

const User = () => {
  const { data, isAuth } = useContext(UserContext)

  return (
    <>
      {isAuth && (
        <div className='rounded-lg text-white'>
          <img className='h-20 w-20 rounded-full mx-auto mb-3' src={data.user.steam.avatarfull} />
          <div className='text-center'>
            <div className='text-lg my-1'>
              <span className='inline-block bg-gray-200 text-gray-800 text-xs px-2 rounded uppercase font-bold tracking-wide'>
                {data.user.site.xp.level}
              </span>
              <span className='text-md font-bold ml-2'>{data.user.steam.personaname}</span>
            </div>
            <div className='text-sm my-1'>Level {data.user.site.xp.level}</div>
            <div className='progress-bar-wrapper m-3'>
              <div className='progress-bar' style={{ width: '37.3432%' }}></div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default User
