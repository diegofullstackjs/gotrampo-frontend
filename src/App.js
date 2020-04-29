import React, { useContext, useEffect } from 'react';
import {SocketContext} from '../src/context/SocketContext'
import {BrowserRouter as Router} from 'react-router-dom'
import MainRoutes from './routes'
function App() {
  const {io} = useContext(SocketContext)

  useEffect(()=> {
    io.emit('message',"ola mundo") 
  }
,[io])
  return (
      <Router>
          <MainRoutes />
      </Router>
  );
}

export default App;
