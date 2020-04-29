import React, { useContext, useEffect } from 'react';
import {AuthContext} from '../src/context/Auth'
import {SocketContext} from '../src/context/SocketContext'
function App() {
  const {io} = useContext(SocketContext)
  const {logado} = useContext(AuthContext);

  useEffect(()=> {
    io.emit('message',"ola mundo") 
  }
,[io])
  return (
      <h1>Qualquer coisa</h1>
  );
}

export default App;
