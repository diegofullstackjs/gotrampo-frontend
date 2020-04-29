import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './context/Auth';
import {SocketProvider} from './context/SocketContext'
import App from './App';

ReactDOM.render(
  <AuthProvider>
    <SocketProvider>
        <App />
    </SocketProvider>
  </AuthProvider>,
  document.getElementById('root')
);
