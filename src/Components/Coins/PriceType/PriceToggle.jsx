import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './priceToggle.css'

export default function PriceToggle({priceType, handlePriceTypeChange}) {


    return (
        <div className='toggle-prices'>
            <ToggleButtonGroup
                value={priceType}
                exclusive
                onChange={handlePriceTypeChange}
                sx={{
                    "&.Mui-selected": {
                        color: "var(--purple) !important",
                    },
                    borderColor: "var(--purple)",
                    border: "unset !important",
                    "& .MuiToggleButtonGroup-grouped": {
                        border: "1px solid !important",
                        borderColor: "unset",
                        color: "var(--purple)",
                    },
                    "& .MuiToggleButton-standard": {
                        color: "var(--purple)",
                    }
                }}
                aria-label="text alignment"
            >
                <ToggleButton value="price">
                    Price
                </ToggleButton>
                <ToggleButton value="market_caps">
                    Market Cap
                </ToggleButton>
                <ToggleButton value="total_volumes">
                    Total Volume
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}
