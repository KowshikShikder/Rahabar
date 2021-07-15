import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Login from './Login'
import Logout from './Logout'
import UserInfo from './UserInfo';
import './Auth0.css'


export default function LoginButton() {

    const {isAuthenticated, user } = useAuth0();

    // const UserData= JSON.stringify(user, null, 2);

    return (
        <div className="AuthoParents" >
            <div class="user-pic">
                <UserInfo/>
            </div>
        
        </div>
    )
}