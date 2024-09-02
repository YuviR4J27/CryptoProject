import React from 'react'
import './header.css'
import AnchorTemporaryDrawer from './Drawer'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className='navbar'>
            <div className='logo'>
                <h1 >CryptoTracker<span className='dot'>.</span></h1>
            </div>
            <div className='links'>
                <Link to="/">
                    <p className='link'>Home</p>
                </Link>
                <Link to="/watchlist">
                    <p className='link'>Watchlist</p>
                </Link>
                <Link to="/compare">
                    <p className='link'>Compare</p>
                </Link>
                <Link to='/dashboard'>
                    <Button text={'Dashboard'} onclick={() => console.log('clicked')} />
                </Link>
            </div>

            <div className='mobile-drawer'>
                <AnchorTemporaryDrawer />
            </div>

        </nav>
    )
}

export default Header