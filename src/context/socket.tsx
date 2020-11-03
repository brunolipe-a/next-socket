import io, { Socket } from 'socket.io-client';
import { createContext, useContext } from 'react';

const socket = io(process.env.NEXT_PUBLIC_SOCKET_ENDPOINT) 

type SocketContextValues = {
  socket: typeof Socket
}

const SocketContext = createContext<SocketContextValues>({} as SocketContextValues)

function SocketProvider({ children }: WithChildren) {

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  )
}

function useSocket(): SocketContextValues {
  return useContext(SocketContext)
}

export { SocketProvider, useSocket }
