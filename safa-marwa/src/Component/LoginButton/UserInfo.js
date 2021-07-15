import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

export default function UserInfo() {

    const {  user,   isAuthenticated } = useAuth0();


    return (

        isAuthenticated && (

        <div>

             <img src={user.picture} className="user-pic-img" alt="" />
{/*
        <p>  Hi, My name is {user.name}. My Email ID is {user.email}. <br/>

        Contact with me through {user.phone_number}. <br/>
        My ID {user.sub}
        </p> */}

        </div>
        )
    )
}
