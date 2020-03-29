import { useState, useEffect } from 'react'
import App from 'next/app'
import { ToastContainer } from 'react-toastify'
import axios from 'axios'
import io from 'socket.io-client'

import 'react-toastify/dist/ReactToastify.css'
import '../styles/index.css'

import { BASE_URL } from '../utils/API'
import UserContext from '../contexts/UserContext'

const toastConfig = {
  autoClose: 5000,
  position: 'bottom-right',
  pauseOnFocusLoss: false,
  progressClassName: 'alert-progressbar'
}

const useSocket = url => {
  const [ socket, setSocket ] = useState(null)

  useEffect(() => {
    const socketIo = io(url)
    setSocket(socketIo)

    const cleanup = () => {
      socketIo.disconnect()
    }
    return cleanup
  }, [])

  return socket
}

const MyApp = ({ Component, pageProps }) => {
  const [ loading, setLoading ] = useState(true)
  const [ isAuth, setAuth ] = useState(false)
  const [ data, setData ] = useState({})
  const [ usersOnline, setUsersOnline ] = useState(0)
  const [ rouletteRolling, setRouletteRolling ] = useState(true)
  const [ rouletteRoll, setRouletteRoll ] = useState()
  const [ previousRolls, setPreviousRolls ] = useState([ 2, 14, 0, 0, 4, 1, 6, 7, 9, 10 ])
  const [ lastHundred, setLastHundred ] = useState({ black: 46, green: 6, red: 48 })

  const socket = useSocket('https://localhost:3001')

  useEffect(() => {
    getData()
    setRouletteRolling(false)
  }, [])

  useEffect(() => {
    if (socket) {
      socket.on('init', data => {
        console.log(data)
      })
      socket.on('usersOnline', users => {
        setUsersOnline(users)
      })
      socket.on('rouletteRoll', roll => {
        setRouletteRoll(roll.winner)
      })
    }
  }, [ socket ])

  const getData = async () => {
    const { data } = await axios.get(`${BASE_URL}/meta/currentUser`)
    setData(data)
    if (data.user) setAuth(true)
    setLoading(false)
  }

  return (
    <>
      <UserContext.Provider
        value={{
          isLoading: loading,
          isAuth: isAuth,
          data: data,
          usersOnline: usersOnline,
          rouletteRoll: rouletteRoll,
          previousRolls: previousRolls,
          setPreviousRolls: setPreviousRolls,
          rouletteRolling: rouletteRolling,
          setRouletteRolling: setRouletteRolling,
          lastHundred: lastHundred
        }}
      >
        <ToastContainer {...toastConfig} />
        <Component {...pageProps} />
      </UserContext.Provider>
    </>
  )
}

MyApp.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext)

  return { ...appProps }
}

export default MyApp
