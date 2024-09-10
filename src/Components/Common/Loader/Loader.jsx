import React from 'react'
import './loader.css'
import { CircularProgress } from '@mui/material'

function Loader() {
    return (
        <div className='loader-container'>
            <CircularProgress color='inherit' />
        </div>
    )
}

export default Loader