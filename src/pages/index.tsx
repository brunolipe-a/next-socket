import Head from 'next/head'
import { useEffect } from 'react'
import { useSocket } from '../context/socket'

export default function Home() {
  const { socket } = useSocket()

  useEffect(() => {
    socket.on('news', (data) => {
      console.log(data)
    })
  }, [socket])

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <h1>Hello, world!</h1>
    </div>
  )
}
