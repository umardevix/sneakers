import React from 'react'
import { CiSearch } from "react-icons/ci";
import './Search.css'
const Search = () => {
    return (
        <div className='container'>
            <div className='search-block'>
                <h1>Все кроссовки</h1>
                <div className='input'>
                    <CiSearch className='search-icon' />
                   <input  className='search-input' type="text" placeholder='Поиск...' />
                </div>
            </div>
        </div>
    )
}

export default Search