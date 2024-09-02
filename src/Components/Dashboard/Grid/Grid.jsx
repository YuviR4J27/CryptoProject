import React from 'react'
import './grid.css'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';

function Grid({ coin }) {
    return (
        <div className={`grid-container ${coin.price_change_percentage_24h < 0 && 'grid-container-red'}`}>
            <div className='info'>
                <img src={coin.image} alt="coin-img" />
                <div className='data'>
                    <p className='coin-symbol'>{coin.symbol}</p>
                    <p className='coin-name'>{coin.name}</p>
                </div>
            </div>
            {coin.price_change_percentage_24h > 0 ?
                <div className='chip'>
                    <div className='chip-price'>
                        {coin.price_change_percentage_24h.toFixed(2) + '%'}
                    </div>
                    <div className='chip-icon'>
                        <TrendingUpRoundedIcon />
                    </div>
                </div>
                :
                <div className='chip'>
                    <div className='chip-price chip-red'>
                        {coin.price_change_percentage_24h.toFixed(2) + '%'}
                    </div>
                    <div className='chip-icon chip-red'>
                        <TrendingDownRoundedIcon />
                    </div>
                </div>
            }
            <div className='info-container'>
                <h3 className='current-price' style={{ color: coin.price_change_percentage_24h > 0 ? 'var(--green)' : 'var(--red)' }}>${coin.current_price.toLocaleString()}</h3>
                <p className='total-volume'>
                    Total Volume : {coin.total_volume.toLocaleString()}
                </p>
                <p className='market-cap'>
                    Market Cap : ${coin.market_cap.toLocaleString()}
                </p>
            </div>

        </div>
    )
}

export default Grid