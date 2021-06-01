import React from 'react';
import TitleHomeLink from './TitleHomeLink';
import LoginWindow from './LoginWindow';


const Header = ({user, showCreateAccount, createAccount, Login}) => {
    
    return (
        <header className='header'>
            <TitleHomeLink />
            <LoginWindow  user = {user} showCreateAccount = {showCreateAccount} createAccount = {createAccount} Login= {Login} />            
        </header>
    )
}

export default Header
