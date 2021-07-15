import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'


export default function Logout() {

    const {logout ,  isAuthenticated } = useAuth0();

    return (
        isAuthenticated &&(
        <div>
            <button className="btn btn-primary" onClick={ ()=> logout() } >
                Logout
            </button>
        </div>
    ))
}
