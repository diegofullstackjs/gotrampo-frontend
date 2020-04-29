import React, { useContext } from 'react';
import {AuthContext} from '../context/Auth'
import Authentication from './auth.routes';
export default function Rotas() {
    const {logado} = useContext(AuthContext)
    return logado? <Authentication /> : <Authentication />
}
