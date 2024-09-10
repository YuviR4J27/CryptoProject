import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Components/Common/Header/Header'
import Loader from '../Components/Common/Loader/Loader'
import { coinObj } from '../Functions/convertObject'
import List from '../Components/Dashboard/List/List'
import CoinInfo from '../Components/Coins/CoinInfo/CoinInfo'
import { getCoinData } from '../Functions/getCoinData'
import { getCoinPrices } from '../Functions/getCoinPrices'

function CoinPage() {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [coinData, setCoinData] = useState()
    const [days, setDays] = useState(30)
    useEffect(() => {
        if (id) {
            getData();
        }
    }, [id])

    async function getData() { //extract coin data and update the coinObj state
        const coinData = await getCoinData(id);
        if (coinData) {
            coinObj(setCoinData, coinData);
            const coinPrices = await getCoinPrices(id, days);
            if(coinPrices) {
                console.log("WOHOOOOO")
                setIsLoading(false)
            }
        }
        
    }

    return (
        <div>
            <Header />
            {isLoading ? (<Loader />) : (<>
                <div className='wrapper'>
                    <List coin={coinData} />
                </div>
                <CoinInfo heading={coinData.name} desc={coinData.desc} />
            </>
            )}
        </div>
    )
}

export default CoinPage