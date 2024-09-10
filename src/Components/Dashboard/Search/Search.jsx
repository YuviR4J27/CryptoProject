import React, { useState } from 'react'
import './search.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function Search({search, onSearch}) {
  return (
    <div className='search'>
        <SearchRoundedIcon />
        <input type="text" placeholder='search' value={search} onChange= {(e) => onSearch(e)} />
    </div>
  )
}

export default Search