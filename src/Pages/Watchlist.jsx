import React, { useEffect, useState } from 'react'
import Header from '../Components/Common/Header/Header'
import { get100Coins } from '../Functions/get100Coins'
import TabsComponent from '../Components/Dashboard/Tabs/Tabs'
import { Link } from 'react-router-dom'
import DashboardPage from './DashboardPage'
import Button from '../Components/Common/Button/Button'

function Watchlist() {
    const watchlist = JSON.parse(localStorage.getItem("watchlist"))
    const [coins, setCoins] = useState([])

    useEffect(() => {
        if (watchlist)
            getData()
    }, [])

    async function getData() {
        const allCoins = await get100Coins()
        if (allCoins) {
            setCoins(allCoins.filter((coin) => watchlist.includes(coin.id)))
        }
    }
    return (
        <div>
            <Header />
            {watchlist?.length > 0 ? (<TabsComponent coins={coins} />) : (
                <div>
                    <h1 style={{ textAlign: "center" }}>
                        Sorry, Watchlist is Empty
                    </h1>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Link to='/dashboard'>
                            <Button text={'Dashboard'} onclick={() => console.log('clicked')} />
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Watchlist