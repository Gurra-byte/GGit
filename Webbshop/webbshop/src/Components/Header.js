import React from 'react';
import TitleHomeLink from './TitleHomeLink';
import LoginWindow from './LoginWindow';


const Header = () => {
    return (
        <header className='header'>
            <TitleHomeLink />
            <LoginWindow />            
        </header>
    )
}

export default Header
