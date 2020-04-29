import React from 'react';
import {Switch,Route} from 'react-router-dom';
import LoginPage from '../pages/auth/Login'
import CadastroPage from '../pages/registration/Cadastro'
export default function Authentication() {
    return(
        <Switch>
             <Route path="/" exact component={LoginPage} />
             <Route path="/cadastro" component={CadastroPage} />
        </Switch>
    )
}