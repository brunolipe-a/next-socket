import { SocketProvider } from "./socket";

export default function AppProvider({ children }: WithChildren) {
  return (
    <SocketProvider>
      {children}
    </SocketProvider>
  )
}