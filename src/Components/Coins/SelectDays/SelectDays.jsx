import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./selectDays.css"


export default function SelectDays({ days, handleChange, noPTag }) {

    return (
        <div className='select_days'>
            {!noPTag && <p>Price Change In</p>}
            <Select
                sx={{
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
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={days}
                label="Days"
                onChange={handleChange}
            >
                <MenuItem value={7}>7 Days</MenuItem>
                <MenuItem value={30}>30 Days</MenuItem>
                <MenuItem value={60}>60 Days</MenuItem>
                <MenuItem value={90}>90 Days</MenuItem>
                <MenuItem value={120}>120 Days</MenuItem>
                <MenuItem value={365}>1 Year</MenuItem>
            </Select>
        </div>
    );
}
