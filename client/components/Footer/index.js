import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-cyan-blue py-8 mt-24 w-full'>
      <div className='container mx-auto px-8'>
        <div className='table w-full lg:w1/2'>
          <div className='block sm:table-cell'>
            <p className='uppercase text-grey text-sm sm:mb-6'>Games</p>
            <ul className='list-reset text-xs mb-6'>
              <li className='mt-2 inline-block mr-2 sm:block sm:mr-0'>
                <Link href='/'>
                  <a className='footer-link-text'>Roulette</a>
                </Link>
              </li>
              <li className='mt-2 inline-block mr-2 sm:block sm:mr-0'>
                <Link href='/'>
                  <a className='footer-link-text'>Crash</a>
                </Link>
              </li>
              <li className='mt-2 inline-block mr-2 sm:block sm:mr-0'>
                <Link href='/'>
                  <a className='footer-link-text'>Coin Flip</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='block sm:table-cell'>
            <p className='uppercase text-grey text-sm sm:mb-6'>More</p>
            <ul className='list-reset text-xs mb-6'>
              <li className='mt-2 inline-block mr-2 sm:block sm:mr-0'>
                <Link href='/'>
                  <a className='footer-link-text'>Giveaway</a>
                </Link>
              </li>
              <li className='mt-2 inline-block mr-2 sm:block sm:mr-0'>
                <Link href='/'>
                  <a className='footer-link-text'>Support</a>
                </Link>
              </li>
              <li className='mt-2 inline-block mr-2 sm:block sm:mr-0'>
                <Link href='/'>
                  <a className='footer-link-text'>Info</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='block sm:table-cell'></div>
        </div>
      </div>
    </div>
  )
}

export default Footer
