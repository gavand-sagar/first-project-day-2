import React, { useEffect } from 'react'
import Header from './common/Header'
import { useNavigate } from 'react-router-dom';
import { useRouteProtection } from './common/useRouteProtection';

export default function Profile() {

    // if user is not logged in then redirect user to the login page 
    
    useRouteProtection();
    
    return (
        <div>
            <Header/>
            <h1>Profile</h1>
            <hr/>
            <h2>Welcom, Sagar!</h2>
            
        </div>
    )
}
