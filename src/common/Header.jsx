import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='header'>
            <div className='logo-container'>
                <h2>MyBlog</h2>
            </div>
            <div className='nav-links-container'>
                <Link to={'/'}>
                    <button>HOME</button>
                </Link>
                <Link to={'/profile'}>
                    <button>PROFILE</button>
                </Link>
                <Link to={'/demo'}>
                    <button>DEMO</button>
                </Link>
            </div>
        </div>
    )
}
