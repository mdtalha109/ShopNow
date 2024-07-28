import React from 'react';
import HeaderLogo from './components/HeaderLogo';
import SearchBar from './components/SearchBar';
import CartContainer from './components/CartContainer';
import ProfileDropdown from './components/ProfileDropdown';

import styles from './index.module.css'

const Header = () => {

    return (
        <nav>
            <HeaderLogo />
            <SearchBar />

            <div className={styles.nav_link}>
                <CartContainer />
                <ProfileDropdown />
            </div>
        </nav>
    );
}

export default Header;
