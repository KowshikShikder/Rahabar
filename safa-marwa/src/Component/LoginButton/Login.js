import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'


export default function Login() {

    const { loginWithRedirect ,  isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (

        <div>
            <button className="btn btn-secondary" onClick={ ()=> loginWithRedirect() } >
                Login
            </button>
        </div>
    ))
}
