import { useState, useEffect } from 'react'
export default function useAuth(){

    const [state,setState] = useState();

    useEffect(() => {
        let token = localStorage.getItem('token')
        let user = localStorage.getItem('user')
        if(token && user) {
            setState({
                ...state,
                user,
                token
            })
        }else {
            setState(false)
        }
    },[state])

    return state;

}