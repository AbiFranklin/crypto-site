import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Layout = props => {
  return (
    <>
      <Sidebar />
      <div className='relative lg:ml-64'>
        <Navbar />
        <div className='content-wrapper'>{props.children}</div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default Layout
