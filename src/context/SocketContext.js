import React, { createContext } from 'react';
import socketIO from 'socket.io-client'
export const SocketContext = createContext();
export  function SocketProvider({children}) {
    const io = socketIO('http://localhost:3000',
    {
        query: {
            id: Math.random(10,10000)
        }
    })

  return (
     <SocketContext.Provider value={{io}}>
         {children}
     </SocketContext.Provider>
  );
}
