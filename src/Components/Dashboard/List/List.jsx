import React from 'react'
import './list.css'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from '@mui/material';
import { convertNum } from '../../../Functions/convertNumbers';
import { Link } from 'react-router-dom'

function List({ coin }) {
    return (
        <Link to={`/coin/${coin.id}`}>
            <tr className='list-row' style={{ cursor: 'pointer' }}>
                <Tooltip title={coin.name} placement='bottom-end'>
                    <td className='info coin-img'>
                        <img src={coin.image} alt="coin-img" />
                    </td>
                </Tooltip>
                <td>
                    <div className='data list-data'>
                        <p className='coin-symbol'>{coin.symbol}</p>
                        <p className='coin-name'>{coin.name}</p>
                    </div>
                </td>
                {coin.price_change_percentage_24h > 0 ?
                    <Tooltip title='Price Change in 24H' placement='bottom-start'>
                        <td className='chip'>
                            <div className='chip-price'>
                                {coin.price_change_percentage_24h.toFixed(2) + '%'}
                            </div>
                            <div className='chip-icon'>
                                <TrendingUpRoundedIcon />
                            </div>
                        </td>
                    </Tooltip>
                    :
                    <Tooltip title='Price Change in 24H' placement='bottom-start'>
                        <td className='chip'>
                            <div className='chip-price chip-red'>
                                {coin.price_change_percentage_24h.toFixed(2) + '%'}
                            </div>
                            <div className='chip-icon chip-red'>
                                <TrendingDownRoundedIcon />
                            </div>
                        </td>
                    </Tooltip>
                }
                <Tooltip title='price'>
                    <td className='info-container'>
                        <h3 className='current-price' style={{ color: coin.price_change_percentage_24h > 0 ? 'var(--green)' : 'var(--red)' }}>${coin.current_price.toLocaleString()}</h3>
                    </td>
                </Tooltip>
                <Tooltip title='Total Volume' placement='bottom-end'>
                    <td className='list-total-volume'>
                        <p className='total-volume right-align'>
                            {coin.total_volume.toLocaleString()}
                        </p>
                    </td>
                </Tooltip>
                <Tooltip title='Market Cap' placement='bottom-end'>
                    <td className='market-cap-desktop'>
                        <p className='market-cap right-align'>
                            ${coin.market_cap.toLocaleString()}
                        </p>
                    </td>
                </Tooltip>
                <Tooltip title='Market Cap' placement='bottom-end'>
                    <td className='market-cap-mobile'>
                        <p className=' market-cap right-align '>
                            ${convertNum(coin.market_cap.toLocaleString())}
                        </p>
                    </td>
                </Tooltip>
            </tr>
        </Link>
    )
}

export default List