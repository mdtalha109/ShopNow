import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import styles from './index.module.css'

const SearchBar = () => {

    const navigate = useNavigate();

    const [searchKeyword, setSearchKeyword] = useState("")


    const searchHandler = (e) => {
        
        e.preventDefault()
        navigate(`/search?q=${searchKeyword}`)
    }
    return (
        <div>
            <form method='GET' className={styles.search_bar_form}>

                <input 
                    value={searchKeyword} 
                    onChange={(e) => setSearchKeyword(e.target.value)} 
                    type="text" id="input-search" 
                    placeholder="Search..." 
                    aria-label='search bar'
                />

                <button 
                    onClick={searchHandler} 
                    className={styles.search_btn}
                >
                    <i className='fas fa-search'></i>
                </button>

            </form>
        </div>
    )
}

export default SearchBar