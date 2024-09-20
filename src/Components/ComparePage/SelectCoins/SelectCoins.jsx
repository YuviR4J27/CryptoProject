import React, { useEffect, useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './selectCoins.css'
import { get100Coins } from '../../../Functions/get100Coins';


function SelectCoins({ crypto1, crypto2, handleCoinChange }) {
    // const [crypto1, setCrypto1] = useState('bitcoin') //state for first coin(Later taken an a prop from compare page)
    // const [crypto2, setCrypto2] = useState('ethereum') //state for second coin(Later taken an a prop from compare page)
    const [allCoins, setAllCoins] = useState([]) //state that stores all the 100 coins in an array
    const style = { //style for select coins components
        height: "2rem",
        color: "var(--white)",
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)"
        },
        "& .MuiSvgIcon-root": {
            color: "var(--white)"
        },
        "& .MuiFormLabel-root": {
            color: "var(--white)"
        },
        "&:hover": {
            "&& fieldset": {
                borderColor: "#9c4dc7",
            },
        }
    }
    useEffect(() => { //As soon as this page is loaded, get all 100 coins data
        getData()
    }, [])

    const getData = async () => { //This function get all 100 coins and save it to our allCoin state
        const myCoins = await get100Coins()
        setAllCoins(myCoins)
    }
    return (
        <div className='coins-list'>
            <p>Crypto 1</p>
            <Select
                sx={style}
                value={crypto1}
                label="Crypto1"
                onChange={(e) => handleCoinChange(e, false)}
            >
                {allCoins
                    .filter((item) => item.id != crypto2)
                    .map((coin) => (
                        <MenuItem key={coin.id} value={coin.id}>{coin.name}</MenuItem>
                    ))}
            </Select>

            <p>Crypto 2</p>
            <Select
                sx={style}
                value={crypto2}
                label="Crypto2"
                onChange={(e) => handleCoinChange(e, true)}
            >
                {allCoins
                .filter((item) => item.id != crypto1)
                .map((coin) => (
                    <MenuItem key={coin.id} value={coin.id}>{coin.name}</MenuItem>
                ))}
            </Select>
        </div>
    );
}

export default SelectCoins